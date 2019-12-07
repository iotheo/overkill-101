import * as React from 'react';
import * as PropTypes from 'prop-types';

import './css/index.scss';

interface IProps {
  children: any;
}

const HorizontalScrolling: React.FC<IProps> = ({ children }) => (
  <div className="horizontal-scrolling">
    {children}
  </div>
);

HorizontalScrolling.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HorizontalScrolling;
