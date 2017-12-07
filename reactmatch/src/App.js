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
          console.log(`${artist.name} has ALREADY been clicked`)
          //This is where you reset the game, because player clicked on artist card 
            //That was previously clicked
            this.resetGame();
        }
        else {
          artist.clicked = true;
          console.log(`${artist.name} click status is ${artist.clicked}`)
          //You want to update the score here, since this where where the artist card
            //is initially clicked
            this.increaseScore();
            this.updateTopScoreState();
        }
      }                     
    })
  }
  
  //Function to increase the score when the artist card is initially
  increaseScore = () => {
    this.setState({score: this.state.score + 1}) 
  }

  //Function to update the top score
  updateTopScoreState = (event) => {
    //compare score and topScore
    if(this.state.score > this.state.topScore){
      this.setState({topScore : this.state.score}, 
        () => {
          console.log(this.state.topScore)
        }
    )}
  }

  //Function to reset the game, if artist is already clicked
  resetGame = () => {
    console.log('You Lose! Resetting the game!')
    //When resetting the game, I am only resetting the score and not the topScore
      //So that when the game "resets", the top score remains
    this.setState({score: 0});
    this.state.artists.forEach((artist) => {
      artist.clicked = false;
      //Check to make sure the click status is being reset to false      
      console.log(artist.clicked)
    })
  }
 
  //This is what I am rendering to the page
  //Using "current state to set scores to 0"
  render() {
    //This is showing me my array of artist objects
    // console.log(this.state)
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

