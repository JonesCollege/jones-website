import React from 'react'
import "./BeerBikePeople.css"
import ReactRoundedImage from "react-rounded-image";
import fillerProfilePic from "./images/profilepic.png";
import PropTypes from 'prop-types'

const BeerBikePeople = ({image, name, email, color}) => {
  return (
    <div className = "person">
        
        <div className="text">
            <div className="profile-image">
                <ReactRoundedImage className="profile-image"
                    image = {image} 
                    roundedColor="white"
                    imageWidth="110"
                    imageHeight="110"
                    roundedSize="13"
                    borderRadius="ff70"
                />
            </div>
            <div className="name" style={{color:color}}>{name}</div>
            <div className="email">{email}</div>
        </div>

    </div>
  )
}

BeerBikePeople.defaultProps = {
    image: fillerProfilePic,
    name: "Person Name",
    email: "email@rice.edu",
    color: "black"
}


export default BeerBikePeople