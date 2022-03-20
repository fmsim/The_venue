import React from "react"

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4803.1432013574795!2d-0.7384409233314455!3d52.992105877592415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878344b29e369ed%3A0xf2990da6784d9bc4!2sWestborough%2C%20Newark%2C%20Vereinigtes%20K%C3%B6nigreich!5e0!3m2!1sde!2sde!4v1647797058309!5m2!1sde!2sde" width="100%" height="500px" frameBorder="0" title="gglemaps" allowfullscreen></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  )
}

export default Location
