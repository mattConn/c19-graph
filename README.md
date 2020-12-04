# c19-graph
Contact tracing via graph theory.

# Initial Setup
1. Create postgres database `c19contact`.
2. Run `psql c19contact < c19contact.sql` to build database.
3. Run `python generate.py > static/data.json` to generate graph JSON data. *Make sure Postgres is running first!*

Running `python server.py` will spin up flask server where D3.js will read the graph JSON.

# Stack
- Postgres: persistent data
- Python & NetworkX: db to JSON graph conversion
- Flask: Handling of JSON as JS object for real-time data interaction/editing
- D3.js: Front-end graph visualization/manipulation
