import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Delete extends Component {
    render() {
        const listItems=this.props.value.map((item,index)=>{
      return (
          <div key={item}>
                {item}
                <button onClick={()=>this.props.handleDelete(index)}>Delete</button>
          </div>
      )
        })
        return (
            <div>
                {listItems}
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleDelete: (index) => {
            const action={type:'Delete',index}
            dispatch(action)
        }
    }
}
export default connect(null,mapDispatchToProps)(Delete)

