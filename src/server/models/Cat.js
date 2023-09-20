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
    intelligence: String,
    health_issues: String,
    social_needs: String,
    stranger_friendly: String,
    reference_image_id: String,
    image_url: String,
    images_1: String,
    images_2: String,
    images_3: String,
    images_4: String,
    images_5: String,
    images_6: String,
    images_7: String,
    images_8: String,
    search_count: {
        type: Number,
        default: 0 // Valor inicial en 0
    }
})

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;