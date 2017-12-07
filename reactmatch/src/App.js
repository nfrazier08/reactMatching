import React, {Component} from 'react';
import artists from "./artists.json";
import ArtistCard from "./components/ArtistCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

// {...} This is a spread operator- the properties of the object that you pass in are 
  //copied onto the components props

class App extends Component {
  //Define my current state
  state = {
    // toggleClick: false
    artists:artists, 
    score: 0, 
    topScore: 0
  } 

  //Handle image click event  
  clickArtist = (id) =>  {
    console.log(`You clicked ${id}`) 
    this.state.artists.forEach((artist) => {
      //I want to change click from false to true
      if(artist.id === id) {
        if(artist.clicked){
          console.log(`${artist.name} has already been clicked`)
          //This is where you reset the game, because player clicked on artist card 
            //That was previously clicked
            this.resetGame();
        }
        else {
          artist.clicked = true;
          console.log(`You have clicked ${artist.name}`)
          //You want to update the score here, since this where where the artist card
            //is initially clicked
            this.increaseScore();
        }
      }                     
    })
  }
  
  //Function to increase the score when the artist card is initially clicked
  increaseScore = () => {
    this.setState({score: this.state.score + 1}) 
  }

  //Function to reset the game, if artist is already clicked
  resetGame = () => {
    this.setState({score: 0}) 
  }
  



  //This is what I am rendering to the page
    //Using "current state to set scores to 0"
  render() {
    //This is showing me my array of artist objects
    console.log(this.state)
    return (
      <Wrapper>        
        <Header score={this.state.score} topScore={this.state.topScore}/>
          <div>
            {this.state.artists.map(artist => {
              return <ArtistCard {...artist}
              clickArtist = {this.clickArtist}              
              key={artist.id} />
            })}            
          </div>
      </Wrapper>
    )
  }
};

export default App;

