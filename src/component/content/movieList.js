import React, { Component } from 'react';
import { API_KEY, API_BASE_URL, IMAGE_BASE_URL } from '../defenition/app';
import { Link } from 'react-router-dom';
import '../../style/movieList.css';

class movieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: []
        }
    }

    componentDidMount() {
        var requestUrl = API_BASE_URL + 'discover/movie?sort_by=popularity.desc&page=3&api_key=' + API_KEY
        fetch(requestUrl)
            .then((Response) => {
                return Response.json()
            })
            .then((data) => {
                this.setState({
                    movieList: data.results
                });
            })
    }

    render() {
        const movieList = this.state.movieList;

        return (
            <div className='container'>
                <h1 className='list-title'>Popular of this Week</h1>
                <div className='movie-popular'>
                    {
                        movieList.map((movie, i) => {
                            var picture = IMAGE_BASE_URL + movie.backdrop_path,
                                title = movie.title,
                                rating = movie.vote_average,
                                synopsis = movie.overview;
                                if(synopsis.length > 160){
                                    var overview = synopsis.substr(0,160) + ' ... ';
                                } else {
                                    var overview = synopsis;
                                }
                            if (i > 3 && i < 7) {
                                return (
                                    <div key={i} className='movie-wrapper'>
                                        <img className='movie-pict' src={picture}/>
                                        <div className='overlay-info-popular'>
                                            <div className='movie-info-popular'>
                                                {title}
                                                <br/>{rating} / 10
                                                <br/>{overview}    
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>

                <h1 className='list-title'>Trending Now</h1>
                <div className='movie-trending'>
                    {
                        movieList.map((movie, i) => {
                            var picture = IMAGE_BASE_URL + movie.backdrop_path,
                                title = movie.title,
                                rating = movie.vote_average,
                                synopsis = movie.overview;
                                if(synopsis.length > 160){
                                    var overview = synopsis.substr(0,160) + ' ... ';
                                } else {
                                    var overview = synopsis;
                                }
                            if (i < 4) {
                                return (
                                    <div key={i} className='movie-wrapper'>
                                        <img className='movie-pict' src={picture}/>
                                        <div className='overlay-info-trending'>
                                            <div className='movie-info-trending'>
                                                {title}
                                                <br/>{rating} / 10
                                                <br/>{overview}    
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

        );
    }
}


// class contentOverlay extends Component {
//     render() {
//         return (
    // <h4 className='movie-title'>{title}</h4>
    
//             <div className='movie-rating'>{rating} / 10</div>
//  <div className='movie-synopsis'>{overview}</div> }
//         );
//     }
// }

export default movieList;