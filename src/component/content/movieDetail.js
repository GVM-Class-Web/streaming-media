import React, { Component } from 'react';
import { API_BASE_URL, API_KEY } from '../defenition/app';
class movieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        var requestUrl = API_BASE_URL + 'movie/' + this.props.match.params.id + '?api_key=' + API_KEY
        fetch(requestUrl).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ movie: data });
        }).catch((err) => {
            console.log("There has been an error" + err);
        });

    }
    render() {
        const movie = this.state.movie
        return (
            <div>
                {movie.overview}
            </div>
        );
    }
}

export default movieDetail;