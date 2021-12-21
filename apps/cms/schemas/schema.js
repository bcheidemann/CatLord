import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import page from './page';
import article from './article';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    page,
    article,
  ]),
});
