import APICall from 'utils/APICall';

function create(payload) {
  const response = APICall({
    method: 'POST',
    endpoint: `${process.env.BACKEND_HOST}/api/fibonacci-stories`,
    payload,
  });

  return response;
}

export default create;
