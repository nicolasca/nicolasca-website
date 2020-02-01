import React from "react"
import mapboxgl from "mapbox-gl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./Map.scss"
import "../styles/mapbox-gl.css"
import { useState, useEffect, useRef } from "react"
import ReactDOMServer from "react-dom/server"

const Map = () => {
  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)

  useEffect(() => {
    const birmanie = ReactDOMServer.renderToStaticMarkup(
      <>
        <strong>Mingun, Birmanie</strong>
        <p>
          <img style={{ maxWidth: "600px" }} src="/birmanie.jpg" alt="" />
        </p>
      </>
    )

    const indonesie = ReactDOMServer.renderToStaticMarkup(
      <>
        <strong>Lombok, Indonésie</strong>
        <p>
          <img style={{ maxWidth: "600px" }} src="/indonesie.jpg" alt="" />
        </p>
      </>
    )

    const muangNgoi = ReactDOMServer.renderToStaticMarkup(
      <>
        <strong>Muang Ngoi, Laos</strong>
        <p>
          <img style={{ maxWidth: "600px" }} src="/nong-khiaw.jpg" alt="" />
        </p>
      </>
    )

    const geojson = {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              description: birmanie,
              icon: "theatre",
            },
            geometry: {
              type: "Point",
              coordinates: [95.99857292249919, 22.061821696465117],
            },
          },
          {
            type: "Feature",
            properties: {
              description: indonesie,
              icon: "volcano",
            },
            geometry: {
              type: "Point",
              coordinates: [116.4179790683367, -8.432149362762743],
            },
          },
          {
            type: "Feature",
            properties: {
              description: muangNgoi,
              icon: "park",
            },
            geometry: {
              type: "Point",
              coordinates: [102.66453208065661, 20.728733100360074],
            },
          },
        ],
      },
    }

    mapboxgl.accessToken =
      "pk.eyJ1Ijoibmljb2xhc2NhIiwiYSI6ImNqdjNlZHY2czFzbGs0M280ZXg5bHE3ZnQifQ.qvyAeDcAJiswn2VLP320Tw"
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        center: [110.684509, 25.91513],
        style: "mapbox://styles/nicolasca/ck5iasnir0uhx1ipdepyn4xka",
        zoom: 2,
      })
      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl(), "bottom-right")

      map.on("load", () => {
        // Add a layer showing the places.
        map.addSource("places", geojson)
        map.addLayer({
          id: "places",
          type: "symbol",
          source: "places",
          layout: {
            "icon-image": "{icon}-15",
            "icon-size": 1.5,
            "icon-allow-overlap": true,
          },
        })
        setMap(map)
        map.resize()

        map.on("click", e => {
          console.log(e.lngLat)
        })

        map.on("click", "places", e => {
          const coordinates = e.features[0].geometry.coordinates.slice()
          const description = e.features[0].properties.description

          new mapboxgl.Popup({ className: "popup", anchor: "bottom" })
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map)
        })

        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on("mouseenter", "places", function() {
          map.getCanvas().style.cursor = "pointer"
        })

        // Change it back to a pointer when it leaves.
        map.on("mouseleave", "places", function() {
          map.getCanvas().style.cursor = ""
        })
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
        className="Map"
        style={{ height: "100vh", width: "100%" }}
        ref={el => (mapContainer.current = el)}
      />
    </Layout>
  )
}

export default Map
