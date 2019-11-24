import React from 'react';
import Typography from '@material-ui/core/Typography';

export const cardSubtextStyle = {
  marginLeft: '20px',
  padding: '5px',
  fontWeight: 400,
};

export default function CardSubtextItem({ text, styles }) {
  return (
    <Typography
      variant='overline'
      style={{...cardSubtextStyle, ...styles}}
    >
      {text}
    </Typography>
  )
}
