import { ArticleSummary } from '@catlord/lib-cms';
import Link from 'next/link';

const tag = (value: string) => <span>{value}</span>;

const ArticleCard = ({ author, id, name, publishAt, tags }: ArticleSummary) => (
  // eslint-disable-next-line @next/next/link-passhref
  <Link href={`/news/${id}`}>
    <div>
      <h1>{name}</h1>
      <h3>{author}</h3>
      <p>{publishAt}</p>
      {tags.map(tag)}
    </div>
  </Link>
);

export default ArticleCard;
