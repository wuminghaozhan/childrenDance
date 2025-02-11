"use server";

import { neon } from "@neondatabase/serverless";


if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}
const sql = neon(process.env.DATABASE_URL);


async function listInvoices() {
	const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;
  console.log('dddd', data);
	return data;
}

export async function GET() {
  try {
    await sql`BEGIN`;
    const res = await listInvoices();
    console.log('res', res);
  	return Response.json(res);
  } catch (error) {
    await sql`ROLLBACK`;
  	return Response.json({ error }, { status: 500 });
  }
}