import { createClient } from 'next-sanity';
import config from '../config';

const client = createClient(config);

export { client };
