const Food = require('../models/foodModel');

class FoodService {
    static async getAllFoods() {
        return await Food.find();
    }

    static async getFoodById(id) {
        return await Food.findById(id);
    }

    static async createFood(data) {
        const food = new Food(data);
        return await food.save();
    }

    static async updateFood(id, data) {
        return await Food.findByIdAndUpdate(id, data, { new: true });
    }

    static async deleteFood(id) {
        return await Food.findByIdAndDelete(id);
    }
}

module.exports = FoodService;
