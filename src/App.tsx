import * as React from 'react';
import * as propTypes from 'prop-types';
import { render } from 'react-dom';

import HorizontalScrolling from '../components/HorizontalScrolling/index';


import './css/index.scss';

interface IProps {
  title: string;
}

const App: React.FC<IProps> = () => (
  <HorizontalScrolling>
    {[...Array(30)].map((_, index) => <div className="test">{index}</div>)}
  </HorizontalScrolling>
);

// TODO remove requested trailing comma on last function param
render(
  <App title="Typescript success" />, document.getElementById('root')
);

App.propTypes = {
};
