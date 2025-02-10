import React, { Component } from "react";

class Education extends Component {
  render() {
    const { education } = this.props; // Destructure props for easier access
    return (
      <section className="education">
        <div className="section-title">
          <h3>{education.title}</h3>
        </div>
        <div className="section-content">
          <div className="degree">
            <h4>{education.bsInstitution}</h4>
            <p>{education.bsDegree}</p>
            <p>{education.bsDates}</p>
            <p>GPA: {education.bsGpa}</p>
          </div>
          <div className="degree">
            <h4>{education.msInstitution}</h4>
            <p>{education.msDegree}</p>
            <p>{education.msDates}</p>
            <p>GPA: {education.msGpa}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
