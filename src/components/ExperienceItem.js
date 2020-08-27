import React from "react";
import PropTypes from "prop-types";

const ExperienceItem = ({
  title,
  link,
  linkTitle,
  time,
  description,
  technologies,
}) => {
  return (
    <div style={{margin: '3rem 0'}}>
      <h3>
        {title}
        {link ? (
          <>
            <span>&nbsp;-&nbsp;</span>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {linkTitle}
            </a>
          </>
        ) : null}
      </h3>
      <h4> {time} </h4>
      <p>{description}</p>
      <p>{technologies}</p>
    </div>
  );
};

ExperienceItem.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  linkTitle: PropTypes.string,
  time: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.string,
};

export default ExperienceItem;
