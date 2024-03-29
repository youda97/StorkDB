CREATE VIEW haveISeenThisBird AS Select UserID, Sightings.ScientificName, PhysicalTraits, images.ImageUrl
from Sightings
Inner Join  species ON Sightings.ScientificName = Species.ScientificName 
Inner Join speciesimages ON speciesimages.ScientificName = Species.ScientificName
Inner Join images ON images.ImageID = speciesimages.ImageID
WHERE species.ScientificName = 'big-beaked ash-bird'
AND UserID = 66