-- Dogs table

INSERT INTO dogs (
    dogname, chenil, gender, takesmeds, specialfood, eatbehavior, castrated 
) VALUES (
    'Beethoven', 25, 'male', 'yes', 'yes', 'supervise', 'yes'
);



-- Meds data

INSERT INTO meds (
  medname
) VALUES (
  'vitamins'::types
);

-- Foods data

INSERT INTO foods (
  foodname
) VALUES (
  'soft'::classes
);

-- Link dogs_meds

INSERT INTO dogs_meds (
  dogs_meds_id, meds_id
) VALUES (
  (SELECT id FROM dogs WHERE dogname LIKE 'Beethoven'),
  (SELECT id FROM meds WHERE medname = 'vitamins')
);


-- Link dogs_foods

INSERT INTO dogs_foods (
  dogs_foods_id, foods_id
) VALUES (
  (SELECT id FROM dogs WHERE dogname LIKE 'Beethoven'),
  (SELECT id FROM foods WHERE foodname = 'soft')
);