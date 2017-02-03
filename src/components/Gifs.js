import React from 'react';
import Trump from '../../public/img/trump-pence.png';
import Obama from '../../public/img/obama-biden2.png';
import gifs from '../scss/_gifs.scss';

// const background = {
// 	background: '#DC2424', /* fallback for old browsers */
// 	background: '-webkit-linear-gradient(to bottom, #E0162B , #FFFFFF, #0052A5)',
// 	background: 'linear-gradient(to bottom, #E0162B , #FFFFFF, #0052A5)'
// }
export default class Gifs extends React.Component {
	render() {
		return (
			<div>
				<h1>Which Presidency Will Have The Best Gifs</h1>
				<h2>{this.props.title}</h2>
				<a className="btn" onClick={this.props.moreTrump}><img className="president" src={Trump} alt={'trump'}/><span>Trump Administration</span></a>
				<a className="btn" onClick={this.props.lessTrump}><img className="president" src={Obama} alt={'obama'}/><span>Obama Administration</span></a>
				<div className="screen tv-bg">
					<img crossOrigin={"use-credentials"} className="content" src={this.props.gifs} />
				</div>

			</div>
		)
	}
}