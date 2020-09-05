import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Collapsible extends Component {


    state = {
        isExpanded: false
    }

    handleToggle(e) {
        e.preventDefault();
        // console.log(this.refs.inner.clientHeight);
        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight
        });
    }

    render(){

        const {title, children} = this.props;
        const {isExpanded, height} = this.state;
        const currentHeight = isExpanded ? height : 0;

        return(
            <div 
                className={`card ${isExpanded ? 'is-expanded' : ''}`} 
                onClick={(e) => this.handleToggle(e)}>
                <div className="card-header">
                    <h2>{title}</h2>
                </div>
                <div className="card-collapse" style={{height: currentHeight+'px'}}>
                    <div className="card-body" ref="inner">
                        {children}
                    </div>
                </div>
            </div> 
        )
    }
}


export default Collapsible