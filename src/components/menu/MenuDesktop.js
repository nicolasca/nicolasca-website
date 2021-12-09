import React from "react"
import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"
import styled from "styled-components"
import { colors } from "../../styles/Theme"

export const MenuDesktop = () => {
  const { locale } = useIntl()
  const supportedLocales = ["fr", "en"]

  const activeStyle = {
    color: colors.red,
    fontWeight: "bold",
    borderBottom: `3px solid ${colors.red}`,
  }

  const Header = styled.header`
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    padding: 0.5rem 1rem;

    a {
      font-size: 1.2rem;
    }

    a:hover {
      border-bottom: 3px solid ${colors.red};
    }

    a,
    a:hover,
    a:visited,
    a:active {
      text-decoration: unset;
    }
  `

  const LeftSection = styled.div`
    display: flex;
    & > div {
      padding: 0.5rem;
    }
  `

  const Languages = styled.div`
    display: flex;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      &.Active {
        background-color: ${colors.red};
        a {
          color: white;
        }
      }
    }

    a {
      padding: 0.2rem;
      border-bottom: 3px solid #fff;
    }

    & > div:first-child {
      margin-right: 1rem;
    }
  `

  return (
    <Header>
      <LeftSection>
        <div>
          <Link to="/" activeStyle={activeStyle}>
            <FormattedMessage id="Home" />
          </Link>
        </div>
        <div>
          <Link to="/resume/" activeStyle={activeStyle}>
            <FormattedMessage id="Resume" />
          </Link>
        </div>
        {/* <div>
          <Link
            getProps={({ isPartiallyCurrent }) =>
              isPartiallyCurrent ? { className: "Active" } : null
            }
            to="/travel/"
            activeStyle={activeStyle}
          >
            <FormattedMessage id="Travel" />
          </Link>
        </div> */}
        <div>
          <Link to="/map/" activeStyle={activeStyle}>
            <FormattedMessage id="Map" />
          </Link>
        </div>
        <div>
          <Link to="/random/" activeStyle={activeStyle}>
            <FormattedMessage id="Random" />
          </Link>
        </div>
      </LeftSection>
      <Languages>
        {supportedLocales.map(lng => (
          <div key={lng} className={lng === locale ? "Active" : ""}>
            <Link
              style={{ textTransform: "upperCase" }}
              changelocale={lng}
              language={lng}
            >
              {lng}
            </Link>
          </div>
        ))}
      </Languages>
    </Header>
  )
}
