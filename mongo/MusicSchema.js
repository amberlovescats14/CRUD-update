const mongoose = require('mongoose')
const Schema = mongoose.Schema

const musicSchema = new Schema({
  artist: {
    type: String,
    required: true,
    trim: true,
  },
  song: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  year: {
    type: Number,
    required: true,
    trim: true,
    minlength: 4
  },
  genre: {
    type: String
  }
}, {
  timestamps: true
})

const Music = mongoose.model('Music', musicSchema)
module.exports = Music