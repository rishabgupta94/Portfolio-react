import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {

  const [mounted, setMounted] = useState(false);
  const [ipAddress, setipAddress] = useState("");

  if(!mounted) {
    fetch('https://api.ipify.org?format=jsonp?callback=?', {
      method: 'GET',
      headers: {},
    })
    .then(res => {
      return res.text()
    }).then(ip => {
      setipAddress(ip)
    });
  }

  useEffect(() => {
    setMounted(true)
  }, []);
 
  return (
    <div className="app">
      <Dashboard ipAddress={ipAddress}/>
    </div>
  );
}

export default App;
