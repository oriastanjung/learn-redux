import React, { useState, useEffect } from "react";
import logo from "./logo.svg";

import "./App.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//     };
//   }

//   componentDidMount() {
//     this.timerId = setInterval(() => this.tick(), 1000);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>{this.state.date.toLocaleTimeString()}</p>
//         </header>
//       </div>
//     );
//   }
// }

function App() {
  const [date, setDate] = useState(new Date());
  const tick = () => {
    setDate(new Date())
  }

  setInterval(() => tick(), 1000)
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{date.toLocaleTimeString()}</p>
        </header>
      </div>
  );
}

export default App;
