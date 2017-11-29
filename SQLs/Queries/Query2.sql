#Queries for the amount of sightings that occur at each area and displays the amount of sightings per city in descending order
SELECT CityName, COUNT(sightings.CityName) AS results FROM Sightings GROUP BY CityName 
ORDER by results desc