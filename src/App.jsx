import { useState } from 'react';
import './App.css';
import {allHeroes} from "./HeroData";

const App = () => {
  const [favourites, setFavourites] = useState([]);

  const handleAddToFav = (hero) => {
    let newFavArr = [...favourites]
    newFavArr.push(hero)
    setFavourites(newFavArr)
  }

  const handleRemove = (index) => {
    let newFavArr = [...favourites]
    newFavArr.splice(index, 1)
    setFavourites(newFavArr)
  }

  return (
    <>
      <h1>Superhero Wiki</h1>

      <div>
        <h3>Favourite Heroes</h3>
        {favourites.map((favHero, index) => {
          return <Favourites key={index} favHeroData={favHero} removeFunc={() => {handleRemove(index)}}/>
        })}
      </div>

      <h3>All Heroes</h3>

      {allHeroes.map((heroInfo, index) => {
        return <HeroCard key={index} heroObj={heroInfo} favFunc={handleAddToFav}/>
      })}
    </>
  );
};

const Favourites = ({favHeroData, removeFunc}) => {
  return(
    <div className="faves">
      <p>{favHeroData.hero}</p>
      <button id="button" onClick={removeFunc}>X</button>
    </div>
  )
}

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
      <button onClick={() => props.favFunc(props.heroObj)}>Add to favourites</button>
    </>
  );
};

export default App;