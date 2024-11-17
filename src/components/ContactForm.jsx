import React, { useState } from 'react'

const ContactForm = () => {
    //const [options, setOptions] = useState([{ id: 1, text: "Cardiologist" }, { id: 2, text: "Dermatologist" }, { id: 3, text: "Family Physician"}, { id: 4, text: "Neurologist"}, { id: 5, text: "Pediatrician"}, { id: 6, text: "Psychiatrist"} ]) 
    const [formData, setFormData] = useState( {fullName: '', email: '', specialist: ''})
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false) 

    const validateField = (name, value) => {
        let error = ''

        if (name === 'fullName' && !/^[A-Öa-ö\s\-]{2,}$/.test(value)) {
            error = "Must be at least 2 characters long, no numbers."
        } else if (name === 'email' &&  !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
                error = "Must be a valid email (eg. username@example.com)."
        } else if (name === 'specialist' && !/^[A-Öa-ö0-9\s\-]{2,}$/.test(value)) {
                error = "Must be at least 2 characters long."  
        }

        setErrors(prevErrors => ({...prevErrors, [name]: error}))
    }
    
    const validateForm = () => {
        const newErrors = {}

        if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.fullName)) {
            newErrors.fullName = "Must be at least 2 characters long, no numbers."
        }

        if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
            newErrors.email = "Must be a valid email (eg. username@example.com)."
        }

        if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.specialist)) {
            newErrors.specialist = "Must be at least 2 characters long."
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;  //Här görs return av true eller false
                                                     //True om det inte finns några errors, annars false
    }
  
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})

        validateField(name, value)

/*
        if (value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, [name]: `The ${name} field is required.`}))
        } else {
            setErrors(prevErrors => ({...prevErrors, [name]: ''}))
        } 
*/
    }

    const handleOk = () => {
        setSubmitted(false)
    } 

    const handleSubmit = async (e) => {
        e.preventDefault() 
        //alert('Submit ok')

        if (validateForm()) {
            console.log('form valid')

            //Gör fetch här
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

        } else {
            console.log('form invalid')
            //Errormeddelande ska skrivas ut för de fält som inte är korrekt ifyllda
        }

/*      ERROR HANDLING No 1: Only checking for "required"

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
*/
 
/*      ERROR HANDLING No 1 (flyttat till anropet av validateForm() ovan)

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
*/
        
        /* THIS IS CODE FOR TESTING - FIRST DRAFT
        if (res.ok) {
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
               <h2 className="h2 center">Thank you for your message!</h2>
               <h4 className="h4 distance">We will return to you shortly with a time.</h4> 
               <button className="btn-ok text-nav" onClick={handleOk}>Ok</button>
            </div>
        )
    }

    return (
        <div className="consultation-box">
            <h2 className="h2">Get Online Consultation</h2>
            
            <form onSubmit={handleSubmit} noValidate>
                <div className="contactform  text-nav">

                    <div className="form-field">
                        <label forname="fullName">Full Name</label>
                        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="First and last name" />
                        <span className="error-msg">{errors.fullName && errors.fullName}</span>
                    </div>
                
                    <div className="form-field">
                        <label forname="email">Email address</label>
                        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" />
                        <span className="error-msg">{errors.email && errors.email}</span>
                    </div>
                
                    <div className="form-field">
                        <label forname="specialist">Specialist</label>
                        <input type="text" id="specialist" name="specialist" value={formData.specialist} onChange={handleChange} required placeholder="Specialist" />                      
                        <span className="error-msg">{errors.specialist && errors.specialist}</span>
                    </div>

                    <button type="submit" className="text-nav btn-submit-contactform">Make an appointment</button>              
                </div>   
            </form>
        </div>
    )
}

export default ContactForm