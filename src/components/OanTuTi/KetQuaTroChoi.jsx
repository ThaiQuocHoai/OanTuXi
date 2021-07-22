import React, { Component } from 'react';
import { connect } from 'react-redux';

class KetQuaTroChoi extends Component {
    render() {

        let {ketQua,  soBanThang, soBanChoi} = this.props;

        return (
            <div>
                <div className="display-4 text-uppercase text-warning">
                    {this.props.ketQua}
                </div>
                <div className="display-4 text-uppercase text-white">
                    số bàn thắng: <span className="text-success">{soBanThang}</span>
                </div>
                <div className="display-4 text-uppercase text-white">
                    tổng số bàn: <span className="text-primary">{soBanChoi}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        ketQua: state.OanTuTiReducer.ketQua,
        soBanThang: state.OanTuTiReducer.soBanThang,
        soBanChoi: state.OanTuTiReducer.soBanChoi
    }
}


export default connect(mapStateToProps, null)(KetQuaTroChoi);
