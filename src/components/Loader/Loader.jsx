import { BallTriangle } from 'react-loader-spinner';
import { Wrap } from './LoaderStyled';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Loading = () => (
  <Wrap>
    <BallTriangle />;
  </Wrap>
);
