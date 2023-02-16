const sendResponse = async (resp, data) => {
  if (data.status) resp.status(data.status).json(data);
  else resp.json(data);
};

export { sendResponse };
