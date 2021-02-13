import { connectToDatabase } from "../util/mongodb";
export default function Products({ products }) {
  return (
    <div>
      <h1 style={{fontWeight: "bold"}}>Cafés</h1>
      <br></br>
      <p>
        <small></small>
      </p>
      <ul>
        {products.map((product) => (
          <li>
            <h2 style={{fontWeight: "bold"}}>{product.name}</h2>
            <h3>{product.description}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const products = await db
    .collection("products")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}