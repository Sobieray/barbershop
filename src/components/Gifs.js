import React from 'react';
//Images
import Trump from '../../public/img/trump-pence.png';
import Obama from '../../public/img/obama-biden2.png';
//Styles
import Styles from '../scss/_gifs.scss';

export default class Gifs extends React.Component {
	render() {
		return (
			<div id="gif">
				<h1>Which Presidency Will Have The Best Gifs</h1>
				<h2>{this.props.title}</h2>
				<div class="controls">
					<a className="btn" onClick={this.props.moreTrump}><img className="president" src={Trump} alt={'trump'}/><span>Trump Administration</span></a>
					<p>VS</p>
					<a className="btn" onClick={this.props.lessTrump}><img className="president" src={Obama} alt={'obama'}/><span>Obama Administration</span></a>
				</div>
				<div className="screen tv-bg">
					<img crossOrigin={"anonymous"} className="content" src={this.props.gifs} />
				</div>
			</div>
		)
	}
}