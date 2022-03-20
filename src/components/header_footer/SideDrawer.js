import React from "react"
import { scroller } from "react-scroll"
import { Drawer, List, ListItemButton } from "@mui/material"

const SideDrawer = props => {
  const links = [
    { where: "featured", value: "To top" },
    { where: "venunfo", value: "Venu NFO" },
    { where: "highlight", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" }
  ]

  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    })
    props.onClose(false)
  }

  const renderItem = item => (
    <ListItemButton onClick={() => scrollToElement(item.where)} key={item.where}>
      {item.value}
    </ListItemButton>
  )

  return (
    <Drawer anchor={"right"} open={props.open} onClose={() => props.onClose(false)}>
      <List component="nav">{links.map(item => renderItem(item))}</List>
    </Drawer>
  )
}

export default SideDrawer
