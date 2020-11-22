# generate graph image and json

import sys
import networkx as nx
import psycopg2
import matplotlib.pyplot as plt

# db connect
try:
    connection = psycopg2.connect(user = 'root', password = 'root', host = '127.0.0.1', port = '5432', database = 'c19contact')
except (Exception) as error :
    sys.stderr.write(str(error))
    sys.exit(1)

cursor = connection.cursor()

# all people rows
cursor.execute('select * from People;')
people = cursor.fetchall()

# all contact rows 
cursor.execute('select * from Contact;')
contact = cursor.fetchall()

# construct graph
g = nx.Graph()

# add all people
for row in people:
    g.add_node(row[0])

# connect all people who have made contact
for row in contact:
    g.add_edge(row[0],row[1])

# draw graph
nx.draw_networkx(g,font_color='black')
plt.savefig('graph.png') # save graph image

print(nx.node_link_data(g)) # print graph json

sys.exit(0)