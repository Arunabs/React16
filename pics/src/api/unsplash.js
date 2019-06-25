import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 45e472bb82a2e3298b4460301eea2ebea0456fe6cc4cb7078cf9f7eca1307fbf"
  }
});
