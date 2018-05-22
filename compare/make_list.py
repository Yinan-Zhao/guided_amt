import numpy as np
import argparse
import os
import sys

name_list = None
perm = np.random.permutation(100)
with open('./test_list.txt', 'w') as f1:
    with open('../include_box.txt', 'r') as f:
        lines = f.readlines()
        lines = [line.strip() for line in lines]
        include_list = [[int(line.split(',')[0]), int(line.split(',')[1])] for line in lines]
    name_list = []
    for i in range(100):
        first = "ours/%d/%03d.jpg" % (i, include_list[i][1])
        #second = "harmonization/%d/%03d.jpg" % (i, include_list[i][1]+1)
        #second = "content_aware/%03d.png" % (i)
        #second = "melding/%03d.jpg" % (i)
        second = "blend_20/%d/%03d.jpg" % (i, include_list[i][1]+1)
        #second = "ctx/%03d.jpg" % (i)
        #second = "high-res/%03d.jpg" % (i)
        #second = "siggraph/%03d.jpg" % (i)
        rand_num = np.random.randint(2)
        if rand_num:
            name_list.append('["%s", "%s"]' % (first, second))
        else:
            name_list.append('["%s", "%s"]' % (second, first))

    #perm_list = name_list
    perm_list = [name_list[i] for i in perm]
    for i in range(len(perm_list)):
        f1.write(perm_list[i]+',\n')

