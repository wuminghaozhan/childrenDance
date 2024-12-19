"use server";

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
  console.log('dddd', data);
	return data;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    const res = await listInvoices();
    console.log('res', res);
  	return Response.json(res);
  } catch (error) {
    await client.sql`ROLLBACK`;
  	return Response.json({ error }, { status: 500 });
  }
}
// export async function GET() {
//   try {
//     await client.sql`BEGIN`;
//     await seedUsers();
//     await seedCustomers();
//     await seedInvoices();
//     await seedRevenue();
//     await client.sql`COMMIT`;

//     return Response.json({ message: 'Database seeded successfully' });
//   } catch (error) {
//     await client.sql`ROLLBACK`;
//     return Response.json({ error }, { status: 500 });
//   }
// }