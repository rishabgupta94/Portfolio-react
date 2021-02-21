import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {

  const [mounted, setMounted] = useState(false);

  if(!mounted) {
    fetch('https://api.ipify.org?format=jsonp?callback=?', {
      method: 'GET',
      headers: {},
    })
    .then(res => {
      return res.text()
    }).then(ip => {
      console.log('ip', ip);
    });
  }

  useEffect(() => {
    setMounted(true)
  }, []);
 
  return (
    <div className="app">
      <Dashboard />
    </div>
  );
}

export default App;
