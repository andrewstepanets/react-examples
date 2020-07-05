import React, { useState, useEffect, useCallback, useMemo, Component } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [value, setValue] = useState(1);
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
                <PlanetInfo id={value} />
                {/* <Notification /> */}
                {/* <ClassCounter value={value} /> */}
                {/* <HookCounter value={value} /> */}
            </div>
        );
    } else {
        return <button onClick={() => setVisible(true)}>Show</button>
    }  
};

// creating analog getPlanet use personal hook

const getPlanet = (id) => {
    return fetch(`https://swapi.dev/api/planets/${id}`)
        .then(res => res.json())
        .then(data => data);
};

const useRequest = (request) => {
    const initialState = useMemo(() => ({
                                            data: null,
                                            loading: true,
                                            error: null
                                        }), []);
    const [dataState, setDataState] = useState(initialState);
    useEffect(() => {
        setDataState(initialState);
        let cancelled = false; // используем эту переменную пока еще обрабатывается
        // запрос к серверу, чтобы одновременно не слать 2 запроса
        request()
            .then(data => !cancelled && setDataState({
                data,
                loading: false,
                error: null
            }))
            .catch(error => !cancelled && setDataState({
                data: null,
                loading: false,
                error
            }))
        return () => cancelled = true;
    }, [request, initialState]);

    return dataState;
};

// creating personal hook

const usePlanetInfo = (id) => {
    const request = useCallback(() => getPlanet(id), [id]);
    return useRequest(request);
}; 

const PlanetInfo = ({ id }) => {
    
    const { data, loading, error } = usePlanetInfo(id);

    if(error) {
        return <div>Something is wrong</div>
    } 
    if(loading) {
        return <div>loading...</div>
    }

        return (
            <div>
                {id} - {data.name}
            </div>
        );
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