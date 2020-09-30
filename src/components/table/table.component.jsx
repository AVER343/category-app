import React,{useEffect, useState} from 'react'

import FormInput from '../input/input'
import {Link} from 'react-router-dom'
import {Table} from 'react-bootstrap'

const TableForm=({rows})=>{
    let [searching,setSearch]= useState('')
    let [category,setCategory]= useState(rows)
    const handleChange=async(e)=>{
        e.persist()
        await setSearch(e.target.value);
    }
    useEffect(()=>{
        setCategory([...rows.map(row=>row.toLowerCase()).filter(row=>row.includes(searching.toLowerCase()))])
    },[searching])
    return(<div>
    <FormInput style={{width:'50%'}} handleChange={handleChange} value={searching} label="Search"/>
    <Table striped variant="dark" bordered hover>
        <thead>
        <tr>
            {'Category'.toUpperCase()}
        </tr>
        </thead>
        <tbody>
            {category?category.map(row=>{return(<tr><td><b><Link to={`/category/${row}`}>{row.toUpperCase()}</Link></b></td></tr>)}):null}
        </tbody>
    </Table>
        </div>)
}
export default TableForm