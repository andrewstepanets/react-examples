import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Collapsible extends Component {

    render(){

        const {title, children} = this.props;

        return(
            <div className="card">
                <div className="card-header">
                    <h2>{title}</h2>
                </div>
                <div className="card-body">
                    {children}
                </div>
            </div>
        )
    }
}

Collapsible.propTypes = {
    title: PropTypes.string
}

export default Collapsible