const { sql } = require('slonik')

//para seleccionar los perros
const all = () => sql.unsafe`
   
        SELECT dogname
        FROM dogs
        `
//seleccionar un único perro
const one = (selectDog) => sql.unsafe`
   
        SELECT dogs.chenil, dogs.eatbehavior, dogs.castrated, array_agg(meds.medname), foods.foodname
        FROM dogs
        JOIN dogs_meds ON dogs.id = dogs_meds.dogs_meds_id
        JOIN meds ON meds.id = dogs_meds.meds_id
        JOIN dogs_foods ON dogs.id = dogs_foods.dogs_foods_id
        JOIN foods ON foods.id = dogs_foods.foods_id
        WHERE dogs.dogname = ${selectDog}
        GROUP BY dogs.chenil, dogs.eatbehavior, dogs.castrated, foods.foodname
        `
const eliminateDog = (elim) => sql.unsafe`
       
        DELETE FROM Dogs
        WHERE dogname = ${elim}
        `

const showDog = (dogname, chenil, gender, takesmeds,
        specialfood, eatbehavior, castrated, dogname1, foodname, dogname2, medname) => sql.unsafe`
        
        INSERT INTO Dogs
        (dogname, chenil, gender, takesmeds,
        specialfood, eatbehavior, castrated)
        VALUES (${dogname}, ${chenil}, ${gender}, ${takesmeds}, 
        ${specialfood}, ${eatbehavior}, ${castrated})
        `   

const updateDog = (dogname, chenil, takesmeds,
        specialfood, eatbehavior, castrated) => sql.unsafe`
                
        UPDATE Dogs 
        SET chenil = ${chenil}, takesmeds = ${takesmeds}, specialfood = ${specialfood}, 
        eatbehavior = ${eatbehavior}, castrated = ${castrated}
        WHERE dogname = ${dogname}
        `

const showMed = (dog, med) => sql.unsafe`
            
        INSERT INTO dogs_meds (dogs_meds_id, meds_id)
        VALUES (
        (SELECT id FROM dogs WHERE dogname = ${dog}),
        (SELECT id FROM meds WHERE medname = ${med})
        );
        `

const showFood = (dog, food) => sql.unsafe`
        
        INSERT INTO dogs_foods (dogs_foods_id, foods_id)
        VALUES (
        (SELECT id FROM dogs WHERE dogname = ${dog}),
        (SELECT id FROM foods WHERE foodname = ${food})
        );
        `

module.exports = {
        all,
        one,
        eliminateDog,
        showDog,
        updateDog,
        showMed,
        showFood,
}