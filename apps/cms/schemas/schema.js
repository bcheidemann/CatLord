// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
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
          type: 'array',
          of: [
            { type: 'block' },
            { type: 'image' },
            {
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
            },
          ]
        },
      ]
    },
    {
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
            {
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
            },
          ],
        },
      ]
    },
  ]),
})
