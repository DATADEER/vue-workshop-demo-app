import axios from "axios";

export function fetchBuildings() {
  return axios.get(
    "https://api.mockaroo.com/api/3e87d220?count=300&key=16ce6ca0"
  );
}
