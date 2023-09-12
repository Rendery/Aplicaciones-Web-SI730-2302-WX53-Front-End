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
}
