/* @flow */
import type { Styles } from '../../types/styles';

export default (): Styles => ({
  progress: {
    position: 'absolute',
    width: '100%',
    zIndex: 1005,
  },
  filterButton: {
    position: 'absolute',
    zIndex: 1001,
  },
  routePanel: {
    position: 'absolute',
    height: 'auto',
    zIndex: 1001,
  },
  userLocationButton: {
    position: 'absolute',
    zIndex: 1002,
  },
  contactUsWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1000,
  },
  contactUs: {
    width: '100%',
    borderRadius: 0,
    fontFamily: '\'Roboto Condensed\', Arial, Helvetica, sans-serif',
    fontWeight: 'bold',
  },
  contactUsDesktop: {
    display: 'none',
  },
  '@media only screen and (min-width: 768px)': {
    contactUs: {
      display: 'none',
    },
    userLocationButton: {
      right: '2%',
      bottom: '10%',
    },
    filterButton: {
      top: '2%',
      right: '2%',
    },
    contactUsDesktop: {
      display: 'inline-flex',
      position: 'absolute',
      zIndex: 1001,
      right: '2%',
      bottom: '4%',
      color: 'black',
      fontFamily: "'Roboto Condensed', Arial, Helvetica, sans-serif",
      fontWeight: 'bold',
    },
    routePanel: {
      left: '2%',
      top: '2%',
      width: '15em',
    },
  },
  '@media only screen and (max-width: 768px)': {
    userLocationButton: {
      right: '4%',
      top: '2%',
    },
    filterButton: {
      left: '4%',
      top: '2%',
    },
    routePanel: {
      bottom: '0',
      width: '100%',
    },
  },
});
