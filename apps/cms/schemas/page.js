export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Path',
      name: 'path',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'rich-text',
    },
  ]
};
