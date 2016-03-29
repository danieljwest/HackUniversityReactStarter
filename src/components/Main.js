import React from 'react'
import checker from '../utils/primeChecker'

export default function Main() {
  const array = []
  for (let i = 0; i <= 1000; i ++) {
    if (checker(i)) {
      array.push(i)
    }
  }

  return (<div>
  {array.map(m => <div>{m}</div>)}
    Hooray! We have a real live react component!
  </div>)
}
