import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThongTinDatGhe extends Component {

    renderThongTin = () => {
        return this.props.danhSachGheDangDat.map((ghe, index) => {
            return <tr className="text-white" key={index}>
                <th>{ghe.soGhe}</th>
                <th>{ghe.gia.toLocaleString()}</th>
                <th><button onClick={()=>{
                    this.props.huyGhe(ghe.soGhe)
                }}>huỷ</button></th>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <div className="mt-5 d-flex flex-column ">
                    <div className="d-flex align-items-center mt-3">
                        <button className="gheDuocChon"></button>
                        <span className="pl-4 text-light" style={{ fontSize: '25px' }}>ghế đã đặt</span>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                        <button className="gheDangChon"></button>
                        <span className="pl-4 text-light" style={{ fontSize: '25px' }}>ghế đang đặt</span>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                        <button className="ghe" style={{ margin: '0' }}></button>
                        <span className="pl-4 text-light" style={{ fontSize: '25px' }}>ghế chưa đặt</span>
                    </div>
                </div>
                <table className="table mt-5" border="2">
                    <thead>
                        <tr className="text-white" style={{ fontSize: '25px' }}>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.renderThongTin()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3" className="text-right text-success">
                                Tổng tiền: {this.props.tongTien.toLocaleString()}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
    tongTien: state.BaiTapDatVeReducer.tongTien
});

const mapDispatchToProps = dispatch => ({
    huyGhe: (soGhe)=>{
        dispatch({
            type: 'HUY_GHE',
            soGhe
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);