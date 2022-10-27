create table plant
(
    id                     serial primary key,
    name                   varchar(100) not null,
    description            varchar(100) not null,
    locations              varchar(100) not null,
    sun_level              varchar(100),
    gardening_level        integer,
    forbidden_for_children boolean,
    forbidden_for_animals  boolean,
    min_temperature        integer,
    max_temperature        integer,
    allergies              varchar(100)
);

insert into plant (name, description, locations, sun_level, gardening_level, forbidden_for_children, forbidden_for_animals, min_temperature, max_temperature, allergies) values
('Cactus', 'description', 'INSIDE-GARDEN-TERRACE', 'SUNNY', 1, true, true, 20, 40, '');
