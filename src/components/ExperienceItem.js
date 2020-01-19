import React from "react"

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
            <a href={link} target="_blank">
              {linkTitle}
            </a>
          </>
        ) : null}
      </h4>
      <p>{time}</p>
      <p>{description}</p>
      <p>{technologies}</p>
    </div>
  )
}

export default ExperienceItem
