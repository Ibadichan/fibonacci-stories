import APICall from 'utils/APICall';
import config from 'config';

function fetchAll() {
  const response = APICall({
    method: 'GET',
    endpoint: `${config.BACKEND_HOST}/api/fibonacci-stories`,
  });

  return response;
}

export default fetchAll;
