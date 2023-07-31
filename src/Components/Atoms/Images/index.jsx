import React from 'react';
import jeremy from './../../../assets/image-jeremy.png';
import work from './../../../assets/icon-work.svg';
import study from './../../../assets/icon-study.svg';
import social from './../../../assets/icon-social.svg';
import play from './../../../assets/icon-play.svg';
import selca from './../../../assets/icon-self-care.svg';
import ex from './../../../assets/icon-exercise.svg';


export default function Images({imageName, height, style}) {
  if (imageName === "profilePic") {
  return(<img className="profilPic" src={jeremy} alt="jeremy-profile" height= {height}/>) 
  }

  if (imageName === "backWork") {
    return <img className='userTimerListBackImg' src={work} alt="work" style={style}/>
  }
  if (imageName === "backStudy") {
    return <img className='userTimerListBackImg'  src={study} alt="work" style={style}/>
  }
  if (imageName === "backSocial") {
    return <img className='userTimerListBackImg'  src={social} alt="work" style={style}/>
  }
  if (imageName === "backPlay") {
    return <img className='userTimerListBackImg'  src={play} alt="work" style={style}/>
    }
    if (imageName === "backselca") {
      return <img className='userTimerListBackImg'  src={selca} alt="work" style={style}/>
  }
  if (imageName === "backEx") {
    return <img className='userTimerListBackImg'  src={ex} alt="work" style={style}/>
    }
}
