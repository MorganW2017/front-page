var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    created: { type: Number, default: Date.now() },
    boardId: { type: ObjectId, ref: models.board.name, required: true },
    listId: {type: ObjectId, ref: models.list.name, required: true}
});

module.exports = mongoose.model(models.task.name, schema);