export const numberWithDelimiter = (number, delimiter, separator) => {
  try {
    delimiter = delimiter || ",";
    separator = separator || ".";
    
    var parts = number.toString().split('.');
    parts[0] = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + delimiter);
    return parts.join(separator);
  } catch(e) {
    return number
  }
};

export const randomBetween = (low, high) => {
  if (low >= high) return low;
  var diff = high - low;
  return Math.random() * diff + low;
};

export const toTitleCase = (str) => {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}
