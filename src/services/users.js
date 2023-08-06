import axios from "axios";

class UserServices {
   
  async createUser(data) {
    return await axios.post("http://localhost:3000/api/v1/users", data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  async getMyCart(id) {
    return await axios.get("http://localhost:3000/api/v1/products/my-cart/" + id)
  }
}
const userServices = new UserServices();
export default userServices;