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
    <div>
      <h4>
        {title}
        {link ? (
          <>
            <span>&nbsp;-&nbsp;</span>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {linkTitle}
            </a>
          </>
        ) : null}
      </h4>
      <p>{time}</p>
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
