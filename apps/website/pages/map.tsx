import styled from 'styled-components';
import { PageParameters } from '../components/MainPage';

const WorldMap = styled.iframe.attrs({
  src: '/tmp/map/index.html',
})`
  width: 100%;
  height: calc(100vh - 50px);
  border: unset;
`;

export function Map() {
  return (
    <WorldMap />
  );
}

Map.parameters = {
  fullscreen: true,
} as PageParameters;

export default Map;
