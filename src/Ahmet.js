import React, {Component} from 'react';

class Ahmet extends Component {
    render() {
        const { firstDivStyle } = styles;
        return (
            <div style={firstDivStyle}>
                <h1>Zihni Selam</h1>
                <h2>{new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}

const styles= {
    firstDivStyle: {
        backgroundColor: 'green',
        width: '400px',
        height: '200px',
        color: 'white'
    }
};


export default Ahmet;