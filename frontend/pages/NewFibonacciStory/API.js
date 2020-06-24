import APICall from 'utils/APICall';
import config from 'config';

function create(payload) {
  const response = APICall({
    method: 'POST',
    endpoint: `${config.BACKEND_HOST}/api/fibonacci-stories`,
    payload,
  });

  return response;
}

export default create;
