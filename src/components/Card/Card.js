import React from 'react'
import "./Card.css"
import birbankKart from "../../assets/images/"

const Card = () => {
  return (
    <div>
        <div className='qutu'>
                <img src={birbankKart} alt="Logo"/>
					<a href="#"><span class="span_qutu">Birbank karti</span> sifaris et</a>
				</div>
    </div>
  )
}

export default Card