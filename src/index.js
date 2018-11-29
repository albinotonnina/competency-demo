import React from "react"
import { render } from "react-dom"
import Demo from "./Demo"
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Demo />
      </div>
    )
  }
}

render(<App />, document.getElementById("root"))
