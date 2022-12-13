import { Router } from "express";
import { RestaurantModel, IRestaurant } from "../models/restaurant";

const routes = Router();

routes.get("/", async (req, res) => {
  try {
    const restaurants: IRestaurant[] = await RestaurantModel.find().exec();
    return res.json(restaurants);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

routes.post("/", async (req, res) => {
  try {
    const restaurant: IRestaurant = req.body;

    const restaurantExists = await RestaurantModel.findOne({
      name: restaurant.name,
    }).exec();

    if (restaurantExists) {
      return res
        .status(409)
        .json({ error: "There is already another restaurant with this name" });
    }

    const newrestaurant = await RestaurantModel.create(restaurant);
    return res.status(201).json(newrestaurant);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

export default routes;
