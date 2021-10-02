import React, {Component} from 'react';


export class Display extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            counter: 0
        }

    }
    incrementCounter = () => {
        this.setState((prevState) => {
            prevState = prevState + 1
        })
    }
    render() { 
        return (
            <>
            <div>
                <h2>
                    <div></div>
                    <div></div>
                </h2>
            </div>
            </>
        );
    }
}
 
