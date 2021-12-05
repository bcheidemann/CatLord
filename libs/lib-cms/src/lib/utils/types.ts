// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Content = any;

export type Article = {
  id: string;
  name: string;
  author: string;
  tags: string[];
  publishAt: string;
  content: Content;
};
