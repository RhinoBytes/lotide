function tail(arr) {
  if (arr.length === 0) {
    return [];
  }
    return arr.slice(1);
 
};

module.exports = tail;

