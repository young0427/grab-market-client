import { useParams } from "react-router-dom";

function ProductPage() {
  const params = useParams();
  console.log(param);
  return <h1>product page</h1>;
}

export default ProductPage;
