import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Form = () => {
    // const [email,setEmail] = useState('');
    // const [price,setPrice] = useState('');
    const[form,setForm] = useState({'price':'','email':''})
    const [status,setStatus] = useState('Done')

    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    // useEffect(()=>{
    //     console.log(email,price)
    // },[price,email])

    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.log(form.email,form.price
        // )
        console.log(form,status)
    }

    
  return (
    <form onSubmit={handleSubmit} className='flex justify-center items-center gap-5' >
        <input onChange={handleChange} placeholder='Email' name='email' value={form.email} type="text" />
        <input onChange={handleChange} placeholder='Price' name='price' value={form.price} type="text" />
        <select onChange={(e)=>setStatus(e.target.value)} value={status}>
            <option value="Done">Done</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
        </select>
        <button className='border-1 p-2 cursor-pointer' type='submit'>SUBMIT</button>
    </form>
  )
}

export default Form
