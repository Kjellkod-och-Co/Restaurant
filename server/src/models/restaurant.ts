import { model, Schema, Document } from "mongoose";

interface IRestaurant extends Document {
  name: string;
  iso2code: string;
}

const RestaurantSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  iso2code: {
    type: String,
  },
});

const RestaurantModel = model<IRestaurant>("Country", RestaurantSchema);

export { RestaurantModel, IRestaurant };
