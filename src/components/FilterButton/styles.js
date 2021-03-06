/* @flow */
import type { Styles } from '../../types/styles';

const styles = (theme: any): Styles => ({
  filter: {
  },
  drop: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
  },
  open: {
    display: 'flex',
  },
  close: {
    display: 'none',
  },
  mainButton: {
  },
  optionButton: {
    marginTop: 15,
  },
  '@media only screen and (min-width: 768px)': {
    filter: {
      top: '2%',
      left: '2%',
    },
  },
});

export default styles;
