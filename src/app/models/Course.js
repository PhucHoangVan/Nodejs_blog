const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, maxlength:255 },
    description: {type: String, maxlength:255 },
    image: {type: String, maxlength:255 },
  });

module.exports = mongoose.model('Course', Course);
