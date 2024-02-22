import React from 'react'
import "./SendMail.css"
import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'

function SendMail() {

    const { register, handleSubmit, watch, formState : {errors} } = useForm();
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>.
                <Close onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input  placeholder='To' type="email" {...register("to",{ required: true })} />
                {errors.to && <p className='sendMail__error'>To is Required</p>}
                <input  placeholder='Subject' type="text" {...register('subject' , { required: true })} />
                {errors.subject && <p className='sendMail__error'>Subject is Required</p>}
                <input  className="sendMail__message" placeholder='Message...' type="text" {...register('message',{ required: true })} />
                {errors.message && <p className='sendMail__error'>Message is Required</p>}

                <div className="sendMail__options">
                    <Button
                        className='sendMail__send'
                        variant="contained"
                        color="primary"
                        type="submit"
                    >Send</Button>
                </div>

            </form>
        </div>
    )
}

export default SendMail
