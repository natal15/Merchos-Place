const { sql } = require('slonik')

//para seleccionar los perros
const all = () => sql.unsafe`
   
        SELECT *
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

module.exports = {
    all,
    one,
            
}