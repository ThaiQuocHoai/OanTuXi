import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
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
                        <tr className="text-white" style={{fontSize: '25px'}}>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
