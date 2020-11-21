#!/usr/bin/python
import sys
import networkx as nx
import matplotlib.pyplot as plt

# construct graph
# g = nx.DiGraph()

# g.add_edge(1,2)
# g.add_edge(2,1)


# # draw graph
# nx.draw_networkx(g,font_color='white')

# plt.savefig("graph.png") # save graph image

input = ''
while input != 'quit' :
    # tokenize input
    input = sys.stdin.readline()[:-1].split() # chomp and split