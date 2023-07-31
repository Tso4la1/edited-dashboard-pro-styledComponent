import React from 'react';
import moreIcon from "./../../../assets/icon-ellipsis.svg"

export default function Icons ({label, style}) {
  
   if (label === "moreOption") {
     return (<img src={moreIcon} alt='More-Details' style={style} />)
   }
  
}
