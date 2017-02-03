import React from "react";
import Gifs from './Gifs';
export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			gif: [],
			default: 'https://media.giphy.com/media/3oEdv78D4Vj4sFidwc/giphy.gif',
			title: 'Giphy'
		}	
	}

	moreTrump() {
		const giphy = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=donald+trump';
		const img = document.querySelector('img');
		fetch(giphy)
		  .then(data => data.json())
		  .then(info => {
		  	const gif = info.data.fixed_height_downsampled_url;
		  	this.setState({gif, title: "TrumpTron"});
		  });
	}

	lessTrump() {
		const giphy = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=obama+biden';
		const img = document.querySelector('img');
		fetch(giphy)
		  .then(data => data.json())
		  .then(info => {
		  	console.log(info);
		  	const gif = info.data.fixed_height_downsampled_url;
		  	this.setState({gif, title: "ObamaTron"});
		  });  
	}

	render() {
    return (
      <div>
        <Gifs gifs={this.state.gif} default={this.state.default} moreTrump={this.moreTrump.bind(this)} lessTrump={this.lessTrump.bind(this)} title={this.state.title} />
      </div>
    );
  }
}
