import React, { Component } from 'react'
import ThongTinTroChoi from './ThongTinTroChoi'
import './XiNgau.css'
import XucXac from './XucXac'
import { connect } from 'react-redux'

class XiNgauComponent extends Component {


    render() {
        return (
            <div className="game" style={{backgroundImage: "url('./img/bgGame.png')"}}>
                <div className="title-game text-center mt-5 display-4">Bài Tập Game Xúc Xắc</div>
                <div className="row text-center mt-5">
                    <div className="col-5 mt-2">
                        <button className="btnGame" onClick={()=>{
                            this.props.taiXiu(true);
                        }}>TÀI</button>
                    </div>
                    <div className="col-2">
                        <XucXac />
                    </div>
                    <div className="col-5 mt-2">
                        <button className="btnGame" onClick={()=>{
                            this.props.taiXiu(false);
                        }}>XĨU</button>
                    </div>
                </div>
                <div className="thongTinTroChoi text-center">
                    <ThongTinTroChoi />
                    <button className="btn btn-success mt-5" onClick={() =>{
                        this.props.playGame();
                    }}>Play Game</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        taiXiu: (value) =>{
            const action = {
                type: 'CHON',
                value,
            };
            dispatch(action);
        }, 
        playGame: () =>{
            const action = {
                type: 'PLAY',
            };
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(XiNgauComponent)