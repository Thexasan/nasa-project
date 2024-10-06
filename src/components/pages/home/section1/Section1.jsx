import axios from 'axios'
import React from 'react'

const Section1 = () => {
  async function  getMap() {
    try{
      let {data} = axios.get("")
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>Section1</div>
  )
}

export default Section1