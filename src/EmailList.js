import React from 'react'
import './EmailList.css'
import { ArrowDropDown, CheckBoxOutlineBlank, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material'
import { Icon, IconButton } from '@mui/material'
import Section from './Section'
import EmailRow from './EmailRow'

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <IconButton>
            <CheckBoxOutlineBlank />
          </IconButton>
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected></Section>
        <Section Icon={People} title="Social" color="#1A73E8"></Section>
        <Section Icon={LocalOffer} title="Promotions" color="green" ></Section>
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Twitch"
          subject="Hey fellow streamer!"
          description="This is test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow streamer!ldslkfkdm flsdkjflkd f fjklsdj flsdj flsd"
          description="This is test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow streamer!"
          description="This is test"
          time="10pm"
        />
      </div>
    </div>
  )
}

export default EmailList
