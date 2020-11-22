# c19-graph
Contact tracing via graph theory.

# Initial Setup
1. Create postgres database `c19contact`.
2. Run `psql c19contact < c19contact.sql` to build database.
3. Run `python generate.py > data.json` to generate graph JSON data.

Running `python server.py` will spin up flask server which will read JSON data into JS object.

# Stack
- Postgres: persistent data
- Python & NetworkX: db to JSON graph conversion
- Flask: Handling of JSON as JS object for real-time data interaction/editing (volatile)
