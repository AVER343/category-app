import FormInput from '../input/input'
import React from 'react'
import {changeValues} from '../../redux/forms/forms.actions'
import {connect} from 'react-redux'
import {useState} from 'react'

const form=({form,changeValues,index,forms,category})=>{
        let keys =Object.keys(forms[index])
        let values = Object.values(forms[index])
        return(<div className="container">
           {keys.map((elem,idx)=>{
                    return(elem=='category'?
                    <div>
                       <select onChange={(e)=>changeValues(e.target.value,index,elem)} class="form-control">
                           {category.map((element,index)=><option selected={element==values[idx]}>{category[index]}</option>)}
                        </select>
                    </div>
                    :<FormInput value={values[idx]} handleChange={(e)=>changeValues(e.target.value,index,elem)} label={elem} />)          
        })}
        </div>)
}
const mapDispatchToProps =(dispatch) =>({
    changeValues:(value,index,elem)=>dispatch(changeValues({value,index,elem}))
})
const mapStateToProps =(state)=>({
    forms:state.forms.forms,
    category:state.forms.category
})
export default connect(mapStateToProps,mapDispatchToProps)(form)