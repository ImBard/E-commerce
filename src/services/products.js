import axios from "axios";

class ProductServices {
  async detailsProduct() {
    return await axios.get("https://raw.githubusercontent.com/ImBard/E-commerce/main/teste/data.json")
  }
}
const productServices = new ProductServices();
export default productServices;