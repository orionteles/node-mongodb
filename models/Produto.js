const mongoose = require('mongoose')
const { IngredienteSchema } = require('./Ingrediente')

const schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true
    },
    preco: {
        type: Number,
        default: 0,
        min: [0, 'Mais fácil'],
        match: /^\d+(\.\d{1,2})?$/,
    },
    tamanho: String,
    tipo: {
        type: String,
        enum: ["Bebidas", "Pizzas", "Massas", "Sobremesas"]
    },
    ingredientes: [String]
})

const Produto = mongoose.model('Produto', schema)

module.exports = Produto