import axios from "axios";

export default function adviceAxios(url: string) {
  return axios.get(url).then((resp) => resp.data);
}
