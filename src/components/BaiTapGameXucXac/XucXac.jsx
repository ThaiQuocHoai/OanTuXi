import React, { Component } from 'react'
import {connect} from 'react-redux'

class XucXac extends Component {

    renderXucXac =() =>{
        let {mangXucXac} = this.props;
        return mangXucXac.map((item, index)=>{
            return <img className="ml-2" style={{width: 50, height: 50}} src={item.hinhAnh} alt={item.ma} key={index} />
        })
    }



    render() {
        return (
            <div>
                {/* <img className="ml-2" style={{width: 50, height: 50}} src="./img/1.png" alt="..."/>
                <img className="ml-2" style={{width: 50, height: 50}} src="./img/2.png" alt="..."/>
                <img className="ml-2" style={{width: 50, height: 50}} src="./img/3.png" alt="..."/> */}
                {this.renderXucXac()}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        mangXucXac: state.XiNgauReducer.mangXucXac,
    }
}

export default connect(mapStateToProps, null)(XucXac);
