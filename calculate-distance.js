/**
 * This algorithm uses the Haversine formula to calculate the distance between two GPS coordinates.
 * It takes into consideration that the earth is spherical.
 *
 * @param {[lat1, lon1]} coordinate1 - Coordinates of the first gps location in degrees
 * @param {[lat2, lon2]} coordinate2 - Coordinates of the second gps location in degrees
 */
const calculateDistance = (coordinate1, coordinate2) => {
  let [lat1, lon1] = [...coordinate1];
  let [lat2, lon2] = [...coordinate2];

  // Convert latitudes and longitudes to radians
  lat1 = (lat1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;

  let longitudeDifference = ((lon2 - lon1) * Math.PI) / 180;
  let latitudeDifference = lat2 - lat1;

  const R = 6371e3;

  const a = Math.sin(latitudeDifference / 2) * Math.sin(latitudeDifference / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(longitudeDifference / 2) * Math.sin(longitudeDifference / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = Math.abs(R * c) / 1e3;

  return Math.round(distance);
};

module.exports = calculateDistance;
