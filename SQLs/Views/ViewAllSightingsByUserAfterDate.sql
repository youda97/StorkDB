CREATE VIEW allMySightingsAfter2008 AS Select useraccounts.UserName, Sightings.ScientificName, Timestamp
from Sightings
Inner join useraccounts ON useraccounts.UserID = sightings.UserID
Where UserName = '2UX9NNFD4RYI'
AND TimeStamp > '2008-01-01 00:00:00' 
Order by Timestamp desc