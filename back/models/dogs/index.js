const { all, one, eliminateDog, showDog, updateDog, showMed, showFood } = require('./queries')


const showAll = (db) => async () => {
    try {

        const response = await db.query(all())  
        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}


const showOne = (db) => async (selectDog) => {
    
    try {

        const response = await db.maybeOne(one(selectDog))  
        return {
            ok: true,
            response: response
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}

const eraseDog = (db) => async (elim) => {
    try {

        const response = await db.query(eliminateDog(elim))  
        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}

const postDog = (db) => async (newD) => {
    try {

        const response = await db.query(showDog(newD.dogname, newD.chenil, 
            newD.gender, newD.takesmeds, newD.specialfood, newD.eatbehavior, 
            newD.castrated, newD.dogname1, newD.foodname, newD.dogname2, newD.medname))  
        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}

const changeDog = (db) => async (dog, newD) => {
    try {

        const response = await db.query(updateDog(dog, newD.chenil, 
            newD.takesmeds, newD.specialfood, newD.eatbehavior, newD.castrated))  
        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}

const postMed = (db) => async (dog, med) => {
    try {

        const response = await db.query(showMed(dog, med))  
        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}

const postFood = (db) => async (dog, food) => {
    try {

        const response = await db.query(showFood(dog, food))  
        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}


module.exports = {
    showAll,
    showOne,
    eraseDog,
    postDog,
    changeDog,
    postMed,
    postFood,
    
}