import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

export default function Home() {
  const [storeName, setStoreName] = useState("Store");

  useEffect(() => {
    WebApp.ready();
    const s = new URLSearchParams(window.location.search).get("store");
    if (s) setStoreName(s);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold text-center mb-6">
        {storeName}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
          <img
            src="/smileShark.jpg"
            alt="Shark Toy"
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h3 className="font-medium text-lg">Shark Toy</h3>
            <p className="text-gray-700 font-semibold mt-1">₹1,999</p>
            <button className="mt-3 w-full bg-black text-white py-2 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
