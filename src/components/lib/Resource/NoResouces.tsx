import React from 'react'

interface props {
 courseCode: string
}

const NoResouces = ({ courseCode }: props) => {
  return (
   <h3>No Resources have been uploaded for {courseCode} </h3>
  )
}

export default NoResouces