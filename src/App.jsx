import { Suspense } from "react";
import "./App.css";

import Bottles from "./components/Bottle/Bottles";

const bottlesPromise = fetch("/bottles.json").then((res) => res.json());

function App() {
  // const bottles = [
  //   { id: 1, name: "Pink Nike bottle", price: 250, color: "pink" },
  //   { id: 2, name: "Pink Nike bottle", price: 250, color: "pink" },
  //   { id: 3, name: "Pink Nike bottle", price: 250, color: "pink" },
  //   { id: 4, name: "Pink Nike bottle", price: 250, color: "pink" },
  // ];

  return (
    <>
      <div className="text-xl font-medium">
        {/* ________write your code below____________  */}
        <Suspense fallback={<h3>bottles are loading...</h3>}>
          <Bottles bottlesPromise={bottlesPromise}></Bottles>
        </Suspense>
      </div>
    </>
  );
}

export default App;
