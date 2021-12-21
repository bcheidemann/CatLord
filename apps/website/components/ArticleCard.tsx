import { ArticleSummary } from '@catlord/lib-cms';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Tags from './Tags';

const Card = styled.section`
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: 0.3s;
  margin-top: 16px;

  &:hover {
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    background: #f0f0f0;

    & > svg {
      color: #191919;
    }
  }
`;

const LeftCard = styled.div`
  flex: 1;

  & > h2 {
    margin-block-start: 0;
  }
`;

const Icon = styled(FontAwesomeIcon).attrs({
  icon: faChevronRight,
  width: 32,
  height: 32,
})`
  transition: 0.3s;
  color: #bbb;
`;

const ArticleCard = ({ author, id, name, publishAt, tags }: ArticleSummary) => (
  // eslint-disable-next-line @next/next/link-passhref
  <Link href={`/news/${id}`}>
    <Card>
      <LeftCard>
        <h2>{name}</h2>
        <h3>
          {author} - {new Date(publishAt).toLocaleDateString()}
        </h3>
        {tags && (
          <Tags>
            {tags.map((tag) => (
              <Tags.Tag key={tag}>{tag}</Tags.Tag>
            ))}
          </Tags>
        )}
      </LeftCard>
      <Icon />
    </Card>
  </Link>
);

export default ArticleCard;
