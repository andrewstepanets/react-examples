import React, { Component } from 'react';
import Header from '../header';
import Button from '../button';

export default class App extends Component {
    render(){
        let count = 0;
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-md-2">
                    </div>
                    <div className="col-md-10 text-center">
                        <Header />
                        <Button increment={1} styleName={"btn btn-warning"}/>
                        <Button increment={10} styleName={"btn btn-info"}/>
                        <Button increment={100} styleName={"btn btn-success"}/>
                        <Button increment={1000} styleName={"btn btn-danger"}/>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-2">
                    </div>
                    <div className="col-md-10 text-center">
                        <h2>{count}</h2>
                    </div>
                </div>
            </div>
        );
    }
}
