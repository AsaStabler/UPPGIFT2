import React, { useState, useEffect} from 'react'
import AccordionPanel from './AccordionPanel'
import axios from 'axios'


const Accordion = () => {

  const [accordionPanels, setAccordionPanels] = useState([])

  const getDataUsingAxios = async () => {
    const res = await axios.get('https://win24-assignment.azurewebsites.net/api/faq')
    setAccordionPanels(res.data)
  }

  useEffect(() => {
    getDataUsingAxios()
  }, [])

  return (
    <div className="accordion">
    {
        accordionPanels.map((item) => (<AccordionPanel key={item.id} item={item} />))
    }      
    </div>
  )
}

export default Accordion