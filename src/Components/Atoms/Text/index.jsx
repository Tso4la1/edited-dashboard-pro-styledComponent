import React from 'react'

export default function Text({ type, text, className }) {
  if (type === "p") {
    return (<p type={type} className={className}> {text} </p>)
  }
  if (type === "h3") {
    return (<h3 type={type} className={className}> {text} </h3>)
  }
  if (type === "h2") {
    return (<h2 type={type} className={className}> {text} </h2>)
  }
  return <span className={className} type={type}>{text}</span>

}
