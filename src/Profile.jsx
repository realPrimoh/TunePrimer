import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
    render() {
        console.log('this.props', this.props);
        let artist = {name: '', followers: {total: ''}, images: [{url: ''}], genres: []};
        artist = this.props.artist !== undefined ? this.props.artist : artist;
        
        return (
        <div className="Profile">
           <img 
           alt="Profile" 
           className="Profile-img" 
           src={artist.images[0].url}
            />
            <div className="Profile-info">
                <div className="Profile-name"><h1>{artist.name}</h1></div>
            <div className="Profile-popularity">Popularity Ranking: {artist.popularity}</div>
            <div className="Profile-followers">Followers: {artist.followers.total}</div>
            <div className="Profile-genres">Genres:
                {artist.genres.map((genre, k) => {
                  
                        return (
                        <li key={k}> {genre}</li>
                    )})
                }
            </div>
        </div>
        </div>
        
        )
    }
}

export default Profile;