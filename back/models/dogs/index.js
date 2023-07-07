const { all, one } = require('./queries')


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

        const response = await db.query(one(selectDog))  
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
    
}