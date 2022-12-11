import axios from "axios";

const request = (req) =>
  axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
      cookie: req.get("cookie") || "",
    },
  });

export default request;
