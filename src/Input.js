import React, { Component } from 'react';
import {connect} from 'react-redux';
import Delete from './Delete'
import store from './Store'
class Input extends Component {
    constructor(){
        super()
        this.state={
            givenInput:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.clearInput=this.clearInput.bind(this)
    }
    handleChange(e){
        this.setState({
            givenInput: e.target.value
        })
    }
    clearInput(){
        this.setState({
            givenInput:''
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.givenInput} onChange={this.handleChange}/>
                <button  onClick={()=>this.props.handleClick(this.state.givenInput,this.clearInput)} >Add</button>
                <button onClick={this.props.ClearAll}>ClearAll</button>
                <Delete value={this.props.inputValue} store={store}/>
                
         </div>
        )
    }
}
const mapStateToProps=(state)=>{
    
    return {
        inputValue:state.inputValue
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleClick: (e,f)=>{
            f()
          const action={type:'Add_action',text:e}
          dispatch(action)
        },
        ClearAll:()=>{
            const action={type:'ClearAll'}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Input) 

