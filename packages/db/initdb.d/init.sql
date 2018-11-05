-- https://blog.cloudboost.io/postgresql-and-graphql-2da30c6cde26
-- https://gist.github.com/vrulevskyi/307b08abddc9568cf8f9c1b429c1ab56

CREATE TABLE people (
    id              serial PRIMARY KEY,
    firstname       varchar(40) NOT NULL,
    lastname        varchar(40) NOT NULL
);

CREATE TABLE emails (
    id          serial PRIMARY KEY,
    email       varchar(256) NOT NULL,
    person      integer REFERENCES people (id),
    “primary”   boolean DEFAULT false
);

CREATE TABLE contact (
    id          serial PRIMARY KEY,
    name        varchar(256) NOT NULL
);

INSERT INTO contact (name) VALUES ('Marcin');
INSERT INTO contact (name) VALUES ('Wojtek');
INSERT INTO contact (name) VALUES ('Michał');
INSERT INTO contact (name) VALUES ('Grzesiek');
