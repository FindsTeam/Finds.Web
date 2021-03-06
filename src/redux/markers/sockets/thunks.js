import {
  getMarkersRequest,
  getMarkersSuccess,
  getMarkersError,
} from './actions';
import { markersService } from '../../../services';

const getSockets = () => async (dispatch) => {
  dispatch(getMarkersRequest());

  try {
    const { data } = await markersService.getSockets();
    dispatch(getMarkersSuccess(data));
  } catch (error) {
    console.error(error);
    dispatch(getMarkersError(error));
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getSockets,
};
