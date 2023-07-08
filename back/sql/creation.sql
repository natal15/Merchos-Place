DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS dogs;
DROP TABLE IF EXISTS meds;
DROP TABLE IF EXISTS foods;
DROP TYPE IF EXISTS types;
DROP TYPE IF EXISTS classes;

DROP EXTENSION IF EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE types AS ENUM (
    'bones', 'digest', 'vitamins', 'leishmaniasis', 'dermatologic',
    'cardiac', 'nomeds'
);

CREATE TYPE classes AS ENUM (
    'standard', 'diet', 'allergic', 'digestive', 'puppy', 'soft'
);

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    nickname TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS dogs (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    dogname TEXT NOT NULL,
    chenil VARCHAR NOT NULL,
    gender TEXT NOT NULL,
    takesmeds TEXT NOT NULL,
    specialfood TEXT NOT NULL,
    eatbehavior TEXT NOT NULL,
    castrated TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS meds (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    medname types NOT NULL
);

CREATE TABLE IF NOT EXISTS foods (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    foodname classes NOT NULL
);

CREATE TABLE IF NOT EXISTS dogs_meds (
  dogs_meds_id uuid REFERENCES dogs (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  meds_id uuid REFERENCES meds (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  CONSTRAINT dogs_meds_id PRIMARY KEY (dogs_meds_id, meds_id)
);

CREATE TABLE IF NOT EXISTS dogs_foods (
  dogs_foods_id uuid REFERENCES dogs (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  foods_id uuid REFERENCES foods (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  CONSTRAINT dogs_foods_id PRIMARY KEY (dogs_foods_id, foods_id)
);

