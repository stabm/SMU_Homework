#!/usr/bin/env python
# coding: utf-8

# In[1]:


# import pandas
import pandas as pd

# create variable for csv file
bank = "budget_data.csv"

# create variable for dataframe
bank_df = pd.read_csv(bank)
bank_df.head()


# In[2]:


# display index of columns
print(bank_df.columns)


# In[3]:


# display data info
print(bank_df.info())


# In[4]:


# display number of months
months = len(bank_df["Date"].unique())
print(months)


# In[5]:


# two methods to find sum
net1 = sum(bank_df["Profit/Losses"])
net2 = (bank_df["Profit/Losses"].sum())
print(net1,",",net2)


# In[6]:


# create empty list to hold change values 
changes = []

# calculate greatest increase in profits
for indx, row in bank_df.iterrows():
    
    #print(indx, row['Date'], row['Profit/Losses'])
    if (indx < 85):
        change = bank_df['Profit/Losses'][indx+1] - row['Profit/Losses']
        changes.append(change)

increase = max(changes)
decrease = min(changes)      

# print full list of change values
print("Greatest Increase = ",increase,", ","Greatest Decrease =", decrease)

averageChange = sum(changes)/len(changes)
print(averageChange)


# In[7]:


maxChangeIndex = changes.index(increase)
minChangeIndex = changes.index(decrease)

maxMonth = bank_df.iloc[maxChangeIndex + 1].Date
minMonth = bank_df.iloc[minChangeIndex + 1].Date


# In[8]:


# style output 
output = (
    f"\nFinancial Analysis: \n"
    f"------------------- \n"
    f"Total Months: {months} \n"
    f"Net Total: {net1} \n"
    f"Average Change: {averageChange} \n"
    f"Greatest Increase in Profits: {maxMonth} $({increase})\n"
    f"Greatest Decrease in Profits: {minMonth} $({decrease})")

# print results 
print(output)

# create txt file
text_file = open("PyBank_Output.txt", "w")
text_file.write(output)
text_file.close()


# In[ ]:




