import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (
      <section className="personal-profile">
        <div className="section-title">
          <h3>{this.props.profile.title}</h3>
        </div>
        <div className="section-content">
          <p>{this.props.profile.content}</p>
        </div>
      </section>
    );
  }
}

export default PersonalProfile;
