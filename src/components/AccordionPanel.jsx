import React from 'react'

const AccordionPanel = ({item}) => {
  return (
    <div className="accordion-panel-open">
        <div className="question">
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