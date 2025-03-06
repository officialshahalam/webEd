import React from 'react'

const Meeting = ({params}) => {
  return (
    <div>
      meeting room number: #{params.id}
    </div>
  )
}

export default Meeting;