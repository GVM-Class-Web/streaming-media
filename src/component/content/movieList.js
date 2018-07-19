import React, { Component } from 'react';
import { API_KEY, API_BASE_URL } from '../defenition/app'
import { Link } from 'react-router-dom'


class movieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: []
        }
    }

    componentDidMount() {
        var requestUrl = API_BASE_URL + 'discover/movie?sort_by=popularity.desc&page=1&api_key=' + API_KEY
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
            <div>
                kalo movienya ini
                {
                    movieList.map(movie => {
                        return (
                            <div key={movie.id}>
                                {movie.title}
                                <Link to={`/movie/${movie.id}`} >
                                    {movie.title}
                                </Link>
                            </div>
                        )

                    })
                }
            </div>
        );
    }
}

export default movieList;