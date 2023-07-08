-- Dogs table

INSERT INTO dogs (
    dogname, chenil, gender, takesmeds, specialfood, eatbehavior, castrated 
) VALUES (
    'Beethoven', 25, 'male', 'yes', 'yes', 'supervise', 'yes'
);

INSERT INTO dogs (
    dogname, chenil, gender, takesmeds, specialfood, eatbehavior, castrated 
) VALUES (
    'Rollo', 60, 'male', 'no', 'no', 'supervise', 'yes'
);

INSERT INTO dogs (
    dogname, chenil, gender, takesmeds, specialfood, eatbehavior, castrated 
) VALUES (
    'Frida', 58, 'female', 'no', 'yes', 'supervise', 'yes'
);

INSERT INTO dogs (
    dogname, chenil, gender, takesmeds, specialfood, eatbehavior, castrated 
) VALUES (
    'Bruno', 15, 'male', 'no', 'no', 'alone', 'yes'
);

INSERT INTO dogs (
    dogname, chenil, gender, takesmeds, specialfood, eatbehavior, castrated 
) VALUES (
    'Aron', 0, 'male', 'yes', 'no', 'alone', 'yes'
);

-- Meds data

INSERT INTO meds (
  medname
) VALUES (
  'vitamins'::types
);

INSERT INTO meds (
  medname
) VALUES (
  'bones'::types
);

INSERT INTO meds (
  medname
) VALUES (
  'digest'::types
);

INSERT INTO meds (
  medname
) VALUES (
  'dermatologic'::types
);

INSERT INTO meds (
  medname
) VALUES (
  'cardiac'::types
);

INSERT INTO meds (
  medname
) VALUES (
  'leishmaniasis'::types
);

INSERT INTO meds (
  medname
) VALUES (
  'nomeds'::types
);

-- Foods data

INSERT INTO foods (
  foodname
) VALUES (
  'soft'::classes
);

INSERT INTO foods (
  foodname
) VALUES (
  'standard'::classes
);

INSERT INTO foods (
  foodname
) VALUES (
  'diet'::classes
);

INSERT INTO foods (
  foodname
) VALUES (
  'allergic'::classes
);

INSERT INTO foods (
  foodname
) VALUES (
  'puppy'::classes
);

-- Link dogs_meds

INSERT INTO dogs_meds (
  dogs_meds_id, meds_id
) VALUES (
  (SELECT id FROM dogs WHERE dogname LIKE 'Beethoven'),
  (SELECT id FROM meds WHERE medname = 'vitamins')
);

INSERT INTO dogs_meds (
  dogs_meds_id, meds_id
) VALUES (
  (SELECT id FROM dogs WHERE dogname LIKE 'Beethoven'),
  (SELECT id FROM meds WHERE medname = 'dermatologic')
);

INSERT INTO dogs_meds (
  dogs_meds_id, meds_id
) VALUES (
  (SELECT id FROM dogs WHERE dogname LIKE 'Aron'),
  (SELECT id FROM meds WHERE medname = 'bones')
);

INSERT INTO dogs_meds (
  dogs_meds_id, meds_id
) VALUES (
  (SELECT id FROM dogs WHERE dogname LIKE 'Bruno'),
  (SELECT id FROM meds WHERE medname = 'nomeds')
);

INSERT INTO dogs_meds (
  dogs_meds_id, meds_id
) VALUES (
  (SELECT id FROM dogs WHERE dogname LIKE 'Frida'),
  (SELECT id FROM meds WHERE medname = 'nomeds')
);

INSERT INTO dogs_meds (
  dogs_meds_id, meds_id
) VALUES (
  (SELECT id FROM dogs WHERE dogname LIKE 'Rollo'),
  (SELECT id FROM meds WHERE medname = 'nomeds')
);


-- Link dogs_foods

INSERT INTO dogs_foods (
  dogs_foods_id, foods_id
) VALUES (
  (SELECT id FROM dogs WHERE dogname LIKE 'Beethoven'),
  (SELECT id FROM foods WHERE foodname = 'soft')
);

INSERT INTO dogs_foods (
  dogs_foods_id, foods_id
) VALUES (
  (SELECT id FROM dogs WHERE dogname LIKE 'Frida'),
  (SELECT id FROM foods WHERE foodname = 'allergic')
);

INSERT INTO dogs_foods (
  dogs_foods_id, foods_id
) VALUES (
  (SELECT id FROM dogs WHERE dogname LIKE 'Rollo'),
  (SELECT id FROM foods WHERE foodname = 'standard')
);

INSERT INTO dogs_foods (
  dogs_foods_id, foods_id
) VALUES (
  (SELECT id FROM dogs WHERE dogname LIKE 'Bruno'),
  (SELECT id FROM foods WHERE foodname = 'standard')
);

INSERT INTO dogs_foods (
  dogs_foods_id, foods_id
) VALUES (
  (SELECT id FROM dogs WHERE dogname LIKE 'Aron'),
  (SELECT id FROM foods WHERE foodname = 'standard')
);