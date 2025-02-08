import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header-content">
        <div className="name-title">
          <div>
            <p class="bold">{this.props.personInfo.name}</p>
            <p>{this.props.personInfo.occupation}</p>
          </div>
        </div>
        <div className="contact-info">
          <div>
            <p>Email:{this.props.contactInfo.email}</p>
            <p>Web: {this.props.contactInfo.web}</p>
            <p>Mobile: {this.props.contactInfo.mobile}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;