import { useState } from 'react';
import './App.css';
import {allHeroes} from "./HeroData";

const App = () => {
  return (
    <>
      <h1>Superhero Wiki</h1>
      {allHeroes.map((heroInfo, index) => {
        return <HeroCard key={index} heroObj={heroInfo}/>
      })};
    </>
  );
};

const HeroCard = (props) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <p>HERO: {props.heroObj.hero}</p>

      {show && (
        <div>
          <p>INFO: {props.heroObj.info}</p>
          <p>VILLAIN: {props.heroObj.villain}</p>
        </div>
      )}

      <button onClick={() => setShow(!show)}>{show ? "Hide Info" : "Show Info"}</button>
    </>
  );
};

export default App;