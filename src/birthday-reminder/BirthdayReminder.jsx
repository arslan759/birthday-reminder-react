import React, { useState } from 'react'
import { Persons } from './data'
import './birthday.css'

function BirthdayReminder() {
    const [persons , setPersons] = useState(Persons)

    const removeItem = (id) => {
        let newPersons = persons.filter((item)=> item.id !== id)
        setPersons(newPersons)
    }
  return (
    <React.Fragment>
        <div className='reminder container'>
            <h2>{persons.length} birthdays total</h2>
            {
                persons.map((item)=>(
                    <div className='row d-flex mt-3'>
                        <div className='col-2 image me-2'>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='col details'>
                            <h4>{item.name}</h4>
                            <p>{item.age} years</p>
                        </div>
                        <div className='col-3'>
                            <button type='button' className='remove btn mt-3 w-100' onClick={()=>removeItem(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            }
            <button type='button' className='remove-all btn mt-3 w-100' onClick={()=>setPersons([])}>Clear All</button>
        </div>
    </React.Fragment>
  )
}

export default BirthdayReminder