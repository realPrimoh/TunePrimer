import React, { Component } from 'react';
import './App.css';
import Icon from 'react-icons-kit';
import { playCircleO } from 'react-icons-kit/fa/playCircleO'; 

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playingUrl: '',
            audio: null,
            playing: false
        }
    }
    
    playAudio(previewUrl) {
        let audio = new Audio(previewUrl);
        if (!this.state.playing) {
          audio.play();
          this.setState({
            playing: true,
            playingUrl: previewUrl,
            audio
          })
        } else {
          if (this.state.playingUrl === previewUrl) {
            this.state.audio.pause();
            this.setState({
              playing: false
            })
          } else {
            this.state.audio.pause();
            audio.play();
            this.setState({
              playing: true,
              playingUrl: previewUrl,
              audio
            })
          }
        }
      }
    render() {
        console.log('gallery props', this.props);
        const { tracks } = this.props;
        return (
         <div>
            {tracks.map((track, k) => {
                    const trackImg = track.album.images[0].url;
                    console.log('track', track);
                    return (
                    <div key={k} className="track" onClick={() => this.playAudio(track.preview_url)}>
                    <img src={trackImg} className="track-image" alt="track" />  
                      <div className="play-box"> 
                       <Icon className="track-play" icon={playCircleO} />
                            </div>
                    <p className="track-text">{track.name}</p>
                    </div>
                    )
                })}
            </div>
        )
    }
    
}

export default Gallery;