import React from 'react';
import mapboxgl from 'mapbox-gl';
import Proptypes from 'prop-types';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { useIntl } from 'gatsby-plugin-intl';
import Seo from '../components/seo';
import '../styles/mapbox-gl.css';
import '../styles/mapbox-geocoder.css';
import { useState, useEffect, useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100vw;
  span,
  a,
  p {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: -3rem;
    height: calc(100vh + 3rem);
  }
`;

const Map = () => {
  const intl = useIntl();
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    const birmanie = ReactDOMServer.renderToStaticMarkup(
      <PopupContent
        title={'Mingun, Birmanie'}
        image={'/images/map/birmanie.jpg'}
      />
    );

    const indonesie = ReactDOMServer.renderToStaticMarkup(
      <PopupContent
        title={'Lombok, Indonésie'}
        image={'/images/map/indonesie.jpg'}
      />
    );

    const laos = ReactDOMServer.renderToStaticMarkup(
      <PopupContent
        title={'Muang Ngoi, Laos'}
        image={'/images/map/muang-ngoi.jpg'}
      />
    );

    const yangoon = ReactDOMServer.renderToStaticMarkup(
      <PopupContent
        title={'Yangoon, Birmanie'}
        image={'/images/map/yangoon.jpg'}
      />
    );

    const valparaiso = ReactDOMServer.renderToStaticMarkup(
      <PopupContent
        title={'Valparaíso, Chili'}
        image={'/images/map/valparaiso.jpg'}
      />
    );

    const uyuni = ReactDOMServer.renderToStaticMarkup(
      <PopupContent
        title={'Salar de Uyuni, Bolivie'}
        image={'/images/map/uyuni.jpg'}
      />
    );

    const mekong = ReactDOMServer.renderToStaticMarkup(
      <PopupContent title={'Mekong, Laos'} image={'/images/map/mekong.jpg'} />
    );

    const kyoto = ReactDOMServer.renderToStaticMarkup(
      <PopupContent title={'Kyoto, Japon'} image={'/images/map/kyoto.jpg'} />
    );

    const kamaguchi = ReactDOMServer.renderToStaticMarkup(
      <PopupContent
        title={'Lac Kawaguchi, Japon'}
        image={'/images/map/kawaguchi.jpg'}
      />
    );

    const santiago = ReactDOMServer.renderToStaticMarkup(
      <PopupContent
        title={'Santiago, Chili'}
        image={'/images/map/santiago.jpg'}
      />
    );

    const machuPicchu = ReactDOMServer.renderToStaticMarkup(
      <PopupContent
        title={'Machu Picchu, Pérou'}
        image={'/images/map/machuPicchu.jpg'}
      />
    );

    const kissamos = ReactDOMServer.renderToStaticMarkup(
      <PopupContent
        title={'Kissamos, Crète'}
        image={'/images/map/kissamos.jpg'}
      />
    );

    const baliCr = ReactDOMServer.renderToStaticMarkup(
      <PopupContent title={'Bali, Crète'} image={'/images/map/baliCr.jpg'} />
    );

    const mingun2 = ReactDOMServer.renderToStaticMarkup(
      <PopupContent
        title={'Mingun, Birmani'}
        image={'/images/map/mingun2.jpg'}
      />
    );

    const strasbourg = ReactDOMServer.renderToStaticMarkup(
      <PopupContent
        title={'Strasbourg, France'}
        image={'/images/map/strasbourg.jpg'}
      />
    );

    const geojson = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              description: birmanie,
              icon: 'attraction',
            },
            geometry: {
              type: 'Point',
              coordinates: [95.99857292249919, 22.061821696465117],
            },
          },
          {
            type: 'Feature',
            properties: {
              description: indonesie,
              icon: 'attraction',
            },
            geometry: {
              type: 'Point',
              coordinates: [116.4179790683367, -8.432149362762743],
            },
          },
          {
            type: 'Feature',
            properties: {
              description: laos,
              icon: 'attraction',
            },
            geometry: {
              type: 'Point',
              coordinates: [102.66453208065661, 20.728733100360074],
            },
          },
          {
            type: 'Feature',
            properties: {
              description: yangoon,
              icon: 'attraction',
            },
            geometry: {
              type: 'Point',
              coordinates: [96.17422875537767, 16.80154387117817],
            },
          },
          {
            type: 'Feature',
            properties: {
              description: valparaiso,
              icon: 'attraction',
            },
            geometry: {
              type: 'Point',
              coordinates: [-71.61999313026931, -33.04383626697376],
            },
          },
          {
            type: 'Feature',
            properties: {
              description: uyuni,
              icon: 'attraction',
            },
            geometry: {
              type: 'Point',
              coordinates: [-67.01949071504167, -20.760153960506415],
            },
          },
          {
            type: 'Feature',
            properties: {
              description: mekong,
              icon: 'attraction',
            },
            geometry: {
              type: 'Point',
              coordinates: [101.88568155816853, 18.025211347134288],
            },
          },
          {
            type: 'Feature',
            properties: {
              description: kyoto,
              icon: 'attraction',
            },
            geometry: {
              type: 'Point',
              coordinates: [135.75742682447276, 34.99935660831572],
            },
          },
          {
            type: 'Feature',
            properties: {
              description: kamaguchi,
              icon: 'attraction',
            },
            geometry: {
              type: 'Point',
              coordinates: [138.7574594408178, 35.52464722872192],
            },
          },
          {
            type: 'Feature',
            properties: {
              description: santiago,
              icon: 'attraction',
            },
            geometry: {
              type: 'Point',
              coordinates: [-70.66427120069258, -33.45002905471177],
            },
          },
          {
            type: 'Feature',
            properties: {
              description: machuPicchu,
              icon: 'attraction',
            },
            geometry: {
              type: 'Point',
              coordinates: [-72.54577133862249, -13.164123278828214],
            },
          },
          {
            type: 'Feature',
            properties: {
              description: kissamos,
              icon: 'attraction',
            },
            geometry: {
              type: 'Point',
              coordinates: [23.65346701952552, 35.49698661653943],
            },
          },
          {
            type: 'Feature',
            properties: {
              description: baliCr,
              icon: 'attraction',
            },
            geometry: {
              type: 'Point',
              coordinates: [24.783242966933273, 35.414674826223475],
            },
          },
          {
            type: 'Feature',
            properties: {
              description: mingun2,
              icon: 'attraction',
            },
            geometry: {
              type: 'Point',
              coordinates: [95.99984104081295, 22.08732873448838],
            },
          },
          {
            type: 'Feature',
            properties: {
              description: strasbourg,
              icon: 'attraction',
            },
            geometry: {
              type: 'Point',
              coordinates: [7.7507127, 48.584614],
            },
          },
        ],
      },
    };

    mapboxgl.accessToken =
      'pk.eyJ1Ijoibmljb2xhc2NhIiwiYSI6ImNqdjNlZHY2czFzbGs0M280ZXg5bHE3ZnQifQ.qvyAeDcAJiswn2VLP320Tw';
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        center: [-175.73219158277513, 1.2417133592737315],
        style: 'mapbox://styles/nicolasca/ckdyssl1y05lt19p94phx3ipq',
        zoom: 1.5,
      });
      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
      map.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
        })
      );

      map.on('load', () => {
        // Add a layer showing the places.
        map.addSource('places', geojson);
        map.addLayer({
          id: 'places',
          type: 'circle',
          source: 'places',
          paint: {
            'circle-color': '#c90000',
            'circle-radius': 5,
          },
        });
        setMap(map);
        map.resize();

        map.on('click', 'places', (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice();
          const description = e.features[0].properties.description;

          new mapboxgl.Popup({ className: 'popup' })
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
        });

        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'places', function () {
          map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'places', function () {
          map.getCanvas().style.cursor = '';
        });
      });
    };

    if (!map) {
      initializeMap({ setMap, mapContainer });
    }
  }, [map]);

  return (
    <>
      <Seo title={intl.formatMessage({ id: 'Map' })} />
      <MapContainer
        style={{ height: 'calc(100vh - 4rem - 32px - 16px)', width: '100vw' }}
        ref={(el) => (mapContainer.current = el)}
      />
    </>
  );
};

export default Map;

const PopupContent = ({ title, image }) => {
  return (
    <>
      <strong>{title}</strong>
      <p>
        <img style={{ maxWidth: 'min(600px, 90vw)' }} src={image} alt="" />
      </p>
    </>
  );
};

PopupContent.propTypes = {
  title: Proptypes.string,
  image: Proptypes.string,
};
