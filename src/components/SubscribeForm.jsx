import React, { useState } from 'react'

const SubscribeForm = () => {
    const [formData, setFormData] = useState( {email: ''})
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false) 

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})

        if (value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, [name]: `The ${name} field is required.`}))
        } else {
            setErrors(prevErrors => ({...prevErrors, [name]: ''}))
        } 
    }

    const handleOk = () => {
        setSubmitted(false)
    } 

    const handleSubmit = async (e) => {
        e.preventDefault() 
        //alert('Submit ok')

        const newErrors = {}
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = `The ${field} field is required.`
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
        
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
            <span>{errors.email && errors.email}</span>
        </form>
    )
}

export default SubscribeForm