const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    id: String,
    name: String,
    cfa_url: String,
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
})

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;