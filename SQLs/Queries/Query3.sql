#Queries for the 20 users with the most sightings and displays their usernames with their amount of sightings.
SELECT useraccounts.UserName, COUNT(sightings.UserID) AS results FROM Sightings Inner Join  Useraccounts ON Sightings.UserID = useraccounts.userID
GROUP BY useraccounts.UserName
ORDER by results desc
LIMIT 20
