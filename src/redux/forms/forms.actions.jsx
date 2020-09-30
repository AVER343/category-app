import ACTION_TYPES from './forms.action.types'

export const SUBMIT_FORM=(fieldDetails)=>({
    type: ACTION_TYPES.ADD_FIELD,
    payload:fieldDetails
})
export const changeValues=(props)=>({
    type: ACTION_TYPES.CHANGE_VALUES,
    payload:props
})  
export const newCategory=(props)=>({
    type: ACTION_TYPES.ADD_CATEGORY,
    payload:props
})  
export const ADD_FORM=(props)=>({
    type: ACTION_TYPES.ADD_FORM,
    payload:props
})  