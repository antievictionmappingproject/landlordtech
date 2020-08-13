import _ from 'lodash';

export const convGeoJSON = (data) => {
  let result = {
    "type": "FeatureCollection",
    "features": []
  }

  console.log(data);
  _.each(data, (datum, i) => {

    if (datum.Timestamp.length > 0) {
      datum["techType"] = datum["Would you consider this technology any of the following:"].split(', ');

      
      if (!_.isArray(datum["techType"])){
        datum["techType"] = [datum["techType"]];
      }

      for (let j = 0; j < datum["techType"].length; j++) {
        console.log(datum["techType"][j]);
        datum["techType"][j] = datum["techType"][j].replace(/\([^)]*\)/, "").replace(/\s+$/g, '');
      }
    
  
      let feature = {
        "id": i + 1,
        "properties": datum,
        "geometry": {
          "type": "Point",
          "coordinates": [
            Number(datum.Longitude),
            Number(datum.Latitude)
          ]
        }
      };
  
      result.features.push(feature);
    }
   
  })

  return result;
};


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
