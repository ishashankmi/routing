import { ERRORS } from "../constants/index.js";
import { sendResponse } from "../utils/response.js";
import { getTag } from "../utils/other.js";
import * as dotenv from 'dotenv';
dotenv.config()

const isValidUser = (req, resp, next) => {
  const { token } = req.query;

  console.log('resp from server : ', process.env.PORT)

  if (!token)
    sendResponse(resp, {
      success: false,
      tag: getTag(ERRORS.TOKEN_NOT_FOUND),
      msg: ERRORS.TOKEN_NOT_FOUND,
      status: 401,
    });
  else if (token == 123)
    sendResponse(resp, {
      success: false,
      tag: getTag(ERRORS.TOKEN_NOT_FOUND),
      msg: ERRORS.INVALID_TOKEN,
      status: 401,
    });
  else next();
};

export { isValidUser };
