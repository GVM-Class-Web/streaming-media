import React, { Component } from 'react';
import { API_KEY, API_BASE_URL } from '../defenition/app'


class movieGenre extends Component {
    constructor(props) {
        super(props)
        this.state = {
            genres: []
        }
    }

    componentDidMount() {
        var requestUrl = API_BASE_URL + 'genre/movie/list?api_key=' + API_KEY;
        fetch(requestUrl).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ genres: data.genres });
            //console.log(this.state.genres)
        }).catch((err) => {
            console.log("There has been an error" + err);
        });
    }


    render() {
        return (
            <div>
                here the gendre
                {
                    this.state.genres.map(genre => {
                        return <p key={genre.id}>{genre.name}</p>
                    })
                }
            </div>
        );

    }
}

export default movieGenre;