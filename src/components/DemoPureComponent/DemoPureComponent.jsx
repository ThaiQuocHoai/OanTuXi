import React, { Component } from 'react'
import Profile from './Profile'

export default class DemoPureComponent extends Component {


    state = {
        like: 0
    }


    render() {
        return (
            <div className='container d-flex flex-column align-items-center text-center'>
                <h3 className='text-center'>Profile Nguyễn Ngọc Cẩm</h3>
                <Profile like={this.state.like} />
                <br/>
                <div className="card text-white bg-default w-50">
                    <h3 style={{color:'pink'}}>Số Lượt Like: ({this.state.like})</h3>
                    <div className="card-body">
                        <button className='btn' onClick={()=>{
                            this.setState({
                                like: this.state.like += 1,
                            })
                        }}>Like: <i className="fa fa-thumbs-up"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}
