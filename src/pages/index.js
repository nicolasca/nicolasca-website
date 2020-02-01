import React from "react"
import "./index.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./Home.scss"
import Rocket from "../images/rocket.svg"

const IndexPage = () => {
  const distanceMercure = 58
  const distanceVenus = 108
  const distanceEarth = 150
  const distanceMars = 228
  const distanceJupiter = 778
  // const distanceSaturne = 1427
  // const distanceUranus = 2869

  // const distanceNeptune = 4497

  const systemSolarPixel = 600
  const systemSolarDistance = distanceMars
  const mercurePixel =
    (systemSolarPixel * distanceMercure) / systemSolarDistance
  const venusPixel = (systemSolarPixel * distanceVenus) / systemSolarDistance
  const earthPixel = (systemSolarPixel * distanceEarth) / systemSolarDistance
  const marsPixel = (systemSolarPixel * distanceMars) / systemSolarDistance
  const jupiterPixel =
    (systemSolarPixel * distanceJupiter) / systemSolarDistance

  console.log("mercure", mercurePixel)
  console.log("mars", marsPixel)
  console.log("venus", venusPixel)

  return (
    <Layout>
      <SEO title="Accueil" />
      <div className="Home">
        <div>
          <h1>Système solaire </h1>
        </div>
        <div
          className="SolarSystem"
          style={{
            width: systemSolarPixel + "px",
            height: systemSolarPixel + "px",
          }}
        >
          <div className="Sun Planet"></div>
          <div className="Mercure Planet"></div>
          <div className="Venus Planet"></div>
          <div className="Earth Planet"></div>
          <div className="Mars Planet"></div>
          <SVGEllipsis distancePixel={mercurePixel} />
          <SVGEllipsis distancePixel={venusPixel} />
          <SVGEllipsis distancePixel={earthPixel} />
          <SVGEllipsis distancePixel={marsPixel} />
          {/* <SVGEllipsis distancePixel={jupiterPixel} /> */}
        </div>

        <div className="Rocket">
          <Rocket />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const SVGEllipsis = ({ distancePixel }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="Ellipsis"
      style={{
        height: distancePixel + "px",
        width: distancePixel + "px",
        top: `calc(50% - (${distancePixel}px / 2))`,
        right: `calc(50% - (${distancePixel}px / 2))`,
      }}
    >
      <circle cx="50%" cy="50%" r="49" stroke-width="1px" />
    </svg>
  )
}
