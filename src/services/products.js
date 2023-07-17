import axios from "axios";

class ProductServices {
  async detailsProduct(code) {
    console.log(code)
    return await axios.get("http://localhost:3000/api/v1/products/"+code)
  }

  async getAllProducts() {
    return await axios.get("http://localhost:3000/api/v1/products/view")
  }
}
const productServices = new ProductServices();
export default productServices;