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
    topScore: 0, 
    clickedName: "", 
    youLose: ""
  } 

  //Handle image click event  
  clickArtist = (id) =>  {
    console.log(`You clicked ${id}`) 
    this.state.artists.forEach((artist) => {
      //I want to change click from false to true
      if(artist.id === id) {
        this.setState({clickedName: artist.name})
        if(artist.clicked){
          console.log(`${artist.name} has ALREADY been clicked`)
          //This is where you reset the game, because player clicked on artist card 
            //That was previously clicked
            this.setState({youLose: "You Lose! Game Over!"}, () => this.resetGame())          
            // this.resetGame();
          }
        else {
          artist.clicked = true;
          console.log(`${artist.name} click status is ${artist.clicked}`)
          //You want to update the score here, since this where where the artist card
            //is initially clicked
            this.increaseScore();
            // shuffle artists array
            setTimeout(() => this.shuffleArtistArray(this.state.artists), 200);
        }
      }                     
    })
  }

  //Shuffle function graciously borrowed from: 
  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArtistArray = (array) => {    
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
        
        this.setState({artists:array}, 
          () => {
            console.log("Rearranging array now...")
        })         
    }      
  
  //Function to increase the score when the artist card is initially
  //
  increaseScore = () => {
    this.setState({score: this.state.score + 1}, () => this.updateTopScoreState())     
  }

  //Function to update the top score
  updateTopScoreState = (event) => {
    //compare score and topScore
    console.log(`${this.state.score} and ${this.state.topScore}`)
    if(this.state.score > this.state.topScore){
      this.setState({topScore : this.state.score}, 
        () => {
          console.log(`HERE IS YOUR TOP SCORE!`)
          console.log(this.state.topScore)
        }
    )}
  }

  //Function to reset the game, if artist is already clicked
  resetGame = () => {
    console.log('You Lose! Resetting the game!')
    //When resetting the game, I am only resetting the score and not the topScore
      //So that when the game "resets", the top score remains
    this.setState({
      score: 0, 
      clickedName: "",
      youLose:""
    });

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
        <Header score={this.state.score} topScore={this.state.topScore} clickedName={this.state.clickedName} youLose={this.state.youLose}/>
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

