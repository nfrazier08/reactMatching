import React from 'react';
import artists from "./artists.json";
import ArtistCard from "./components/ArtistCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

// import './App.css';

const App = () => (
  <Wrapper>
    <Title>Artist Memory Game</Title>
      <div>
        {artists.map(artist => {
          return <ArtistCard {...artist} />
        })}
      </div>
  </Wrapper>
);

export default App;


//This gives me one, I need all!
// <ArtistCard
//   name = {ArtistList[0].name}
//   image = {ArtistList[0].image}
// />