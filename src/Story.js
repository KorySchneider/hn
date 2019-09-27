import React, { useState } from 'react';

import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Story(props) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (props.data.url) window.open(props.data.url);
    if (props.data.text) setExpanded(!expanded);
  }

  return (
    <Slide
      direction='up'
      in={props.data.title !== ''}
      mountOnEnter
      unmountOnExit
      key={props.data.title}
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
            {props.data.title}
          </Typography>
          <Typography>
            {expanded && props.data.text}
            {/*expanded &&
              <Button onClick={showComments(props.data.id)}>
                Comments
              </Button>
              */}
            {!expanded && props.data.text &&
              props.data.text.substring(0, 80) + '...'
            }
          </Typography>
        </CardContent>
      </Card>
    </Slide>
  )
}

export default Story;
