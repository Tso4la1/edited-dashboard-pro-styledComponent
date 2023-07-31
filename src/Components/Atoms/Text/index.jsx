import React from 'react'

export default function Text({ word }) {
  if (word === "userReport") {
    return (<p> Report for </p>)
  }
  if (word === "firstname") {
    return <p> Jeremy </p>
  }
  if (word === "surname") {
    return <p> Robson </p>
  }
  if (word === "day") {
    return <p> Daily </p>
  }
  if (word === "week") {
    return <p> Weekly </p>
  }
  if (word === "month") {
    return <p> Monthly </p>
  }
  if (word === "selca") {
    return <p> Self Care </p>
  }
  if (word === "soc") {
    return <p> Social </p>
  }
  if (word === "exer") {
    return <p> Exercise </p>
  }
  if (word === "stud") {
    return <p> Study </p>
  }
  if (word === "pla") {
    return <p> Play </p>
  }
  if (word === "wor") {
    return <p> Work </p>
  }
  if (word === "t32") {
    return <p className='bigText'> 32hrs </p>
  }
  if (word === "t10") {
    return <p className='bigText'> 10hrs </p>
  }
  
  if (word === "t4") {
    return <p className='bigText'> 4hrs </p>
  }
  if (word === "t5") {
    return <p className='bigText'> 5hrs </p>
  }
  if (word === "t2") {
    return <p className='bigText'> 2hrs </p>
  }
  if (word === "lw36") {
    return <p className='smallText'> Last Week - 36hrs </p>
  }
  if (word === "lw8") {
    return <p className='smallText'> Last Week - 8hrs </p>
  }
  if (word === "lw7") {
    return <p className='smallText'>Last Week - 7hrs</p>
  }
  if (word === "lw5") {
    return <p className='smallText'> Last Week - 5hrs </p>
  }

  if (word === "lw10") {
    return <p className='smallText'> Last Week - 10hrs </p>
  }
  if (word === "lw2") {
    return <p className='smallText'> Last Week - 2hrs </p>
  }

}
