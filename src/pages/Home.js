import React, { useEffect, useRef } from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import Image from "../components/image";
import "../styles/pages/Home.scss";
import JapanMap from "../images/japan.svg";

const HomePage = () => {
  // const magicEl = useRef(null);

  // useEffect(() => {
  //   const magicWHalf = magicEl.current.offsetWidth / 2;
  //   document.addEventListener("mousemove", function(e) {
  //     magicEl.current.style.left = e.pageX - magicWHalf + "px";
  //     magicEl.current.style.top = e.pageY - magicWHalf + "px";
  //   });
  // }, []);
  return (
    <div className="Scene">
      {/* <div className="Magic" ref={magicEl}></div> */}

      <div className="Travel">
        <JapanMap />
        <Link to="/map/">
          <h2>Travel</h2>
        </Link>
      </div>

      {/* <div>
        <Image filename="calligraphy.jpg" />
        <Link to="/resume/">
          <h2>CV</h2>
        </Link>
      </div>

      <div>
        <Image filename="random.jpg" />
        <Link to="/random/">
          <h2>Random</h2>
        </Link>
      </div> */}
    </div>
  );
};

export default HomePage;

export const query = graphql`
  query {
    file(relativePath: { eq: "travel.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
