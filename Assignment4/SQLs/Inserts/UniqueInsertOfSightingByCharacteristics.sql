#Select a specific bird to be sighted at a time in a specific location 
#with a forest based on a user ID and specific characteristics of the bird

INSERT into Sightings  (SightingID, Timestamp, NumberFound, CityName, UserID, ScientificName)
Select null, '1994-03-29 12:42:23', 6, Regions.CityName, useraccounts.UserID, species.ScientificName
from Regions, useraccounts, species
WHERE Regions.HabitatType = 'Forest'
AND useraccounts.UserID = 36
AND species.PhysicalTraits= 'purple beak, red wings, blue eggs, green eyes, green feet, purple'
