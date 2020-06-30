let mongoose = require('mongoose')

let Schema = mongoose.Schema

let GenreSchema = new Schema({
    book: {type: Schema.Types.ObjectId, ref: 'Book', required: true},
    name: {type: String, required: true, minLength: 3, maxLength: 100}
})

// Virtual for Genre's URL
GenreSchema.virtual('url').get(()=>{
    return '/catalog/genre/' + this._id
})

module.exports = mongoose.model('Genre', GenreSchema)