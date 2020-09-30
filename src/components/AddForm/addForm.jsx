import React,{useState} from 'react'

import {ADD_FORM} from '../../redux/forms/forms.actions'
import {Button} from 'react-bootstrap'
import {ERROR_ADDING} from '../../redux/error/error.actions'
import FormInput from '../input/input'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const AddForm=({ERROR_ADDING,category,ADD_FORM,history})=>{
    const [addForm,setAddForm]=useState({name:'',email:'',panCard:''})
    let [essentials,setEssentials] = useState(['name','email','panCard'])
    let [newOnes,setNew] = useState('')
    let [field,setField] = useState(false)
    let [categoryName,setCategory] = useState('name')
    const onSubmit=()=>{
        if(Object.values(addForm).filter(elem=>elem=='').length!=0)
        {
            console.log(Object.values(addForm).map(elem=>elem==''))
            ERROR_ADDING({errors:[{error:'Fields cannot be empty !'}]})
            return
        }
        ADD_FORM({...addForm,category:categoryName})
        history.push('/')
    }
    const fun=()=>{
        if(newOnes!='')
        {
            setAddForm({...addForm,[newOnes]:''})
            setField(!field); 
            setEssentials([...essentials,newOnes])
            setNew('')
        }
    }

    return(<div>
       <form>
       {essentials.map(elem=><FormInput handleChange={(e)=>setAddForm({...addForm,[elem]:e.target.value})} label={elem} value={addForm[elem]}/>)}
       <select onChange={(e)=>setCategory(e.target.value)} class="form-control">
                {category.map((element,index)=><option selected={'name'}>{element}</option>)}
        </select>
       {field? <FormInput value={newOnes} handleChange={(e)=>setNew(e.target.value)} Label="New Field"/>  :null}
       {field?  <Button variant="success" onClick={()=>{newOnes==''?ERROR_ADDING({errors:[{error:'Cannot add field without label !'}]}):fun()}}> ADD NEW FIELD </Button>:null}
       <div style={{marginTop:"20px",marginBottom:"20px"}}>
       <b> <h3>{field?null:<div><Button onClick={()=>{setField(!field)}} variant='info'>+</Button>ADD FIELD</div>}</h3></b>
       <b> <h3>{!field?null:<div><Button onClick={()=>{setField(!field)}} variant='danger'>-</Button>STOP ADDING</div>}</h3></b>
       </div>
          <Button onClick={()=>onSubmit()} variant="primary">SUBMIT FORM</Button>
    </form>
    </div>)
}
const mapDispatchToProps=(dispatch) =>({
    ERROR_ADDING:(error)=>dispatch(ERROR_ADDING(error)),
    ADD_FORM:(props)=>dispatch(ADD_FORM(props))
})
const mapStateToProps =(state)=>({
    category:state.forms.category
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddForm))