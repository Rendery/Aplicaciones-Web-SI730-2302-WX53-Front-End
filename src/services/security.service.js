import axios from "axios";

export class SecurityService {
  login(email, password) {
    const body = {
      email,
      password,
    };

    return axios.post("http://localhost:3000/login", body);
  }
}
