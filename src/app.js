/**
 * Created by gemis on 3/9/17.
 */
import React,{Component} from 'react';
import ReactDOM from'react-dom'

class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>Hello</div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))