const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const costumers = [];
/*
 * cpf - string
 * name - string
 * name - string
 * statement []
 */
app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const costumerAlreadyExistis = costumers.some(
    (costumer) => costumer.cpf === cpf
  );

  if (costumerAlreadyExistis) {
    return response.status(400).json({ error: "Customer already exists!" });
  }

  costumers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  });

  return response.status(201).send();
});

app.get("/statement/:cpf", (request, response) => {
  const { cpf } = request.params;

  const costumer = costumers.find((cosutmer) => cosutmer.cpf === cpf);

  if (!costumer) {
    return response.status(400).json({ error: "Cosutmer not found" });
  }

  return response.json(costumer.statement);
});

app.listen(3333);
