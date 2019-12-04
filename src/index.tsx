import * as React from 'react';
import { render } from 'react-dom';

import './css/index.scss';

interface IProps {
  title: string;
}

const App: React.FC<IProps> = props => <div className="xd">{props.title}</div>;

render(<App title="Typescript success" />, document.getElementById('root'));
