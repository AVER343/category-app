import './App.css';

import { ERROR_ADDING, ERROR_DELETING } from './redux/error/error.actions';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import AddCategory from './components/addCategory/addCategory'
import AddForm from './components/AddForm/addForm'
import {Alert} from 'react-bootstrap'
import CategoryComponent from './components/categoryForms/categoryForms.component'
import HeaderComponent from './components/header/header'
import React from 'react';
import TableForm from './components/table/table.component'
import { connect } from 'react-redux'

function App({FORMS,errors,ERROR_DELETING}) {
  return (
    <div className="container">
    <HeaderComponent/>
    {console.log(errors)}
    <div>{errors?errors.errors.map((elem,idx)=> (<Alert key={idx} variant='danger' onClose={()=>{ERROR_DELETING()}} dismissible>
      <b>{elem.error}</b>
    </Alert>)):null}
    </div>
    <Switch>
      <Route exact path="/" render={() => <div className="container"><TableForm rows={FORMS.category}/></div>}/>
      
      <Route path="/add/category" render={() => <AddCategory/>}/>
      <Route path="/add/form" render={() => <AddForm/>}/>
      <Route exact path="/category/:category" render={() => <CategoryComponent/>}/>
    </Switch>
    </div>
  );
}
const mapStateToProps =(state)=>({
  FORMS:state.forms,
  errors:state.errors
})
const mapDispatchToProps=dispatch=>({
  ERROR_DELETING:()=>dispatch(ERROR_DELETING())
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
