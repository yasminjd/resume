import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
        <section className="key-skills">
          <div className="section-title">
            <h3>{this.props.keySkills.title}</h3>
          </div>
          <div className="section-content">
            <ul>
              {this.props.keySkills.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>
      );
  }
}

export default Skills;