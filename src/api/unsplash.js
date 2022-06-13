import axios from "axios";

export default axios.create({
  baseURL: "/search/photos",
  headers: {
    Authorization: "Client-ID J4Kg22kjtNhOJ3zqoOJlfEudBJlkoOwti03U75v0QOM",
  },
});
