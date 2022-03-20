import React from "react"
import { Element } from "react-scroll"

import "./resources/styles.css"

import Header from "./components/header_footer/Header"
import Footer from "./components/header_footer/Footer"
import Featured from "./components/featured"
import VenueNfo from "./components/venusNfo"
import Highlights from "./components/highlights"
import Pricing from "./components/pricing"
import Location from "./components/location"

const App = () => {
  return (
    <div className="App">
      <Header />

      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venunfo">
        <VenueNfo />
      </Element>

      <Element name="highlight">
        <Highlights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  )
}

export default App
