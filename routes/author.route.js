const express = require("express")

const { createAuthor, getAuthor, getUserById, updateAuthorById, deleteAuthorById } = require("../controller/author.controller")

const router = express.Router()

router.route('/').post(createAuthor).get(getAuthor)
router.route('/:id').get(getUserById).patch(updateAuthorById).delete(deleteAuthorById)

module.exports = router