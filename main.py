#!/usr/bin/python

import sys
import networkx as nx
import psycopg2
import matplotlib.pyplot as plt

try:
    connection = psycopg2.connect(user = 'root', password = 'root', host = '127.0.0.1', port = '5432', database = 'c19contact')
except (Exception, psycopg2.Error) as error :
    print(error)
    sys.exit()

cursor = connection.cursor()

cursor.execute('select * from People;')
record = cursor.fetchall()
print(record)

# construct graph
# g = nx.DiGraph()

# g.add_edge(1,2)
# g.add_edge(2,1)


# # draw graph
# nx.draw_networkx(g,font_color='white')

# plt.savefig('graph.png') # save graph image

# input = [''] 
# while input[0] != 'quit' :
#     # tokenize input
#     input = sys.stdin.readline()[:-1].split() # chomp and split