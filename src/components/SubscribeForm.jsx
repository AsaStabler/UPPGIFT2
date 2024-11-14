import React, { useState } from 'react'

const SubscribeForm = () => {
    const [formData, setFormData] = useState( {email: ''})
    const [submitted, setSubmitted] = useState(false) 

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const handleOk = () => {
        setSubmitted(false)
    } 

    const handleSubmit = async (e) => {
        e.preventDefault() 
        //alert('Submit ok')
        
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'  
            },
            body: JSON.stringify(formData)
        }) 
        
        if (res.ok) {
          setSubmitted(true) 
          setFormData({email: ''})
        }
    }

   if (submitted) {
        return (
            <div className="subscribe-group">
              <p className="text-lg">Tack för ditt meddelande!</p>
              
              <button className="btn-ok text-nav" onClick={handleOk}>Ok</button>
            </div>
        )
    }  

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="subscribe-group">
                <i className="fa-regular fa-envelope icon"></i>
                <input type="email" className="form-input-email email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" />
                <button type="submit" className="btn-subscribe">Subscribe</button>
            </div>
        </form>
    )
}

export default SubscribeForm