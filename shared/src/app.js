module.exports = x => {
  if (typeof x !== 'string') {
    throw new Error();
  }
  return x;
};
