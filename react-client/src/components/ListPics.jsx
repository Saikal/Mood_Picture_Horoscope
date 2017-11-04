import React from 'react';

const ListPics = (props) => (
  <div>
        SEE YOU MOOD YESTERDAY, TODAY AND TOMMORROW: 
        <br></br>
        <img src={`${props.pics[0].urls.small}`} alt="boohoo" className="img-resp"/>
  </div>

)

export default ListPics;