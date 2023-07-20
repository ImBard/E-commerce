import axios from "axios";

class ProductServices {
  async detailsProduct(code) {
    return await axios.get("http://localhost:3000/api/v1/products/"+code)
  }

  async getAllProducts() {
    return await axios.get("http://localhost:3000/api/v1/products/view")
  }

  async addCart(data) {
    return await axios.post("http://localhost:3000/api/v1/products/cart", data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

}
const productServices = new ProductServices();
export default productServices;