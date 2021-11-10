import React from "react";
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image";
import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";

const Block = styled.div`
  display: block;
  margin: auto;
  max-width: 700px;
  flex-direction: column;
  background-color: #fff;
  margin-top: 1rem;
`;

const LocationWrapper = styled.div`
    display: flex;
    
    & > * {
        flex-basis: 50%;
        flex-shrink: 0;
    }
`;

const TravelPage = () => {
    const intl = useIntl();
    return(
        <Layout>
            <Seo title={intl.formatMessage({ id: "Travel" })} />
                <Block>
                    <LocationWrapper>
                        <StaticImage src="../images/travel/japan.jpeg" />
                        <Link to="/travel/japan/" >
                            <FormattedMessage id={"Japan"} />
                        </Link>
                    </LocationWrapper>
                </Block>
        </Layout>
    );
};

export default TravelPage;