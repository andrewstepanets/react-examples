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
                <Notification />
                {/* <ClassCounter value={value} /> */}
                {/* <HookCounter value={value} /> */}
            </div>
        );
    } else {
        return <button onClick={() => setVisible(true)}>Show</button>
    }  
};

const Notification = () => {
    const [ visible, setVisible ] = useState(true);
    useEffect(() => {
       const timeout =  setInterval(
           () => setVisible(false), 3500);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <div>
            { visible && <p>Hello</p> }
        </div>
    );
};

const HookCounter = ({ value }) => {
    useEffect(() => {
        console.log('mount: component are mounted');
        return () => console.log('unmount: example willUnmount');
    }, []);
    useEffect(() => console.log('update: example didUpdate'));
    
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