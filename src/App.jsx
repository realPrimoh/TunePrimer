import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }
    
    search() {
        console.log('this.state', this.state);        
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';    
        var accessToken = 'BQCjaD_ITdlx9mtDNQXoo1PoSPmKNtVbmlARCTphSHPN137xhpL5wMa5xZZPbaGmN3ORAgUTYLY7bui37Wj86ojWEAxhvSF9lhMW-0mtRGeoAVOdAitkwxGjOaYq1QdFI9fedBaDdSqn6b3z5zenA-i-WS4OLvHSgg'
        var myHeaders = new Headers();

        var myOptions = {
          method: 'GET',
          headers:  {
            'Authorization': 'Bearer ' + accessToken
         },
          mode: 'cors',
          cache: 'default'
        };

        fetch(FETCH_URL, myOptions )
          .then(response => response.json())
          .then(json => {
            const artist = json.artists.items[0];
            const name = artist.name;
            console.log('artist', artist);
            this.setState({artist});
        })   
    }
        
                
    
    render() {
        return (
            <div className="App">
                <div className="App-title">Tune Primer</div>
                <div>
                <FormGroup>
                   <InputGroup>
                    <FormControl 
                    type="text" 
                    placeholder="Search for an Artist" 
                    value={this.state.query} 
                    onChange={event => {this.setState({query: event.target.value})}} 
                    onKeyPress={event => {
                               if (event.key === 'Enter') {
                                   this.search();
                               }
                           }} 
                    />
                    <InputGroup.Addon onClick={() => this.search()}>
                    <Glyphicon glyph="search"></Glyphicon>
                    </InputGroup.Addon>
                   </InputGroup>
                </FormGroup>
                </div>
                <Profile
                artist={this.state.artist}
                  />
                <div className="Gallery">
                    Gallery
                </div>
                </div>
            )
        }
}

export default App;