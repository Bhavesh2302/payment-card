import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import PaymentDetails from "./components/PaymentDetails";
import { useState } from "react";

function App() {
  //   // console.log(data)

  return (
    <div className="App">
     
      <div>
        {data.data1.map((payment) => (
          <PaymentDetails {...payment} payment={payment} />
        ))}
      </div>
    </div>
  );
}

export default App;
