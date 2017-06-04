import React from 'react';
import { Component } from 'react';

class FetchData extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			loading: true
		}
	}

	componentDidMount() {
			const request = new Request('https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Ccover%2Csummary%2Cstoryline%2Cfirst_release_date&limit=10&offset=0&search=zelda', {
				headers: new Headers({
					'X-Mashape-Key': 'EUQMsXMjGmmshSjK8dQ9W31H8UOtp1wKG3bjsnwgRTlndgTXjR'
				})
			});

			fetch(request)
			.then(response => response.json())
			.then(json => this.setState({
				data: json,
				loading: false
			}))
	}

	render() {
		if (this.state.loading === false && this.state.data) {
			console.log(this.state.data);
			return ( 
				<div>
					<p>This brings in 5 Zelda game results from IGDB.com using Fetch</p>
					<div className='results-container'>
						{/* Images are loaded weirdly for now due to 401 errors from the API's img service, waiting for ticket response*/}
						{this.state.data.map(game => 
							<div className='results' key={game.id}>
								<h3>{game.name}</h3>
								<img src={'//images.igdb.com/igdb/image/upload/t_cover_big/'+ game.cover.cloudinary_id + '.jpg'} alt='games' />
								<p className='summary'>{game.storyline ? game.storyline : game.summary || 'This game has no summary'}</p>
							</div>
						)}
					</div>
				</div>);
		} else {
				return (
					<div>Loading...</div>
				);
		}
	}
}

export default FetchData
