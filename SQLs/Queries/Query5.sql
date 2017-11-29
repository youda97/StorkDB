#Queries for every sighting account for a specific user account since Jan 1st, 2008 and displays all the birds the user has sighted with a timestamp.
Select useraccounts.UserName, Sightings.ScientificName, Timestamp
from Sightings
Inner join useraccounts ON useraccounts.UserID = sightings.UserID
Where UserName = '2UX9NNFD4RYI'
AND TimeStamp > '2008-01-01 00:00:00' 
Order by Timestamp desc