#Query all of a user's sightings of birds since 2000 with specific physical traits and display the name, when the sighting was and the collection of traits.
Select UserName, Sightings.ScientificName, Species.PhysicalTraits, Timestamp
from Sightings
Inner Join useraccounts ON sightings.UserID = useraccounts.UserID
Inner Join  species ON Sightings.ScientificName = Species.ScientificName 
Where species.PhysicalTraits like '%red beak%'
AND species.PhysicalTraits like '%red wings%'
AND useraccounts.UserID = 82
AND Timestamp > '2000-01-01 00:00:00'

