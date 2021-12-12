import { SyncLoader } from 'react-spinners';
import styled from 'styled-components';

const Center = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageLoading = () => (
  <Center>
    <SyncLoader color="#191919" size={15} />
  </Center>
);
