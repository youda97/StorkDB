Create database storkdb;
Use storkdb;
CREATE TABLE regions
(
	CityName	VARCHAR(30) NOT NULL,
	HabitatType	VARCHAR(30),
	PRIMARY KEY (CityName)
);

CREATE TABLE species
(
	ScientificName	VARCHAR(35) NOT NULL, 
	PhysicalTraits	VARCHAR(300), 	
	Rarity			INT,
	CityName	VARCHAR(30),
	PRIMARY KEY (ScientificName),
	FOREIGN KEY (CityName) REFERENCES Regions(CityName)
);

CREATE TABLE useraccounts
(
	UserID 		INT NOT NULL AUTO_INCREMENT,
	UserName 	VARCHAR(30) NOT NULL,
	Name   		VARCHAR(30),
	Password	VARCHAR(30) NOT NULL,
	Address		VARCHAR(40),
	AccountType	VARCHAR(20) NOT NULL,
	CityName	VARCHAR(30),
	PRIMARY KEY (UserID),
	FOREIGN KEY (CityName) REFERENCES Regions(CityName),
	UNIQUE(UserName)
);

CREATE TABLE sightings
(
	SightingID	INT NOT NULL AUTO_INCREMENT,
	Timestamp		DATETIME NOT NULL, 		
	NumberFound		INT NOT NULL,
	PRIMARY KEY(SightingID),
	CityName	VARCHAR(30),
	UserID 		INT,
	ScientificName	VARCHAR(35),
	FOREIGN KEY (CityName)  REFERENCES Regions(CityName),
	FOREIGN KEY (UserID) 	REFERENCES Useraccounts(UserID),
	FOREIGN KEY (ScientificName) REFERENCES Species(ScientificName)
);

CREATE TABLE images(
	ImageID 	INT NOT NULL AUTO_INCREMENT,
	ImageUrl 	VARCHAR(100) NOT NULL,
	PRIMARY KEY (ImageID)
);

CREATE TABLE speciesimages
(
	ImageRelationID	INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(ImageRelationID),
	ImageID INT,
	ScientificName	VARCHAR(35),
	FOREIGN KEY (ScientificName) REFERENCES Species(ScientificName),
	FOREIGN KEY (ImageID) REFERENCES Images(ImageID)
);


CREATE TABLE hotspot(
	SpotID		INT NOT NULL AUTO_INCREMENT,
	Location 	VARCHAR(80),
	CityName	VARCHAR(30) NOT NULL,
	FOREIGN 	KEY (CityName) REFERENCES Regions(CityName),
	PRIMARY 	KEY (SpotID)
    

);
DELIMITER $$
CREATE TRIGGER test_before_insert BEFORE INSERT ON useraccounts
FOR EACH ROW
BEGIN
    IF (New.AccountType != 'Student') THEN 
    IF (New.AccountType != 'Researcher') THEN
    IF (New.AccountType != 'Recreational') THEN
        SIGNAL SQLSTATE '12345'
            SET MESSAGE_TEXT = 'check constraint on Test.ID failed';
    END IF;
    end if;
    End if; 
END$$   
DELIMITER 
