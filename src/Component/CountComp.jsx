import React,{Component} from "react";

class CountComp extends Component{
    state={
        count:1,
        name: "Ranjeth",
        movie: "SHARK",
    }
    handle= ()=>{
        this.setState({count: this.state.count+1})
    
    }
    render(){
        return(
            <>
    
            <h1>Count {this.state.count}</h1>
            <h2>as  {this.props.name}</h2>
            <button onClick={this.handle}>Add </button>
            
            </>
        )
    }
}
export default CountComp