import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

function MyIcon() {
  return (
    <li>
      <FontAwesomeIcon icon={faBagShopping} size="2x" color="black" />
    </li>
  );
}

export default MyIcon;
