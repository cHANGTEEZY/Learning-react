import { useState } from "react";
import Header from "./Components/Header/Header";
import CoreConcept from "./Components/CoreConcepts";
import TabButton from "./Components/TabButton";
import { CORE_CONCEPTS } from "./data";
import "./index.css";
import { EXAMPLES } from "./data";

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Please Select a Topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function selected(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  console.log("tab button executing");
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton
              onSelect={() => {
                selected("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => {
                selected("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => {
                selected("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => {
                selected("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}
