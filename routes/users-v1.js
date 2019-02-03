const express = require('express')
const router = express.Router()
const uuidv1 = require('uuid/v1');

const users = [
    {
        id: '45745c60-7b1a-11e8-9c9c-2d42b21b1a3e',
        name: 'Pedro Ramirez',
        login: 'pedro',
        age: 44
    }
]

/* GET a specific user by id */
router.get('/:id', function (req, res, next) {
    const id = req.params.id
    if (id) {
        const usersFound = users.filter((user) => user.id === id)
        if (usersFound.length === 1) {
            res.json(usersFound[0])
        } else {
            res
                .status(404)
                .json({message: `User not found with id ${id}`})
        }
    } else {
        res
            .status(400)
            .json({message: `Wrong parameter`})
    }
})

/* Add a new user. */
router.post('/', function (req, res, next) {
    const newUser = req.body

    // Control data to patch
    if (validateUser(newUser)) {
        newUser.id = uuidv1()
        users.push(newUser)
        req
            .res
            .status(201)
            .send(newUser)
    } else {
        res
            .status(400)
            .json({message: `Invalid user data`})
    }
})

/* Update a specific user */
router.patch('/:id', function (req, res, next) {
    const id = req.params.id
    const newUserProperties = req.body

    if (id && newUserProperties) {
        const usersFound = users.filter((user) => user.id === id)

        if (usersFound.length === 1) {
            const oldUser = usersFound[0]

            const newUser = {
                ...oldUser,
                ...newUserProperties
            }

            // Control data to patch
            if (validateUser(newUser)) {
                // Object.assign permet d'éviter la suppression de l'ancien élément puis l'ajout
                // du nouveau Il assigne à l'ancien objet toutes les propriétés du nouveau
                Object.assign(oldUser, newUser)
                res
                    .status(200)
                    .json(newUser)
            } else {
                res
                    .status(400)
                    .json({message: `Invalid user data`})
            }
        } else {
            res
                .status(404)
                .json({message: `User not found with id ${id}`})
        }
    } else {
        res
            .status(400)
            .json({message: `Wrong parameter`})
    }
})

/* REMOVE a specific user by id */
router.delete('/:id', function (req, res, next) {
    const id = req.params.id
    if (id) {
        // findIndex permet de retrouver la position d'un élément dans un tableau
        const indexFound = users.findIndex((user) => user.id === id)
        if (indexFound > -1) {
            users.splice(indexFound, 1)
            res
                .status(200)
                .end()
        } else {
            res
                .status(404)
                .json({message: `User not found with id ${id}`})
        }
    } else {
        res
            .status(400)
            .json({message: `Wrong parameter`})
    }
})

/* GET all users */
router.get('/', function (req, res, next) {
    res.json(users)
})

function validateUser(user) {
    let result = true
    if (user && user.id && user.login && user.name) {
        result = true
    }
    return result
}

module.exports = router
