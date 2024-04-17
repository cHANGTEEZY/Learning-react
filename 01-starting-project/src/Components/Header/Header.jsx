import "./Header.css";

import reactImg from "../../assets/react-core-concepts.png";

const dynamicArray = ["Fundamental", "Crucial ", "Core"];

function randomIntGen(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const randomLetter = dynamicArray[randomIntGen(2)];

  return (
    <>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {randomLetter} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </>
  );
}

export default Header;
