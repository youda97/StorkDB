#Updates a hotspot reference a different location with the value greater than 20100
UPDATE hotspot, sightings
   SET hotspot.CityName = (SELECT CityName FROM Sightings Having count(*) > 20100 )
 WHERE hotspot.SpotID = 6
