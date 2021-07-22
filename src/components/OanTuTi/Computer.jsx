import React, { Component } from 'react';
import { connect } from 'react-redux';

class Computer extends Component {
    render() {

        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0px;}
          }`;


        return (
            <div className="text-center playerGame">
                <style>
                    {keyframe}
                </style>
                <div className="theThink" style={{position: 'relative'}}>
                    <img width={100} height={100} 
                    style={{
                        position: 'absolute', 
                        left: '20%', 
                        animation: `randomItem${Date.now()} .5s`,
                        transform: 'rotate(180deg)'
                    }} 
                    src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 150, height: 150 }} src="./img/oantuti/playerComputer.png" alt="player" />
                
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        computer: state.OanTuTiReducer.computer,
    }
}

export default connect(mapStateToProps, null)(Computer);