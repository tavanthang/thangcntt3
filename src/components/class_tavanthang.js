import React, { Component } from 'react'

 class class_tavanthang extends Component {
    constructor(props){
        super(props);
        this.stale={
            fullname:"ta van thang",
            class:"k22cntt3"
        }
    }
    users = {
        name:"ta van thang",
        age:20
    }
    // hàm sử lý sk
    handlechange=(event)=>{
        this.setState0({
            fullname:"van la thang"
        })
    }
    render() {
    return (
      <div>
        <h2>class component demo</h2>
        {this.users.name}-{this.users.age}
        <hr/>
        <h3>info:{this.props.info}</h3>
        <h3>time;{this.props.time}</h3>
        <hr/>
        <h3>state:
            fullname:{this.stale.fullname}-
            class:{this.stale.class}
        </h3>
        <button onClick={this.handlechange}>changename</button>
      </div>
    )
  }
}
