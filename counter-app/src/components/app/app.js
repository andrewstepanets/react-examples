import React, { useState } from 'react';
import Header from '../header';
import Button from '../button';

const App = () => {
    return(
        <div>
            <Counter />
        </div>
    );
};

const Counter = () => {

        // let count = 0;
        const [ count, setCount ] = useState(0);
        const incrementCount = value => {
            setCount(count + value)
        }
        const decrementCount = value => {
            setCount(count - value)
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-md-2">
                    </div>
                    <div className="col-md-10 text-center">
                        <Header />
                        <Button 
                            value={1}
                            symbol={"+"}
                            styleName={"btn btn-warning"} 
                            onClickFunction={incrementCount}/>
                        <Button
                            value={10}
                            symbol={"+"}
                            styleName={"btn btn-info"}
                            onClickFunction={incrementCount}
                            />
                        <Button
                            value={100}
                            symbol={"+"}
                            styleName={"btn btn-success"}
                            onClickFunction={incrementCount}
                            />
                        <Button 
                            value={1000}
                            symbol={"+"}
                            styleName={"btn btn-danger"}
                            onClickFunction={incrementCount}
                            />
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-2"></div>
                    <div className="col-md-10 text-center">
                        <Button
                            value={1}
                            symbol={"-"}
                            styleName={"btn btn-warning"}
                            onClickFunction={decrementCount} />
                        <Button
                            value={10}
                            symbol={"-"}
                            styleName={"btn btn-info"}
                            onClickFunction={decrementCount}
                        />
                        <Button
                            value={100}
                            symbol={"-"}
                            styleName={"btn btn-success"}
                            onClickFunction={decrementCount}
                        />
                        <Button
                            value={1000}
                            symbol={"-"}
                            styleName={"btn btn-danger"}
                            onClickFunction={decrementCount}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-2">
                    </div>
                    <div className="col-md-10 text-center">
                        <h2>{count}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-2">
                    </div>
                    <div className="col-md-10 text-center">
                        <button className="btn btn-dark" onClick={() => setCount(0)}>Reset</button>
                    </div>
                </div>
            </div>
        );
};

export default App;
