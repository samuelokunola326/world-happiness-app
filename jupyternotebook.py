#!/usr/bin/env python
# coding: utf-8

# In[5]:


#pip install psycopg2-binary
#!pip install csv_to_sqlite


# In[2]:


import numpy as np
import pandas as pd
import psycopg2
import sqlite3
import csv_to_sqlite


# In[5]:


conn = psycopg2.connect(database="world_happiness_index", user = "postgres", password = "password", host = "127.0.0.1", port = "5432")


# In[6]:


cur = conn.cursor()
cur.execute('''CREATE TABLE IF NOT EXISTS year_2015 (
	country VARCHAR(255),
	happiness_rank INT,
	happiness_score FLOAT,
	economy FLOAT,
	health FLOAT,
	freedom FLOAT,
	corruption FLOAT,
	generosity FLOAT

);''')


# In[7]:


cur = conn.cursor()
cur.execute('''CREATE TABLE IF NOT EXISTS year_2016 (
	country VARCHAR(255),
	happiness_rank INT,
	happiness_score FLOAT,
	economy FLOAT,
	health FLOAT,
	freedom FLOAT,
	corruption FLOAT,
	generosity FLOAT

);''')


conn.commit()
cur.close()


# In[8]:


cur = conn.cursor()
cur.execute('''CREATE TABLE IF NOT EXISTS year_2017 (
	country VARCHAR(255),
	happiness_rank INT,
	happiness_score FLOAT,
	economy FLOAT,
	health FLOAT,
	freedom FLOAT,
	corruption FLOAT,
	generosity FLOAT

);''')


conn.commit()
cur.close()


# In[9]:


cur = conn.cursor()
cur.execute('''CREATE TABLE IF NOT EXISTS year_2018 (
	country VARCHAR(255),
	happiness_rank INT,
	happiness_score FLOAT,
	economy FLOAT,
	health FLOAT,
	freedom FLOAT,
	generosity FLOAT,
	corruption FLOAT
	

);''')


conn.commit()
cur.close()


# In[10]:


cur = conn.cursor()
cur.execute('''CREATE TABLE IF NOT EXISTS year_2019 (
	country VARCHAR(255),
	happiness_rank INT,
	happiness_score FLOAT,
	economy FLOAT,
	health FLOAT,
	freedom FLOAT,
	generosity FLOAT,
	corruption FLOAT
	

);''')


conn.commit()
cur.close()


# In[11]:


file_names = ["data/2015.csv","data/2016.csv","data/2017.csv","data/2018.csv","data/2019.csv"]
table_names = ["year_2015","year_2016","year_2017","year_2018","year_2019"]


for file_name, table_name in zip(file_names,table_names ):
    cur = conn.cursor()
    with open(file_name, 'r') as f:
        # Notice that we don't need the `csv` module.
        next(f) # Skip the header row.
        cur.copy_from(f, table_name, sep=',')
    conn.commit()


# In[12]:


cur = conn.cursor()
cur.execute('''SELECT * FROM year_2015;''')

rows = cur.fetchall()

for row in rows:
    print(row)

    
cur.close()


# In[13]:


cur = conn.cursor()
cur.execute('''SELECT * FROM year_2016;''')

rows = cur.fetchall()

for row in rows:
    print(row)

    
cur.close()


# In[14]:


cur = conn.cursor()
cur.execute('''SELECT * FROM year_2017;''')

rows = cur.fetchall()

for row in rows:
    print(row)

    
cur.close()


# In[15]:


cur = conn.cursor()
cur.execute('''SELECT * FROM year_2018;''')

rows = cur.fetchall()

for row in rows:
    print(row)

    
cur.close()


# In[16]:


cur = conn.cursor()
cur.execute('''SELECT * FROM year_2019;''')

rows = cur.fetchall()

for row in rows:
    print(row)

    
cur.close()


# In[ ]:




