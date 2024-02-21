import React from 'react'
import './Sidebar.css'
import { Button, IconButton } from '@mui/material'
import { Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@mui/icons-material'
import SidebarOption from './SidebarOption'

function Sidebar() {
  return (
    <div className='sidebar'>
      <Button
      startIcon={<Add/>}
      className='sidebar_compose'>Compose</Button>

      <SidebarOption Icon={Inbox} title={"Inbox"} number={54} selected={true}/>
      <SidebarOption Icon={Star} title={"Starred"} number={3} />
      <SidebarOption Icon={LabelImportant} title={"Important"} number={3} />
      <SidebarOption Icon={NearMe} title={"Sent"} number={3} />
      <SidebarOption Icon={Note} title={"Drafts"} number={3} />
      <SidebarOption Icon={ExpandMore} title={"More"} number={3} />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
            <IconButton>
                <Person/>
            </IconButton>
            <IconButton>
                <Duo/>
            </IconButton>
            <IconButton>
                <Phone/>
            </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
