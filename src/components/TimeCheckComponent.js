import React from 'react';
import Button from '@material-ui/core/Button';
const TimeComponent =(props)=> {
    return (
        <Button variant="contained" color="primary">
        <div>{props.time}</div>
        </Button>
    );
  }
export default TimeComponent;