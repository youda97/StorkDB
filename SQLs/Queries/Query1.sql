#Queries for a Species Name and displays the related image for the species based on selected physical traits.
Select Species.PhysicalTraits, Species.ScientificName, Images.ImageURL
from Species
Inner Join  speciesImages ON SpeciesImages.ScientificName = Species.ScientificName 
Inner Join images ON speciesimages.ImageID = Images.ImageID
Where species.PhysicalTraits like '%red beak%'
AND species.PhysicalTraits like '%red wings%'
AND species.PhysicalTraits like '%sparkling feet%';


