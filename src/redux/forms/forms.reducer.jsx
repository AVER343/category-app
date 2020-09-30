import ACTION_TYPES from './forms.action.types'
import {changedValues} from './action.utils'

const INITIAL_STATE ={
    category:['icon','description','name'],
    forms:[{'user':'username','category':'works'},{'user':'username','category':'works'}]
}
const FormReducer =(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case(ACTION_TYPES.SUBMIT_FORM):
            return {...state}
        case(ACTION_TYPES.ADD_FORM):
        console.log(state,action.payload)
            return {...state,forms:state.forms.concat(action.payload)}
        case(ACTION_TYPES.ADD_CATEGORY):
            if(!state.category.find(elem=>elem==action.payload))
            {
               const category= state.category.concat(action.payload)
               return({...state,category})
            }
            return state
        case(ACTION_TYPES.CHANGE_VALUES):
            const {value,index,elem}=action.payload
            if(elem.toLowerCase()=='category')
            {
                if(!state.category.includes(value))
                {
                    state.category.push(value);
                }
            }
            return {...state,forms:changedValues(value,index,elem,state.forms)}
        default:
            return state
    }
}
export default FormReducer