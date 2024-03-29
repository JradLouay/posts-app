import axios from "axios";

// axios client with baseUrl and default headers
let AxiosClient = axios.create({
  baseURL: "https://dummyapi.io/data/v1",
  headers: {
    "Content-Type": "application/json",
    "app-id": "627b956fb058dc4fa16fa1b9",
  },
});

export default AxiosClient;
