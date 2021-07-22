import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {


    renderMangDatCuoc = () => {
        return this.props.mangDatCuoc.map((item, index) => {
            //xet gia tri boder color cho item duoc chon
            let border= {};
            if(item.datCuoc === true){
                border = {border: '3px solid orange'}
            }


            return <div className="col-4" key={index}>
                <button style={border} className="btnItem" onClick={()=>{
                    this.props.datCuoc(item.ma);
                }}>
                    <img src={item.hinhAnh} alt={item.ma + ".png"} />
                </button>
            </div>
        })
    }

    render() {
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img src={this.props.mangDatCuoc.find(item=>item.datCuoc).hinhAnh} alt={this.props.mangDatCuoc.find(item=>item.datCuoc).hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 150, height: 150 }} src="./img/oantuti/player.png" alt="player" />
                <div className="row">
                    {this.renderMangDatCuoc()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangDatCuoc : state.OanTuTiReducer.mangDatCuoc,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        datCuoc: (maDatCuoc) =>{
            const action = {
                type: 'CHON_KBB',
                maDatCuoc
            };
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Player);