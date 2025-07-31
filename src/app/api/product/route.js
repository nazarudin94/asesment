import db from "@/../lib/db";

export default async function handler(req, res) {
  try {
    const [rows] = await db.query("SELECT * FROM products");
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
}
