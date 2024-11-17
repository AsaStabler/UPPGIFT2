import React, { useState } from 'react'

const SubscribeForm = () => {
    const [formData, setFormData] = useState( {email: ''})
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false) 


    const validateField = (name, value) => {
        let error = ''

        if (name === 'email' &&  !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
            error = "Must be a valid email (eg. username@example.com)."
        }

        setErrors(prevErrors => ({...prevErrors, [name]: error}))
    }

    const validateForm = () => {
        const newErrors = {}

        if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
            newErrors.email = "Must be a valid email (eg. username@example.com)."
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;  //Här görs return av true eller false
                                                     //True om det inte finns några errors, annars false
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})

        validateField(name, value)
    }

    const handleOk = () => {
        setSubmitted(false)
    } 

    const handleSubmit = async (e) => {
        e.preventDefault() 

        if (validateForm()) {
            console.log('form valid')

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

        } else {
            console.log('form invalid')
            //Errormeddelande ska skrivas ut för de fält som inte är korrekt ifyllda
        }
    }

   if (submitted) {
        return (
            <div className="subscribe-group">
                <div className="thankyou-msg">
                    <p className="h5">Thank you!</p>
                    <button className="btn-ok text-nav" onClick={handleOk}>Ok</button>
                </div>
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
            <span className="error-msg">{errors.email && errors.email}</span>
        </form>
    )
}

export default SubscribeForm