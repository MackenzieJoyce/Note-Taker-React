import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
const location = useLocation() 

  return (
    <header className='header'>
      <h1>{title}</h1>
      {/* Putting this in {} allows the button to be part of a condition */}
      {/* Rather than using a turnary, this is saying if the path you're on is '/' then you will also be seeing this Button */}
      {/* Else is implied, saying if its anything other than '/' don't show the button */}
      {/* The button is only shown if the path name is true */}
      {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}
    </header>
  );
};

Header.defaultProps = {
  title: 'Note Taker'
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
