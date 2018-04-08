import React, { Component } from 'react';
import PropTypes from "prop-types";

//require a callback function to be sent to MovieList to update the header subtitle

class MovieList extends Component {
    state = {selectedOption: 'Guardians of the Galaxy Vol. 2'};
    constructor(props) {
        super(props);
        if(this.props.onTitleChange)
            this.props.onTitleChange("Gaurdians of the Galaxy Vol. 2");
    }
    handleOnChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
        if(this.props.onTitleChange)
            this.props.onTitleChange(e.target.value);
    }

    render() {
        return (
            <div>
                <div className="row movietitle">
                    <input type="radio" value="Guardians of the Galaxy Vol. 2" checked={this.state.selectedOption === 'Guardians of the Galaxy Vol. 2'} onChange={ (e) => this.handleOnChange(e) } />
                    Guardians of the Galaxy Vol. 2
                </div>
                <div className="row movietitle">
                    <input type="radio" value="La La Land" checked={this.state.selectedOption === 'La La Land'} onChange={ (e) => this.handleOnChange(e) } />
                    La La Land
                </div>
            </div>
        );
    }
}

MovieList.propTypes = {
    onTitleChange: PropTypes.func.isRequired
};
export default MovieList;