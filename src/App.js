import React from "react";
import "./App.css"
import axios from "axios"


class App extends React.Component{
  state = { advice: ""};



  componentDidMount() {
    this.fetchAdvice();

  }

  fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
    .then((response) => {
      console.log(response);

    })
    .catch((error)=> {
      console.log(error)

    })

  }

  // function declaration 

  render() {
    return (
      <h1>APP</h1>
    )
  }
}

export default App;