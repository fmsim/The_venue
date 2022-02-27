import React from "react"
import { Drawer, List, ListItemButton } from "@mui/material"

const SideDrawer = props => {
  const links = [
    { where: "featured", value: "To top" },
    { where: "venunfo", value: "Venu NFO" },
    { where: "highlight", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" }
  ]

  const renderItem = item => (
    <ListItemButton onClick={() => alert(item.where)} key={item.where}>
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
