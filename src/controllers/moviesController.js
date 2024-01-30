const db = require("../database/models")

module.exports = {
    list : (req, res) => {

        db.Movie.findAll()
            .then(movies => {
                return res.render("moviesList", {
                    movies
                })
            })

            .catch(error => console.log(error))

    },
    new :(req, res) => {
        db.Movie.findall({
            order :[
                ['release_date','DESC']
            ],
            limit : 5
        })
        .then(movies =>{
            return res.render('newestMovies')
        })
    },

    detail : (req,res)  => {
        const  {id} = req.params;
        db.Movie.findByPK(id)
        .then((movie) => {
            return res.render('moviesDetail', {
                movie
            })
        })
        .catch(error => console.log(error))
       
    }
}