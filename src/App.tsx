import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import "./App.css";

function App() {
  const [storeName, setStoreName] = useState("Store");

  useEffect(() => {
    WebApp.ready();
    const params = new URLSearchParams(window.location.search);
    const s = params.get("store");
    if (s) setStoreName(s);
  }, []);

  
  return (
    <div className="container">
      <h1 className="title">{storeName}</h1>

      <div className="product-grid">
        <div className="card">
          <img src="/smileShark.jpg" alt="Shark" className="product-img" />
          <h3>Shark Toy</h3>
          <p>₹1999</p>
        </div>
      </div>
    </div>
  );
}

export default App;
