import React from 'react';

import {
  compose,
  withState,
  withProps,
} from 'recompose';

import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';

import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand
} from 'reactstrap';

import Card from '../layout/Card';

const enchance = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
);

const Map = enchance((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */}
  </GoogleMap>
);

const Home = () => {
  return (
    <div>
      <Navbar style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        height: 120,
      }}>
        <NavbarBrand style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}>
          <div style={{ fontSize: '40px', fontWeight: '500', marginBotom: 8 }}>
            Empty
          </div>
          <div style={{ width: '250px', height: '3px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '5px' }} />
          <div style={{ fontSize: '24px', fontWeight: '200', marginBotom: 8 }}>
            Forecast Weather
          </div>
        </NavbarBrand>
      </Navbar>
      <Container fluid style={{
        marginTop: 16,
        marginBottom: 16
      }}>
        <Row>
          <Col
            lg={9}
            md={12}
            sm={12}
            xs={12}
          >
            <Map />
          </Col>
          <Col
            lg={3}
            md={12}
            sm={12}
            xs={12}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div style={{
              fontSize: 32,
              color: 'white',
              marginBottom: 16
            }}>สภาพอากาศปัจจุบัน °C</div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;