import React, { Component } from 'react';
import './BaiTapBookingTicket.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGheData from './../../Data/danhSachGhe.json';
import { Fragment } from 'react';
import HangGhe from './HangGhe';

export default class BaiTapBookingTicket extends Component {


    renderHangGhe =() =>{
        return danhSachGheData.map((item, index) => {
            return <div style={{width: '100%', marginLeft:'170px'}} key={index}>
                <HangGhe hangGhe={item} soHangGhe={index} />
            </div>
        })
    }


    render() {
        return (
            <div style={{
                position: 'fixed', width: '100%', height: '100%',
                backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
                backgroundSize: 'cover'
            }} className="bookingMovie">
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8">
                                <div style={{fontSize: '30px'}} className="text-warning text-center text-uppercase">
                                    Bài tập đặt vé
                                </div>
                                <div className="text-light text-center" style={{ fontSize: '25px' }}>Màn hình</div>

                                <div style={{width: '100%'}} className="d-flex flex-column align-items-center">
                                    <div className="screen"></div>
                                {this.renderHangGhe()}

                                </div>
                            </div>
                            <div className="col-4">
                                <div style={{ fontSize: '35px' }} className="text-light text-uppercase mt-2">
                                    Danh sách ghế bạn chọn
                                </div>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
