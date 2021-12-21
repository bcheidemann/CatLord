import info from './info';

export default {
  title: 'Content',
  name: 'content',
  type: 'array',
  of: [
    { type: 'block' },
    { type: 'image' },
    info,
  ],
};
