import React from 'react';

function Skills({ keySkills }) {
  return (
    <section class="key-skills">
    <div class="section-title">
        <h3>{keySkills.title}</h3>
    </div>
    <div class="section-content">
        <ul>
            <li>{keySkills.content1}</li>
            <li>{keySkills.content1}</li>
            <li>{keySkills.content1}</li>
            <li>{keySkills.content1}</li>
            <li>{keySkills.content1}</li>
            <li>{keySkills.content1}</li>
            <li>{keySkills.content1}</li>
            <li>{keySkills.content1}</li>
            <li>{keySkills.content1}</li>
            
        </ul>
    </div>
</section>
  );
}

export default Skills;