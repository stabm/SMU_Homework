#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd


# In[2]:


# create variable for csv file
pypoll = "election_data.csv"

# create variable for dataframe
poll_df = pd.read_csv(pypoll)
poll_df.head()


# In[3]:


# total number of votes cast
votes = len(poll_df["Voter ID"].unique())
print(votes)


# In[4]:


# complete list of candidates
candidates = poll_df["Candidate"].unique()
print(candidates) 


# In[5]:


# total number of votes per candidate
count = poll_df["Candidate"].value_counts()
print(count)


# In[6]:


# percentage of votes per candidate
percent = (count / votes) * 100
print(round(percent))

# votes = candidate_votes.get(candidate)
# vote_percentage = float(votes) / float(total_votes) * 100


# In[7]:


maxVotes = count.max()
maxCand = count.idxmax()
print(str(maxCand) + " won the election with " + str(maxVotes) + " votes.")


# In[8]:


winner = max(count)


# In[9]:


# style output 

output = (
    f"\nElection Results: \n"
    f"------------------- \n"
    f"Total Votes: {votes} \n"
    f"------------------- \n"
    f"{percent}\n"
    f"------------------- \n"
    f"Winner : {maxCand} won the election with {maxVotes} votes.\n"
    f"------------------- \n") 
print(output)


# In[14]:


# style output 
output = (
    f"\nElection Results: \n"
    f"------------------- \n"
    f"Total Votes: {votes} \n"
    f"------------------- \n"
    f"{list(percent.index)[0]} {str(round(percent[0]))}% ({str(count[0])})\n"
    f"{list(percent.index)[1]} {str(round(percent[1]))}% ({str(count[1])})\n"
    f"{list(percent.index)[2]} {str(round(percent[2]))}% ({str(count[2])})\n"
    f"{list(percent.index)[3]} {str(round(percent[3]))}% ({str(count[3])})\n"
    f"------------------- \n"
    f"Winner : {maxCand} won the election with {maxVotes} votes.\n"
    f"------------------- \n")
print(output)


# In[10]:


# create txt file
text_file = open("PyPoll_Output.txt", "w")
text_file.write(output)
text_file.close()

