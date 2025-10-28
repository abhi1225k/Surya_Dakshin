import React from 'react'
import './Journey.css'
import { assets } from '../../assets/assets'


const Journey = () => {
  return (
    <div className='journey'>
      
        <h1>Success Of Our Restaurant</h1>
        <video src={assets.suryaaa} autoPlay muted controls></video>
        <p>The success of a restaurant depends on a combination of factors, including delivering high-quality and consistent food,<br/>
         providing excellent customer service, and maintaining strong financial management. Key elements also include a strong brand and concept,<br/>
         strategic location, effective marketing, and the ability to adapt to new trends and technologies like online ordering</p>
      
    </div>
  )
}

export default Journey
