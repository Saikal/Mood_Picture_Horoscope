import React from 'react';
import ListItem from './ListItem.jsx';
import ListPics from './ListPics.jsx';

const List = (props) => (
  <div>
    <h4> SUNSIGNS: <br></br>
        Aries <br></br>
        Taurus <br></br>
        Gemini <br></br>
        Cancer <br></br>
        Leo <br></br>
        Virgo <br></br>
        Libra <br></br>
        Scorpio <br></br>
        Sagittarius <br></br>
        Capricorn <br></br>
        Aquarius <br></br>
        Pisces <br></br>
    </h4>
    Your { props.items.length } days HOROSCOPE is ready!

    { props.items.map(item => <ListItem todayDate={item.date} sunsign={item.sunsign} horoscope={item.horoscope} mood={item.meta} pics={item.moodPictures}/>)}
    { props.items.map(item => <ListPics pics={item.moodPictures} />)}
  </div>
)

export default List;