import json
import flask
from flask import render_template
import networkx as nx

app = flask.Flask(__name__)

filename = 'static/data.json' 


@app.route("/")
def index():
  return render_template('index.html') 


@app.route("/connection", methods=['GET', 'POST'])
def connection():
      # get args
      connection = flask.request.form.get('data')
      operation = flask.request.form.get('operation')

      if operation == 'add':
        # get values from list as string
        connection = connection.split(',')

        with open(filename) as f:
          graph = json.load(f)

        graph = nx.readwrite.json_graph.node_link_graph(graph)
        graph.add_edge(int(connection[0]), int(connection[1]))
        
        with open(filename,'w') as f:
          json.dump(nx.node_link_data(graph), f,  indent=4)


      return render_template('index.html') 


if __name__ == '__main__':
  app.config['TEMPLATES_AUTO_RELOAD'] = True
  app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
  app.run(debug=True)