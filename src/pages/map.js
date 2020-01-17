import React from "react"
import mapboxgl from "mapbox-gl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./Map.module.scss"
import "../styles/mapbox-gl.css"
import { useState, useEffect, useRef } from "react"

const Map = () => {
  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoibmljb2xhc2NhIiwiYSI6ImNqdjNlZHY2czFzbGs0M280ZXg5bHE3ZnQifQ.qvyAeDcAJiswn2VLP320Tw"
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        center: [30.684509, 47.91513],
        style: "mapbox://styles/nicolasca/ck5iasnir0uhx1ipdepyn4xka",
        zoom: 5,
      })
      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl(), "bottom-right")

      map.on("load", () => {
        setMap(map)
        map.resize()
      })
    }

    if (!map) {
      initializeMap({ setMap, mapContainer })
    }
  }, [map])

  return (
    <Layout>
      <SEO title="Carte de voyage" />
      <div
        className={styles.Map}
        style={{ height: "100vh", width: "100%" }}
        ref={el => (mapContainer.current = el)}
      />
    </Layout>
  )
}

export default Map
