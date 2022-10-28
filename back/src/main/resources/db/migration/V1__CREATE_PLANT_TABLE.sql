create table plant
(
    id                     serial primary key,
    name                   varchar(100) not null,
    description            varchar(1000) not null,
    locations              varchar(100) not null,
    sun_level              varchar(100),
    gardening_level        integer,
    forbidden_for_children boolean,
    forbidden_for_animals  boolean,
    temperature            varchar(100),
    image                  varchar(200),
    size                   integer
);
