import axios from "axios";

class UserServices {
   
  async createUser(data) {
    return await axios.post("http://localhost:3000/api/v1/users", data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}
const userServices = new UserServices();
export default userServices;