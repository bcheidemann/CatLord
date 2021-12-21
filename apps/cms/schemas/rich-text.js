import info from './info';

export default {
  name: 'rich-text',
  type: 'array',
  of: [
    { type: 'block' },
    { type: 'image' },
    info,
  ],
};
