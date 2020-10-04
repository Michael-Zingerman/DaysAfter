import React, { useState } from "react";
import Header from "./ui/header/Header";
import { TestForm } from "./StoreForm/StoreForm";
import { useStore } from "./store/StoreContext";
import { useObserver } from "mobx-react";

export default function App() {
  const [numberOfDots, setnumberOfDots] = useState(15);
  const [dots, seDots] = useState([
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
  ]);

  // const dataStore = useStore();
  return useObserver(() => (
    <>
      <Header />
      <div className="main-section">
        {dots.map((name) => (
          <div className="firefly" />
        ))}
      </div>
      {/* <ul>
        {dataStore.data.map((data) => (
          <li onClick={() => dataStore.removeData(data.text)} key={data.text}>
            {data.text}
          </li>
        ))}
      </ul> */}

      {/* <TestForm /> */}
    </>
  ));
}
