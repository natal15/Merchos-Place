const { sql } = require('slonik')

const insertUser = (email, nickname, password) => sql.unsafe`
    INSERT INTO users (
        email, nickname, password
    ) VALUES (
        ${email}, ${nickname}, ${password}
    )
`

const selectByEmail = (email) => sql.unsafe`
    SELECT email, nickname, password
    FROM users
    WHERE email LIKE ${email}
`

const selectIdByEmail = (email) => sql.unsafe`
    SELECT id
    FROM users
    WHERE email LIKE ${email}
`

module.exports = {
    insertUser,
    selectByEmail,
    selectIdByEmail,
}