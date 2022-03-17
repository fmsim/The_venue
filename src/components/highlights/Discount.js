import React, { useEffect, useState } from "react"
import { Fade, Slide } from "react-awesome-reveal"

const Discount = () => {
  const end = 30
  const [start, setStart] = useState(0)

  const percentage = () => {
    if (start < end) {
      setStart(prevCount => prevCount + 1)
    }
  }

  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart(prevCount => prevCount + 1)
      }, 30)
    }
  }, [start])

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={inView => {
            if (inView) {
              percentage()
            }
          }}
        >
          <div className="discount_percentage">
            <span>{start}%</span>
            <span>Off</span>
          </div>
        </Fade>

        <Slide right>
          <div className="discount_description">
            <h3>Purchase tickets before 20th June</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies</p>
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Discount
