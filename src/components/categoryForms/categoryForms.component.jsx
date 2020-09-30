import React, { Component } from 'react'

import Forms from '../forms/forms'
import InputField from '../input/input'
import {Table} from 'react-bootstrap'
import {connect} from 'react-redux'
import useState from 'react'
import {withRouter} from 'react-router-dom'

const CategoryComponent =(props)=>{
    let location=props.location.pathname.split('/')[2]
    let categoryTab =props.forms.forms.map(form=>form.category.toLowerCase()==location.toLowerCase()?form:null)
    console.log(location)
    return(<div>
        {console.log(categoryTab)}
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>{`Category - ${location.toUpperCase()}`}</th>
            </tr>
        </thead>
        <tbody>
            {categoryTab.map((form,index)=>form?<tr>
                                    <h2>{`FORM -`}</h2>
                                    <Forms form={form} index={index}/>
                                    <hr style={{marginTop:'50px',marginBottom:'50px'}}/>
                                </tr>:null)}
        </tbody>
        </Table>
    </div>)
}
const mapStateToProps =state=>({
    forms: state.forms
})
export default connect(mapStateToProps)(withRouter(CategoryComponent))