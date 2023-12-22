const { model, Schema } = require("mongoose");

const TaskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    },
    task_des: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Tasks = model("Tasks", TaskSchema)

module.exports = Tasks;