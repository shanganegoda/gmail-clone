import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./EmailRow.css"
import { CheckBoxOutlineBlank, LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'

function EmailRow({id, title, subject, description, time}) {

  const navigate = useNavigate()
  
  return (
    <div onClick={() => navigate("/mail")} className='emailRow'>
      <div className="emailRow__options">
        <IconButton>
            <CheckBoxOutlineBlank/>
        </IconButton>
        <IconButton>
            <StarBorderOutlined/>
        </IconButton>
        <IconButton>
            <LabelImportantOutlined/>
        </IconButton>
      </div>

      <h3 className="emailRow__title">
        {title}
      </h3>

      <div className="emailRow__message">
        <h4>{subject}{" "}
        <span className="emailRow__description">-
            {description}
        </span>
        </h4>
      </div>

      <p className="emailRow__time">{time}
      </p>
    </div>
  )
}

export default EmailRow
