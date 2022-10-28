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
    temperature            varchar(100),
    image                  varchar(200),
    size                   integer
);

insert into plant (name, description, locations, sun_level, gardening_level, forbidden_for_children,
                   forbidden_for_animals, temperature, image, size)
values ('Cactus', 'description', 'INSIDE-GARDEN-TERRACE', 'SUNNY', 1, true, true, 'HOT',
        'https://www.jardiner-malin.fr/wp-content/uploads/2021/12/Cactophile-cactus-succulente.jpg', 1);

insert into plant (name, description, locations, sun_level, gardening_level, forbidden_for_children,
                   forbidden_for_animals, temperature, image, size)
values ('Amaranthacee', 'description', 'GARDEN', 'PARTIAL_SHADE', 1, true, true, 'NORMAL',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Celosia_argentea2.jpg/290px-Celosia_argentea2.jpg',
        1);

insert into plant (name, description, locations, sun_level, gardening_level, forbidden_for_children,
                   forbidden_for_animals, temperature, image, size)
values ('Jasmin', 'description', 'GARDEN', 'SUNNY', 2, false, false, 'HOT',
        'https://www.clematite.net/372-large_default/jasmin-blanc-officinalis.jpg', 1);

insert into plant (name, description, locations, sun_level, gardening_level, forbidden_for_children,
                   forbidden_for_animals, temperature, image, size)
values ('Tomatoes series', 'description', 'GARDEN-TERRACE', 'SUNNY', 2, false, false, 'NORMAL',
        'https://thepracticalplanter.com/wp-content/uploads/2020/08/Tomato-Plant.jpg', 1);
