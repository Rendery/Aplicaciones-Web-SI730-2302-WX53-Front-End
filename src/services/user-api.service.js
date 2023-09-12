import axios from "axios";

export class UserApiService {
  getAll() {
    /* fetch("https://jsonplaceholder.typicode.com/users")
                       .then((response) => response.json())
                       .then((json) => (this.users = json));*/

    return axios.get("https://jsonplaceholder.typicode.com/users");
  }
}
