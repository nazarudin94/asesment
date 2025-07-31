import { db } from "@/lib/db";
export async function GET(request) {
  try {
    const [rows] = await db.query(`SELECT 
    p.product_id,
    p.product_name,
    p.product_brand,
    o.owner_name
FROM 
    products p
LEFT JOIN 
    products_owners po ON p.product_id = po.products_id
LEFT JOIN 
    owners o ON po.owners_id = o.id`);
    return Response.json(rows);
  } catch (error) {
    console.error("DB Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
