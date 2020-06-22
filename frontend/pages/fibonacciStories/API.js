import APICall from 'utils/APICall';

function fetchAll() {
  const response = APICall({
    method: 'GET',
    endpoint: `${process.env.BACKEND_HOST}/api/fibonacci-stories`,
  });

  return response;
}

export default fetchAll;
