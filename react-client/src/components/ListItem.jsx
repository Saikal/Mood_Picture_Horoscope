import React from 'react';

const ListItem = (props) => (
  <div>
    <br></br><br></br><br></br> DATE is {props.todayDate} <br></br>
    <div>
      <br></br>Dear {props.sunsign}, <br></br><br></br>
      Seems like today you are {props.mood.mood}, {props.mood.keywords} <br></br>
      Your INTENSITY {props.mood.intensity} <br></br><br></br>
          { props.horoscope} <br></br>

    </div>
  </div>

)

export default ListItem;