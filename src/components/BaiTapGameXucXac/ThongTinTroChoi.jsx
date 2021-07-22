import React, { Component } from 'react'
import {connect} from 'react-redux'

class ThongTinTroChoi extends Component {
    render() {
        return (
            <div>
                <div className="display-3 text-uppercase">
                    Bạn chọn: <span className="text-danger">{this.props.taiXiu ? 'tài' : 'xĩu'}</span>
                </div>
                <div className="display-4 text-uppercase">
                    bàn thắng: <span className="text-success">{this.props.soBanThang}</span>
                </div>
                <div className="display-4 text-uppercase">
                    Tổng số bàn chơi: <span className="text-primary">{this.props.tongSoBanChoi}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        soBanThang: state.XiNgauReducer.soBanThang,
        tongSoBanChoi: state.XiNgauReducer.tongSoBanChoi,
        taiXiu: state.XiNgauReducer.taiXiu
    }
}

export default connect(mapStateToProps, null)(ThongTinTroChoi);
