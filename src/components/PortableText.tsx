import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { ComponentProps } from "react";

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => {
      const id = typeof value === "object" && value?._key
        ? `h-${value._key}`
        : typeof children === "string"
          ? children.toLowerCase().replace(/\s+/g, "-")
          : "";
      return <h2 id={id}>{children}</h2>;
    },
    h3: ({ children, value }) => {
      const id = typeof value === "object" && value?._key
        ? `h-${value._key}`
        : typeof children === "string"
          ? children.toLowerCase().replace(/\s+/g, "-")
          : "";
      return <h3 id={id}>{children}</h3>;
    },
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    code: ({ children }) => <pre><code>{children}</code></pre>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?.url) return null;
      return <img src={value.asset.url} alt={value.alt || ""} />;
    },
    code: ({ value }) => {
      if (!value?.code) return null;
      return <pre><code>{value.code}</code></pre>;
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "";
      return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
    },
  },
};

type Props = {
  value: ComponentProps<typeof PortableText>["value"];
};

export function PT({ value }: Props) {
  return <PortableText value={value} components={components} />;
}
