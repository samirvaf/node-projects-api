let count = 0;

export default (req, res, next) => {
  count += 1;
  console.log('Requisitions: ', count);
  return next();
};
