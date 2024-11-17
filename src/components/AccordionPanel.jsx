import React, { useState, useEffect } from 'react'

const AccordionPanel = ({item}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
        const newState = !isOpen
        setIsOpen(newState)
    }

    return (
        <div className={`accordion-panel-open ${isOpen ? 'open': ''}`}>
            <div className="question" onClick={toggleAccordion}>
                <div className="text-nav">{item.title}</div>
                <span className="btn-circle-acc">  
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
            </div>
            <div className="answer">
                <div className="expandable">
                    <p className="text-sm">{item.content}</p>
                </div>
            </div>
        </div>
    )
}

export default AccordionPanel