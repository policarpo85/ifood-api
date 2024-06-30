const FoodService = require('../services/foodService');

class FoodController {
    static async getAllFoods(req, res) {
        try {
            const foods = await FoodService.getAllFoods();
            res.status(200).json(foods);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getFoodById(req, res) {
        try {
            const food = await FoodService.getFoodById(req.params.id);
            if (food) {
                res.status(200).json(food);
            } else {
                res.status(404).json({ message: 'Food not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async createFood(req, res) {
        try {
            const food = await FoodService.createFood(req.body);
            res.status(201).json(food);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateFood(req, res) {
        try {
            const food = await FoodService.updateFood(req.params.id, req.body);
            if (food) {
                res.status(200).json(food);
            } else {
                res.status(404).json({ message: 'Food not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteFood(req, res) {
        try {
            const food = await FoodService.deleteFood(req.params.id);
            if (food) {
                res.status(200).json({ message: 'Food deleted' });
            } else {
                res.status(404).json({ message: 'Food not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = FoodController;
