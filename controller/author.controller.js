const Author = require("../model/author.model")

const createAuthor = async (req, res) => {

try {
    const author = await Author.create(req.body)
    res.status(201).json(author)
} catch (error) {
    res.status(400).json({
        message: error.message ? error.message: "Internal server error"
    })
}
    
} 



const getAuthor = async (req, res) => {
    try {
        const author = await Author.find();
        res.json(author);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



const getUserById = async (req, res) =>{
    try {
        const {id} = req.params;
        const user = await Author.findById(id);
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateAuthorById = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await Author.findByIdAndUpdate(id, req.body, {new: true})
        console.log(user);
        if(!user) {
            return res.status(404).json({message: "Author does not exist"})
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteAuthorById = async (req, res)=> {
    try {
        const {id} = req.params;
        const user = await Author.findByIdAndDelete(id)
        console.log(user);
        if(!user) {
            return res.status(404).json({message: "Author does not exist"})
        }
        res.status(204).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getAuthor,
    createAuthor,
    getUserById,
    updateAuthorById,
    deleteAuthorById
}