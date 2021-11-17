import dotenv from 'dotenv';
import { cleanEnv, str, bool } from 'envalid';
import { ClientConfig } from "next-sanity";

dotenv.config({ path: '.env' });

const cleanedEnv = cleanEnv(
  process.env,
  {
    SANITY_DATASET: str({ default: 'production' }),
    SANITY_PROJECT_ID: str(),
    SANITY_USE_CDN: bool({ default: true }),
    SANITY_API_VERSION: str({ default: '2021-10-21' }),
  },
  {
    reporter: ({ errors }) => {
      const entries = Object.entries(errors);

      // no errors to report
      if (entries.length === 0) {
        return;
      }

      // Parse errors to a readable format
      const summary = entries
        .map(([key, value]) => {
          return `${key}: ${value}`;
        })
        .join('\n');

      // throw
      throw new Error(
        `Error while processing environment variables:\n\n${summary}`
      );
    },
  }
);

export const sanityConfig: ClientConfig = {
  dataset: cleanedEnv.SANITY_DATASET,
  projectId: cleanedEnv.SANITY_PROJECT_ID,
  useCdn: cleanedEnv.SANITY_USE_CDN,
  apiVersion: cleanedEnv.SANITY_API_VERSION,
};
