const PAYLOAD_URL = import.meta.env.PUBLIC_PAYLOAD_URL || 'http://localhost:3000';

export interface PayloadPost {
  id: string;
  collection: string;
  slug: string;
  body: string;
  data: {
    title: string;
    description: string;
    date: Date;
    tags: string[];
    draft: boolean;
    demoURL?: string;
    repoURL?: string;
  };
  render: () => Promise<{ Content: () => string }>;
}

export async function getPayloadCollection(collection: string): Promise<PayloadPost[]> {
  try {
    const res = await fetch(`${PAYLOAD_URL}/api/${collection}?limit=1000`);
    if (!res.ok) {
      console.warn(`Failed to fetch ${collection} from Payload. Returning empty array.`);
      return [];
    }
    const data = await res.json();
    return data.docs.map((doc: any): PayloadPost => {
      return {
        id: doc.id,
        collection,
        slug: doc.slug || doc.id,
        body: doc.content || '',
        data: {
          title: doc.title,
          description: doc.description,
          date: new Date(doc.date),
          tags: doc.tag || [],
          draft: doc.draft || false,
          demoURL: doc.demoURL,
          repoURL: doc.repoURL,
        },
        render: async () => ({
          Content: () => doc.content || '',
        }),
      };
    });
  } catch (error) {
    console.error(`Error fetching ${collection}:`, error);
    return [];
  }
}
