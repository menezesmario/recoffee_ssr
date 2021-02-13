import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const products = await db
    .collection("products")
    .find({})
    .sort({})
    .limit(20)
    .toArray();
  res.json(products);
};