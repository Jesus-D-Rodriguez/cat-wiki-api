const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    id: String,
    name: String,
    cfa_url: String,
    description: String,
    temperament: String,
    origin: String,
    life_span: String,
    adaptability: String,
    affection_level: String,
    child_friendly: String,
    grooming: String,
    inteligence: String,
    health_issues: String,
    social_needs: String,
    stranger_friendly: String,
    reference_image_id: String,
    image_url: String
})

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;