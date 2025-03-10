import React, { useState } from 'react'
import { accordionData } from './data.js'
import './accordion.css'

function Accordion() {
    const [clicked, setClicked] = useState([])
    const [isMultiSelect, setIsMultiSelect] = useState(false)

    const toggle = (index) => {
        if (isMultiSelect) {
            const newClicked = clicked.includes(index)
                ? clicked.filter(item => item !== index)
                : [...clicked, index]
            setClicked(newClicked)
        } else {
            setClicked(clicked.includes(index) ? [] : [index])
        }
    }

    return (
        <div className="accordion-container">
            <button onClick={() => setIsMultiSelect(!isMultiSelect)}>
                {isMultiSelect ? 'Switch to Single Select' : 'Switch to Multi Select'}
            </button>
            <div className="accordion-wrapp">
                {accordionData && accordionData.length > 0 ? (
                    accordionData.map((item) => (
                        <div className="accordion-item" key={item.id}>
                            <div className="accordion-title" onClick={() => toggle(item.id)}>
                                <h3>{item.title}</h3>
                                <span>{clicked.includes(item.id) ? '▲' : '▼'}</span>
                            </div>
                            {clicked.includes(item.id) && (
                                <div className="accordion-content">
                                    <p>{item.content}</p>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div>No data found</div>
                )}
            </div>
        </div>
    )
}

export default Accordion
