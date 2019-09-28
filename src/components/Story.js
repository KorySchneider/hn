import React, { useState } from 'react';
import { connect } from 'react-redux';

import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const mapState = state => ({
  visible: state.visibleValid,
});

function Story({ data, timeout, visible }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (data.url) window.open(data.url);
    if (data.text) setExpanded(expanded => !expanded);
  }

  return (
    <Slide
      direction='right'
      in={visible}
      mountOnEnter
      unmountOnExit
      key={data.title}
      style={{ transitionDelay: `${timeout}ms` }}
    >
      <Card
        onClick={handleClick}
        style={{
          margin: '2em auto',
          cursor: 'pointer',
        }}
      >
        <CardContent>
          <Typography variant='h5'>
            {data.title}
          </Typography>
          <Typography>
            {expanded && data.text}
            {!expanded && data.text &&
              data.text.substring(0, 80) + '...'
            }
          </Typography>
          <Typography>
            {data.score}
          </Typography>
        </CardContent>
      </Card>
    </Slide>
  )
}

export default connect(mapState)(Story);
