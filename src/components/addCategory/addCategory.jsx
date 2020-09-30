import React,{useState} from 'react'

import {Button} from 'react-bootstrap'
import {ERROR_ADDING} from '../../redux/error/error.actions'
import FormInput from '../input/input'
import {connect} from 'react-redux'
import {newCategory} from '../../redux/forms/forms.actions'
import {withRouter} from 'react-router-dom'

const AddCategory=({ADD_CATEGORY,ERROR_ADDING,history})=>{
    const [newCategory,setCategory]=useState('')
    const handleSubmit=()=>{
        if(newCategory=='')
        {
            ERROR_ADDING({errors:[{error:'New category cannot be empty'}]})
            return 
        }
        ADD_CATEGORY(newCategory)
        setCategory('');
        history.push('/')
    }
    return(<div>
        <FormInput handleChange={(e)=>setCategory(e.target.value)} value={newCategory} label={'Category'.toUpperCase()}/>
        <Button onClick={handleSubmit} >ADD CATEGORY</Button>
    </div>)
}
const mapDispatchToProps =(dispatch) =>({
    ADD_CATEGORY:(name)=>dispatch(newCategory(name)),
    ERROR_ADDING:(errors)=>dispatch(ERROR_ADDING(errors))
})
export default withRouter(connect(null, mapDispatchToProps)(AddCategory))