import React from 'react'
import Herosection from '../components/Herosection'

const page = () => {
  return (
    // passing props to tell the react to use values dynamically 
   <Herosection title={'Our stories'} imageurl ={'about1.svg'}/>
  )
}

export default page
