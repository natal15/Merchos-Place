const { sql } = require('slonik')

//para seleccionar los perros
const all = () => sql.unsafe`
   
        SELECT *
        FROM dogs
        `
//seleccionar un único perro
const one = (selectDog) => sql.unsafe`
   
        SELECT *
        FROM dogs
        WHERE dogs.dogname = ${selectDog}
        `



module.exports = {
    all,
    one,
            
}