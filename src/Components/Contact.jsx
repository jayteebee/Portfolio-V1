import React from "react";
import githubIcon from "./icons8-github.svg"
import linkedInIcon from "./icons8-linkedin.svg"

const Contact = () => {
  return (
    <div className="PContainer2">
    <h2>A Bit More About Me</h2>
<div className="CT">
    <p>I invite you to learn more about me by visiting my LinkedIn and GitHub profiles.</p>
    <p>You may also contact me directly via:</p>
    <p>jethroblock22@gmail.com</p>
</div>
<div className="SocialLinks">
      <a href="https://github.com/jayteebee" rel="noreferrer"  target="_blank">
      <img src={githubIcon} alt="GitHub"/>
      </a>
      <a href="https://www.linkedin.com/in/jethroblock/" rel="noreferrer"  target="_blank">
      <img src={linkedInIcon} alt="LinkedIn"/>
      </a>
   </div>
</div>
  );
};

export default Contact;
