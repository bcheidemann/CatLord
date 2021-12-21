import info from './info';

export default {
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        { type: 'string' },
      ],
    },
    {
      title: 'ID',
      name: 'id',
      type: 'string',
    },
    {
      title: 'Publish',
      name: 'publishAt',
      type: 'datetime'
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
        info,
      ],
    },
  ]
};
