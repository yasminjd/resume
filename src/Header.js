import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-content">
          <div className="name-title">
            <h1>{this.props.personInfo.name}</h1>
            <h2>{this.props.personInfo.occupation}</h2>
          </div>
          <div className="contact-info">
            <p className="link">Email: {this.props.contactInfo.email}</p> {/* Fixed className */}
            <p>Web: {this.props.contactInfo.web}</p>
            <p>Mobile: {this.props.contactInfo.mobile}</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

