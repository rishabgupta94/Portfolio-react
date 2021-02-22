import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import Dashboard from "./components/Dashboard";

function App() {

  const IpToDynamo = async (ip) => {
    let data = {
      body: `{"ipAddress": "${ip}"}`,
    };
    try {
      await axios.post(
        "https://3ep0mukzzc.execute-api.ca-central-1.amazonaws.com/Prod/portfolio/ipaddress",
        data,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  }


  useEffect(() => {
    fetch('https://api.ipify.org?format=jsonp?callback=?', {
      method: 'GET',
      headers: {},
    })
    .then(res => {
      return res.text()
    }).then(ip => {
  IpToDynamo(ip);

    });
  },[]);
 
  return (
    <div className="app">
      <Dashboard/>
    </div>
  );
}

export default App;
