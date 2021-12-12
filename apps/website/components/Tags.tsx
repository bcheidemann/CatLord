import styled from 'styled-components';

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.div`
  border-radius: 16px;
  padding: 4px 16px;
  border: solid 2px #bbb;
  transition: 0.3s;
  color: #bbb;
  font-size: 0.75rem;
  cursor: default;

  &:hover {
    background: #eee2ff;
    border-color: #bd9cee;
    color: #bd9cee;
    box-shadow: 2px 2px 10px 0px rgba(189, 156, 238, 0.5);
  }
`;

Object.assign(Tags, {
  Tag,
});

export default Tags as typeof Tags & { Tag: typeof Tag };
