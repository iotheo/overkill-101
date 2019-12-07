import * as React from 'react';
import * as propTypes from 'prop-types';

import { render } from 'react-dom';

import './css/index.scss';

interface IProps {
  title: string;
}

const App: React.FC<IProps> = ({ title }) => <div className="xd">{title}</div>;

render(<App title="Typescript success" />, document.getElementById('root'));

App.propTypes = {
  title: propTypes.string.isRequired,
};
