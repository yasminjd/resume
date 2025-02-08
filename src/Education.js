import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
        <section className="education">
          <div className="section-title">
            <h3>{this.props.education.title}</h3>
          </div>
          <div className="section-content">
            <div className="degree">
              <h4>{this.props.education.bsInstitution}</h4>
              <p>{this.props.education.bsDegree}</p>
              <p>{this.props.education.bsDates}</p>
              <p>GPA: {this.props.ducation.bsGpa}</p>
            </div>
            <div className="degree">
              <h4>{this.props.education.msInstitution}</h4>
              <p>{this.props.education.msDegree}</p>
              <p>{this.props.education.msDates}</p>
              <p>GPA: {this.props.education.msGpa}</p>
            </div>
          </div>
        </section>
      );
  }
}

export default Education;