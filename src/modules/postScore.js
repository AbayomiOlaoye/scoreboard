const sendData = async (baseURL, info) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(info),
  });
  return response;
};

export default sendData;
