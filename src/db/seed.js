const sequelize = require("../config/connection")

const User = require("../models/User")
const Game = require("../models/Game")
const Comment = require("../models/Comment")
const Rating = require("../models/Rating")

const users = require("./users.json")
const comments = require("./comments.json")
const ratings = require("./ratings.json")
const games = require("./games.json")

const seed = async() => {
    await sequelize.sync({
        force: true,
    })

    await User.bulkCreate(users)
    console.log("Users have been seeded")

    await Game.bulkCreate(games)
    console.log("Games have been seeded")

    await Comment.bulkCreate(comments)
    console.log("Comments have been seeded")

    await Rating.bulkCreate(ratings)
    console.log("Ratings have been seeded")

    process.exit(0)
}

seed()
