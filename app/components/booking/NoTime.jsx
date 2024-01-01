import React from 'react'

const NoTime = (props) => {
    const active = props.state

  return (
    <div id='time' className={active ? "flex h-full justify-center items-center" : "hidden"}>
      <p>Please Select A Time</p>
    </div>
  )
}

export default NoTime
