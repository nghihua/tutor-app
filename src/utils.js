export const includeCredentials = { credentials: "include" };

const errMsgPrefix = /^\[HTTP \d\d\d\] ?/;
export const getFetchErrMsg = (error) => error.replace(errMsgPrefix, "");
