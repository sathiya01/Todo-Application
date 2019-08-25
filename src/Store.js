import { createStore } from 'redux';

const initialState={
    inputValue:[],
    index:0
}
const reducer=(state=initialState,action)=>{
  
    switch(action.type){
        case 'Add_action':
            return Object.assign({},state,{inputValue:[...state.inputValue,action.text]})
        case 'Delete':
            return   Object.assign({},state,{
                inputValue : state.inputValue.filter((i,index)=> {
                    return index !== action.index
                })})
      case 'ClearAll':
          return  initialState
        default:
            return state
    }
}
const store=createStore(reducer)
export default store
