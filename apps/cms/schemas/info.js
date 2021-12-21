export default {
  name: 'info',
  type: 'document',
  title: 'Info',
  fields: [
    {
      title: 'Level',
      name: 'level',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
      ],
    },
  ]
};
