import React from 'react';
import Info from "../components/info";

export default {
  name: 'info',
  type: 'object',
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
      type: 'rich-text',
    },
  ],
  preview: {
    select: {
      level: 'level',
      content: 'content',
    },
    component: Info,
  }
};
