import React, {Component} from 'react';


export class Display extends Component {

    constructor(props){
        super(props);
        this.state= {
            counter: 0
        }

    }
    incrementCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }))
    }
    render() { 
        return (
            <>
            <div>
                {/* <div> 
                <h2>{this.state.counter}</h2>
                <h2>{this.props.value}</h2>
                </div> */}
                <div className="bg-primary text-white text-center p-2">
                    <h2>Wartość właściwości props: {this.props.value}</h2>
                    <h2>Wartość komponentu lokalnego: {this.state.counter}</h2>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary m-2" onClick={this.props.callback}>
                        Funkcja z komponentu nadrzędnego
                    </button>
                    <button className="btn btn-primary m-2" onClick={this.incrementCounter}>
                        Zmiana z komponentu lokalnego

                    </button>
                </div>
            </div>
            </>
        );
    }
}
 
