# Folders

## bootstrap

Generates the `definitions/` folder from Wikipedia infoboxes.
The intent is to generate it only once and then keep working from user contributions,
since not all programming languages will have the requirements to have it's own wikipedia page.

Also, we don't want to depend on Wikipedia, only use it as a starting point.

## definitions

The curated programming language information. The intent is to generate a single plain JSON object in the public folder for consumption by the frontend or any other tools.

## entitities

Schemas, definitions and graph-building code  for every entity (vertex and edges attributes) of the plangs graph.

## graph

The underlying Graph data structure.

## frontend

The frontend code.