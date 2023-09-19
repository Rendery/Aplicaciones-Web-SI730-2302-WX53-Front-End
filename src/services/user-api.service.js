import axios from "axios";

export class UserApiService {
  getAll(start, end) {
    /* fetch("https://jsonplaceholder.typicode.com/users")
                                                                               .then((response) => response.json())
                                                                               .then((json) => (this.users = json));*/
    return axios.get(
      "https://jsonplaceholder.typicode.com/users?_start=" +
        start +
        "&_limit=" +
        end,
    );
  }

  getById(id) {
    /* fetch("https://jsonplaceholder.typicode.com/users")
                                                                               .then((response) => response.json())
                                                                               .then((json) => (this.users = json));*/
    return axios.get("https://jsonplaceholder.typicode.com/users/" + id);
  }

  create(body) {
    return axios.post("https://jsonplaceholder.typicode.com/users(", body);
  }

  update(id, body) {
    return axios.put("https://jsonplaceholder.typicode.com/users/" + id, body);
  }
}
