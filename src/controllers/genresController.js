const db = require("../database/models")

module.exports = {
    listGenres : (req, res) => {

        db.Genre.findAll()
            .then(genres => {
                return res.render("genresList", {
                    genres
                })
            })

            .catch(error => console.log(error))

    }
}