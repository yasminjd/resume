import React, { Component } from "react";

class WorkExperience extends Component {
  render() {
    return (
        <section className="work-experience">
          <div className="section-title">
            <h3>{this.props.workExperience.title}</h3>
          </div>
          <div className="section-content">
            <div className="job">
              <h4>{this.props.workExperience.job1}</h4>
              <p>{this.props.workExperience.job1Content}</p>
            </div>
            <div className="job">
              <h4>{this.props.workExperience.job2}</h4>
              <p>{this.props.workExperience.job2Content}</p>
            </div>
          </div>
        </section>
      );
  }
}

export default WorkExperience;