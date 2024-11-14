import React, { useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState( {fullName: '', email: '', specialist: '' })
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
        
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'  
            },
            body: JSON.stringify(formData)
        }) 
        
        if (res.ok) {
           setSubmitted(true) 
           setFormData({fullName: '', email: '', specialist: '' })
        }
        
        /* if (res.ok) {
            const data = await res.text()
            console.log(data)
        } else {
            const data = await res.json()
            console.log(data)
        } */   
    } 

    if (submitted) {
        return (
            <div className="consultation-box">
               <h2 className="h2 center">Tack för ditt meddelande!</h2>
               <h4 className="h4 distance">Vi återkommer inom kort med en läkartid.</h4> 
               <button className="btn-ok text-nav" onClick={handleOk}>Ok</button>
            </div>
        )
    }

    return (
        <div className="consultation-box">
            <h2 className="h2">Get Online Consultation</h2>
            
            <form onSubmit={handleSubmit} noValidate>
                <div className="contactform  text-nav">

                    <div className="label-input">
                        <label forname="fullName">Full Name</label>
                        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="First and last name" />
                    </div>
                
                    <div className="label-input">
                        <label forname="email">Email address</label>
                        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" />
                    </div>
                
                    <div className="label-input">
                        <label forname="specialist">Specialist</label>
                        <input type="text" id="specialist" name="specialist" value={formData.specialist} onChange={handleChange} required placeholder="Choose specialist" />
                    </div>

                    <button type="submit" className="text-nav btn-submit-contactform">Make an appointment</button>              
                </div>   
            </form>
        </div>
    )
}

export default ContactForm