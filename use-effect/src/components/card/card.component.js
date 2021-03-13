import React from 'react';

import { CardContainer } from './card.styles';

function Card({ children }) {
  return <CardContainer>{children}</CardContainer>;
}

export default Card;