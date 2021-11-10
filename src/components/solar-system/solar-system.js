import React from "react";
import PropTypes from "prop-types";
import "./solar-system.scss";
import Rocket from "../../images/rocket.svg";

const SolarSystem = () => {
  const distanceMercure = 58;
  const distanceVenus = 108;
  const distanceEarth = 150;
  const distanceMars = 228;
  // const distanceSaturne = 1427
  // const distanceUranus = 2869

  // const distanceNeptune = 4497

  const systemSolarPixel = 600;
  const systemSolarDistance = distanceMars;
  const mercurePixel =
    (systemSolarPixel * distanceMercure) / systemSolarDistance;
  const venusPixel = (systemSolarPixel * distanceVenus) / systemSolarDistance;
  const earthPixel = (systemSolarPixel * distanceEarth) / systemSolarDistance;
  const marsPixel = (systemSolarPixel * distanceMars) / systemSolarDistance;

  // const getStars = () => {
  //   let starsContent = []
  //   for (let i = 0; i < 50; i++) {
  //     const scale = Math.random() / 5
  //     const rotate = Math.random() * 360
  //     const translateX = Math.random() * 100
  //     const translateY = Math.random() * 100

  //     starsContent.push(
  //       <div
  //         key={i}
  //         className="star-five"
  //         style={{
  //           ransform: `scale(${scale}) rotate(${rotate}deg) translate(${translateX}%, ${translateY}%)`,
  //           right: "10%",
  //         }}
  //       ></div>
  //     )
  //   }
  //   return starsContent
  // }

  return (
    <div className="Home">
      {/* {getStars()} */}
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
  );
};

export default SolarSystem;

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
      <circle cx="50%" cy="50%" r="49" strokeWidth="1px" />
    </svg>
  );
};

SVGEllipsis.propTypes = {
  distancePixel: PropTypes.number,
};
