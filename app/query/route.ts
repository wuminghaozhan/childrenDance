// import { db } from "@vercel/postgres";

// const client = await db.connect();
import { neon } from "@neondatabase/serverless";

const client: { sql: any } = { sql: null };
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}
client.sql = neon(process.env.DATABASE_URL);

async function listInvoices() {
	const data = await client.sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

	return data.rows;
}

export async function GET() {
  try {
  	return Response.json(await listInvoices());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}
