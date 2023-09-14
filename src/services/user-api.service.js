import axios from "axios";

export class UserApiService {
  getAll(start, end) {
    return axios.get(
      "https://remotive.com/api/remote-jobs?category=software-dev&limit=1",
    );
  }
}
