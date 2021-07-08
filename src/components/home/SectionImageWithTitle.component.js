import React from "react";
import { Link, FormattedMessage } from "gatsby-plugin-react-intl";
import PropTypes from "prop-types";
import styled from "styled-components";

const Block = styled.div``;

function SectionImageWithTitle({ to, titleId, children }) {
  return (
    <Block>
      <Link to={to}>
        {children}
        <h2>
          <FormattedMessage id={titleId} />
        </h2>
      </Link>
    </Block>
  );
}

SectionImageWithTitle.propTypes = {
  to: PropTypes.String,
  children: PropTypes.node,
  titleId: PropTypes.String,
};

export default SectionImageWithTitle;
