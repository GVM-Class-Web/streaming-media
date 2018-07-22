import React, { Component } from 'react';
import ImgBuffalo from '../../img/buffalo-boys-small.png';
import LogoBuffalo from '../../img/buffalo-boys-logo.png';
import '../../style/general.css';
import '../../style/component.css';

class Headline extends Component {
    render() {
        return (
            <div id="superHero" className="superHero" style={{ backgroundImage: `url(${ImgBuffalo})`}}>
                <div className="content">
                    <img className="logo" src={LogoBuffalo} alt="narcos background" />
                    <h2>Buffalo Boys - 2018</h2>
                    <p>Two brothers named Jamar and Suwo came back to the land of Java to avenge their father, who was a Sultan, after years of exile in America.</p>
                    <div className="button-wrapper">
                        <HeadlineButton primary={true} text="Watch now" />
                        <HeadlineButton primary={false} text="+ My list" />
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        );
    }
}

class HeadlineButton extends Component {
    render() {
        return (
            <a href="#" className="button" data-primary={this.props.primary}>{this.props.text}</a>
        );
    }
}

export default Headline;