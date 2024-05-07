import Header from "./Components/Header/Header";

import CoreConcepts from "./Components/CoreConcepts";
import "./index.css";

import Examples from "./Components/Examples";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}
