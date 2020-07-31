import React, { useState } from "react"

import "./image-card.scss"


const ImageCard = ({ title, features, imageUrl, size }) => {
  const [isOpen, setInfo] = useState(false)

  const toggleInfo = () => {
    setInfo(isOpen => !isOpen)
  }

  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      > </div>
      <div className="content" onClick={toggleInfo}>
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className={isOpen ? "hidden" : "subtitle"}>Learn More</span>
        <span onClick={toggleInfo} className={isOpen ? "subtitle" : "hidden"}>
          Coming Soon!
        </span>
      </div>
    </div>

  )
}

export default ImageCard