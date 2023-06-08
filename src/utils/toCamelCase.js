const toCamelCase = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0
      ? word.toUpperCase()
      : word.toUpperCase().charAt(0) + word.slice(1);
  });
};

export default toCamelCase;
