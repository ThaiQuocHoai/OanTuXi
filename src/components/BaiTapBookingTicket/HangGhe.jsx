import React, { Component } from 'react'
import {connect} from 'react-redux';

class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((item, index) => {

            let cssGheDaDat = '';
            let disable = false;

            //trạng thái ghế đã bị người khác đặt


            if (item.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disable = true;
            }
            let cssGheDangDat = '';
            //xét trạng thái ghế đang đặt
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(x => x.soGhe === item.soGhe);
            if(indexGheDangDat !== -1){
                cssGheDangDat = 'gheDangChon';
            }


            return <button disabled={disable} className={`ghe ${cssGheDaDat} ${cssGheDangDat}` } key={index} onClick={()=>{
                this.props.datGhe(item);
            }}>
                {item.soGhe}
            </button>
        })
    }

    renderSoHang = () =>{
        return this.props.hangGhe.danhSachGhe.map((hang, index) =>{
            return <button className="rowNumber" key={index}> 
                {hang.soGhe}
            </button>
        })
    }

    renderHangGhe = () => {

        if (this.props.soHangGhe === 0) {
            return <div className="ml-4">
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        } else {
            return <div>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }
    }


    render() {
        return (
            <div className="text-light mt-2" style={{ fontSize: '25px' }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        datGhe: (ghe) =>{
            dispatch({
                type:'DAT_GHE',
                ghe,
            })
        }
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(HangGhe);