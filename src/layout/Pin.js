import React from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import {
  InfoWindow,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';

const enchance = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
);

const Pin = (props) => {
  return (
    <Marker
      position={props.position}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        { props.id }
      </InfoWindow>}
    </Marker>
  );
}

export default enchance(Pin);