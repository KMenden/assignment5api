import React, { Component } from 'react';

//support routing by creating a new component

class Movie extends Component {
    constructor(props) {
        super(props);
        if(this.props.onTitleChange)
            this.props.onTitleChange(null);
    }
    render() {
        return (<div>MOVIE DETAIL</div>);
    }
}

export default Movie;