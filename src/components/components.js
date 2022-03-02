// import React from "react";


import React from "react"

let cars = ["Subaro", "BMW", "Fiat"];
let fruits = ["apple", "tomato", "banana"];
export function Components() {
    

    

    return (
        <div className = "component" >
            <h1>Components Examples </h1>
            <ComponentWithProps a="I am prop A" />
            <ComponentWithState />
            <Welcome />
            <ShowManyItems data = {cars}/>
            <ShowWorkingWithEvents/>


        </div>
    )
}


export function ComponentWithProps(props) {

    return (
        <div className = "component">
            <p>

                props.a = {props.a}

            </p>

        </div>
    )
}

class ComponentWithState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            state1: "I am state 1",
            providedData: cars
        };
        setTimeout(()=>{
            this.setState({providedData: fruits})
        }, 3000)
       

    }
    

    render() {
      
        return (
            <div className = "component">
                <p>
                    I am compoennt with state
                    <br/>
                    state 1 = {this.state.state1}
                </p>
                <button onClick={()=>{
                    this.setState({
                        state1: "new state"
                    })
                }}>
                    Change state 

                </button>
                <ShowManyItems data = {this.state.providedData}/>
            </div>
        )
    }
}

class ShowManyItems extends React.Component{
    constructor(props){
        super(props);
        console.log('====================================');
        console.log("I am show many ");
        console.log('====================================');
        console.log("data = ", props.data);
    }

    render(){

        let dataView = this.props.data.map(item=>{
            return <p key = {item}>{item}</p>
        });


        return(
            <div className = "component">
                <h1>Show Many Items </h1>
                {dataView}
            </div>
        )
    }


}


//https://reactjs.org/docs/handling-events.html
class ShowWorkingWithEvents extends React.Component{
    constructor(props){
      super(props);
        this.state = {
            myInputData: "initial data"
        }

    }

    changeState = (event)=>{
        console.log("evnet = " , event);
        this.setState({
            myInputData: event.target.value
        })
    }

    render(){

       


        return(
            <div className = "component">
                <h1>Show Working With Events </h1>
                inset data: 
                <input value ={this.state.myInputData} onChange = {this.changeState}/>

               <h1>value = {this.state.myInputData}</h1> 
                
            </div>
        )
    }


}






// import React from 'react';

// function components(props) {
//     return (
//         <div>

//         </div>
//     );
// }

// export default components;
class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}