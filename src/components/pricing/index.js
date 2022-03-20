import React from "react"
import { Zoom } from "react-awesome-reveal"

import MyButton from "../utils/MyButton"

const Pricing = () => {
  const priceState = {
    prices: [100, 150, 200],
    position: ["Balcony", "Medium", "Star"],
    desc: ["Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when", "an unknown printer took a galley of type and scrambled it to make a type specimen book. It", "has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."],
    linkto: ["https://sales.com/b", "https://sales.com/m", "https://sales.com/s"],
    delay: [500, 0, 500]
  }

  const showBoxes = () =>
    priceState.prices.map((box, index) => (
      <Zoom key={index} className="pricing_item" delay={priceState.delay[index]}>
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${priceState.prices[index]}</span>
            <span>{priceState.position[index]}</span>
          </div>
          <div className="pricing_description">{priceState.desc[index]}</div>
          <div className="pricing_buttons">
            <MyButton text="Purchase" style={{ color: "#fff" }} link={priceState.linkto[index]} />
          </div>
        </div>
      </Zoom>
    ))

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  )
}

export default Pricing
