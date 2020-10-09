""" Just some example code to read and write some data into 
    the CS5500 Healthcare database and associated collections """
import pymongo
# You need to $pip install dnspython to make this work
import datetime

date_time_string = datetime.datetime.now().strftime("%b %d %Y %H:%M")

RawActivity_example_data = {
    "device_id":"123456","Data":
    [{"activity_date":date_time_string,
    "actvities_type":"walking",
    "activity_duration":"30",
    "activity_meature":"minutes"}]}

client = pymongo.MongoClient("mongodb+srv://FrontEnd:Pass-word1@cluster0.7fauj.mongodb.net/CS5500Healthcare?retryWrites=true&w=majority")
mydb = client["CS5500Healthcare"]

rawactivity = mydb["RawActivity"]
analytics = mydb["Analytics"]
summaryactivity = mydb["SummaryActivity"]

print('\033c') # Clear Screen

# Admins only 
#print(client.list_database_names())
#print(mydb.list_collection_names())

# Get some first record from each collection  
print("Summary Activity:", summaryactivity.find_one())
print("Raw Activity:", rawactivity.find_one())
print("Analytics:", analytics.find_one())

# Insert a single record
result = rawactivity.insert_one(RawActivity_example_data)
print("Inserted one record: ",result.inserted_id)
