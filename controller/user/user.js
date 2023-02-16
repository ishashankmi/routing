import { ERRORS } from "../../constants/index.js";
import { sendResponse } from "../../utils/response.js";
import { getTag } from "../../utils/other.js";
import asyncQueryHandler from "../../utils/asyncQueryHandler.js";

const user = async (req, resp) => {
  const { role } = req.query;

  const data = await asyncQueryHandler(`select * from users where id=${role}`);

  if (data.length) {
    sendResponse(resp, { success: true, data: data[0] });
  } else {
    sendResponse(resp, {
      success: false,
      msg: ERRORS.INVALID_USER,
      tag: getTag(ERRORS.INVALID_USER),
    });
  }
};

export { user };
