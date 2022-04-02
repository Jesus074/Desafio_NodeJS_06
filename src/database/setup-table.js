
const { getClient } = require('./get-client');

(async () => {
  const client = await getClient();
  let createTableQuery = `
    CREATE TABLE IF NOT EXISTS nome_alunos(
      id BIGSERIAL PRIMARY KEY NOT NULL ,
      nome varchar
    );
  `;
  const res = await client.query(createTableQuery);
  console.log(`Created table.`);
  await client.end();
})();