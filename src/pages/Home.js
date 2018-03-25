import React from 'react';

import {
  compose,
  withState,
  withProps,
  lifecycle
} from 'recompose';

import firebaseApp from '../tools/firebase';

import {
  Marker,
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

const devices = [
  "LATTE-001",
  "LATTE-002",
  "LATTE-003",
  "LATTE-004",
  "LATTE-005",
  "LATTE-006",
  "LATTE-007",
  "LATTE-008",
  "LATTE-009",
  "LATTE-010"
];

const devicesLocation = [
  {
    lat: 16.708259,
    lng: 102.325263
  },
  {
    lat: 16.584572,
    lng: 102.606009
  },
  {
    lat: 16.481216,
    lng: 102.824182
  },
  {
    lat: 15.808843,
    lng: 102.677270
  },
  {
    lat: 15.911962,
    lng: 102.762177
  },
  {
    lat: 15.854813,
    lng: 102.446731
  },
  {
    lat: 16.055341,
    lng: 102.540599
  },
  {
    lat: 16.331049,
    lng: 102.556804
  },
  {
    lat: 16.549110,
    lng: 102.245915
  },
  {
    lat: 16.641193,
    lng: 103.088488
  }
];

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
    defaultZoom={9}
    defaultCenter={{ lat: 16.5986803, lng: 102.4644866 }}
  >
    {
      devices.map((device, index) => (
        <Marker
          key={device}
          position={devicesLocation[index]}
        />
      ))
    }
    
  </GoogleMap>
);

const enchance2 = compose(
  withState("devicesData", "setDevicesData", []),
  lifecycle({
    componentDidMount() {
      devices.map((name, index) => {
        const device = firebaseApp.database().ref(`devices/${name}`).limitToLast(1).on("child_added", (snapshot) => {
          //console.log(index, snapshot.val());
          this.props.setDevicesData(this.props.devicesData);
        });
      });
    }
  }));

const Home = (props) => {
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

export default enchance2(Home);