import React, { Component } from 'react'
import { PureComponent } from 'react';

export default class Profile extends PureComponent {
    render() {



        return (
            <div className="card text-white bg-dark d-flex align-items-center" style={{ width: '240px' }}>
                <img style={{ width: '200px', height: '200px' }} className="card-img-top mt-3" src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/123520999_973919576449119_4947923607061236275_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=WazQUF-9Cc8AX9LCzrK&_nc_ht=scontent-sin6-2.xx&oh=dc66d4f66171cd5f912a6f1ad8d12552&oe=60FA285A" alt />
                <div className="card-body">
                    <h3 style={{ color: 'pink' , fontSize:'15px'}}>Số Lượt Like: ({this.props.like})</h3>
                    <h4 style={{ fontSize:'15px'}} className="card-title">Họ tên: Nguyễn Ngọc Cẩm</h4>
                    <p style={{fontSize:'15px'}} className="card-text">Tuổi: 20</p>
                </div>
            </div>

        )
    }
}
