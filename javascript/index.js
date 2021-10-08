module.exports = function add(a, b) {
  return normalize(a) + normalize(b);
};

function normalize(value) {
  if (isNaN(Number(value))) {
    return 0;
  }

  return Number(value);
}
