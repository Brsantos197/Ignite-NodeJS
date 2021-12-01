const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const costumers = [];

//Middleware
function verifyIfExistsAccountCPF(request, response, next) {
  const { cpf } = request.headers;

  const costumer = costumers.find((cosutmer) => cosutmer.cpf === cpf);

  if (!costumer) {
    return response.status(400).json({ error: "Cosutmer not found" });
  }

  request.costumer = costumer;

  return next();
}

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

// app.use(verifyIfExistsAccountCPF)

app.get("/statement/", verifyIfExistsAccountCPF, (request, response) => {
  const { costumer } = request;
  return response.json(costumer.statement);
});

app.listen(3333);
