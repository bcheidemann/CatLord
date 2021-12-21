import content from './content';

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
    content,
  ]
};
