import os from "node:os";
import express from "express";
const app = express();

import yaml2json from "./pipelines/yaml.js";
import opensearch from "./pipelines/opensearch.js";

const PORT = import.meta.env.PORT || 3010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(yaml2json);
app.use(opensearch);

app.listen(PORT, () => {
  console.log(`${process.argv[1]} listening on port ${PORT}`);
});
