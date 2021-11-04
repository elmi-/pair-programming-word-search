const transpose = (matrix) => {
  const verticalJoin = matrix[0].map(function(outerVal, outerIndex) {
    return matrix.map(innerVal => innerVal[outerIndex]).join("");
  });
  return verticalJoin;
};

const wordSearch = (letters, word) => {
  if (!letters.length) {
    return true;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
    else {
      const verticalJoin = transpose(letters);
      for (const v of verticalJoin) {
        if (v.includes(word)) return true;
      }
    }
  }
  
  return false;
};

module.exports = wordSearch;