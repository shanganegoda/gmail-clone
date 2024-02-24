import React, { useEffect, useState } from 'react'
import './EmailList.css'
import { ArrowDropDown, CheckBoxOutlineBlank, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material'
import { Icon, IconButton } from '@mui/material'
import Section from './Section'
import EmailRow from './EmailRow'
import { db } from './firebase'

function EmailList() {

  const [emails, setEmails] = useState([]);

  //useEffect -> run this piece of code ONCE, when Email list component loads
  useEffect(() => {
    //onSnapshot is a real time listener
    db.collection('emails')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => 
      setEmails(snapshot.docs.map(doc => ({
        id : doc.id,
        data : doc.data()
      })
      )))
  }, [])

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
        {emails.map(({id , data : {to , subject , message, timestamp}}) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds*1000).toUTCString()}
          />
        ))}
        <EmailRow
            title="Twitch"
            subject="subject"
            description="message"
            time="10 pm"
            >
        </EmailRow>
        <EmailRow
            title="Twitch"
            subject="subject"
            description="message"
            time="10 pm"
            >
        </EmailRow>
        <EmailRow
            title="Twitch"
            subject="subject"
            description="message"
            time="10 pm"
            >
        </EmailRow>
        <EmailRow
            title="Twitch"
            subject="subject"
            description="message"
            time="10 pm"
            >
        </EmailRow>
        <EmailRow
            title="Twitch"
            subject="subject"
            description="message"
            time="10 pm"
            >
        </EmailRow>
        <EmailRow
            title="Twitch"
            subject="subject"
            description="message"
            time="10 pm"
            >
        </EmailRow>
        <EmailRow
            title="Twitch"
            subject="subject"
            description="message"
            time="10 pm"
            >
        </EmailRow>
        <EmailRow
            title="Twitch"
            subject="subject"
            description="message"
            time="10 pm"
            >
        </EmailRow>
        <EmailRow
            title="Twitch"
            subject="subject"
            description="message"
            time="10 pm"
            >
        </EmailRow>
        <EmailRow
            title="Twitch"
            subject="subject"
            description="message"
            time="10 pm"
            >
        </EmailRow>
        <EmailRow
            title="Twitch"
            subject="subject"
            description="message"
            time="10 pm"
            >
        </EmailRow>
        <EmailRow
            title="Twitch"
            subject="subject"
            description="message"
            time="10 pm"
            >
        </EmailRow>
        <EmailRow
            title="Twitch"
            subject="subject"
            description="message"
            time="10 pm"
            >
        </EmailRow>
        <EmailRow
            title="Twitch"
            subject="subject"
            description="message"
            time="10 pm"
            >
        </EmailRow>
        <EmailRow
            title="Twitch"
            subject="subject"
            description="message"
            time="10 pm"
            >
        </EmailRow>
      </div>
    </div>
  )
}

export default EmailList
