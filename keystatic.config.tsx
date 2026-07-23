import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: process.env.NODE_ENV === 'development'
    ? { kind: 'local' } 
    : { kind: 'github', repo: 'emindmrts/emindev.net' },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        draft: fields.checkbox({ label: 'Draft' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags', itemLabel: props => props.value }),
        content: fields.mdx({ label: 'Content' }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        draft: fields.checkbox({ label: 'Draft' }),
        demoURL: fields.text({ label: 'Demo URL' }),
        repoURL: fields.text({ label: 'Repo URL' }),
        content: fields.mdx({ label: 'Content' }),
      },
    }),
  },
});
