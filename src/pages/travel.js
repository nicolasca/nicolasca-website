import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"
import Seo from "../components/seo"

const Block = styled.div`
  display: block;
  margin: auto;
  flex-direction: column;
  margin-top: 1rem;
`

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  & > * {
    flex-basis: 50%;
    flex-shrink: 0;
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 3rem;
`

const TravelPage = () => {
  const intl = useIntl()

  return (
    <>
      <Seo title={intl.formatMessage({ id: "Travel" })} />
      <Block>
        <LocationWrapper>
          <StaticImage
            src="../images/travel/hogwarts.jpeg"
            alt="Le monde magique de Harry Potter"
          />
          <Title>
            <Link to="/travel/harry-potter/">
              <FormattedMessage id={"Harry Potter"} />
            </Link>
          </Title>
        </LocationWrapper>
        <LocationWrapper>
          <StaticImage
            src="../images/travel/japan.jpeg"
            alt="Restaurant in Tokyo"
          />
          <Title>
            <Link to="/travel/japan/">
              <FormattedMessage id={"Japan"} />
            </Link>
          </Title>
        </LocationWrapper>
      </Block>
    </>
  )
}

export default TravelPage
