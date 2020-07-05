import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if(visible) {
        return (
            <div>
                <button
                    onClick={() => setValue((v) => v + 1)}>
                        +
                </button>
                <button
                    onClick={() => setVisible(false)}>
                        hide
                </button>
                <ClassCounter value={value} />
                <HookCounter value={value} />
            </div>
        );
    } else {
        return <button onClick={() => setVisible(true)}>Show</button>
    }  
};

const HookCounter = ({ value }) => {
    useEffect(() => {
        console.log('I use useEffect hook');
        return () => console.log('clear useEffect');
    }, [value]);
        return <p>{value}</p>
};
class ClassCounter extends Component {
    componentDidMount(){
        console.log('Class mount');   
    }
    componentDidUpdate(props){
        console.log('Class update');
    }
    componentWillUnmount(){
        console.log('Class unmount');
    }

    render() {
        return <p>{this.props.value}</p>
    }
};

ReactDOM.render(<App />, document.getElementById('root'));