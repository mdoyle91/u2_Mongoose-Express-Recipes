//Parent of directions, child of types

const db = require("../db");
const { Type, Recipe } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const sushi = await Type.find({ type_name: "Sushi" });
  const tacos = await Type.find({ type_name: "Tacos" });
  const curry = await Type.find({ type_name: "Curry" });
  const pizza = await Type.find({ type_name: "Pizza" });
  const baklava = await Type.find({ type_name: "Baklava" });
  const kimchi = await Type.find({ type_name: "Kimchi" });
  const poutine = await Type.find({ type_name: "Poutine" });
  const paella = await Type.find({ type_name: "Paella" });
  const pho = await Type.find({ type_name: "Pho" });
  const bratwurst = await Type.find({ type_name: "Bratwurst" });

  const recipes = [
    {
      type: sushi[0]._id,
      recipe_name: "Salmon Sushi Roll",
      ingredients: "Rice, Seaweed, Salmon, Soy Sauce",
      is_vegetarian: false,
      is_vegan: false,
      prep_time: 25,
    },
    {
      type: sushi[0]._id,
      recipe_name: "Vegetarian Sushi Roll",
      ingredients: "Rice, Seaweed, Cucumber, Avocado",
      is_vegetarian: true,
      is_vegan: true,
      prep_time: 20,
    },
    {
      type: sushi[0]._id,
      recipe_name: "Tuna Nigiri",
      ingredients: "Rice, Seaweed, Tuna, Wasabi",
      is_vegetarian: false,
      is_vegan: false,
      prep_time: 30,
    },
    {
      type: tacos[0]._id,
      recipe_name: "Chicken Tacos",
      ingredients: "Tortillas, Chicken, Salsa, Cheese",
      is_vegetarian: false,
      is_vegan: false,
      prep_time: 15,
    },
    {
      type: tacos[0]._id,
      recipe_name: "Vegan Tacos",
      ingredients: "Tortillas, Black Beans, Corn, Avocado",
      is_vegetarian: true,
      is_vegan: true,
      prep_time: 20,
    },
    {
      type: tacos[0]._id,
      recipe_name: "Beef Tacos",
      ingredients: "Tortillas, Ground Beef, Lettuce, Cheese",
      is_vegetarian: false,
      is_vegan: false,
      prep_time: 10,
    },
    {
      type: curry[0]._id,
      recipe_name: "Chicken Curry",
      ingredients: "Chicken, Coconut Milk, Curry Paste, Spices",
      is_vegetarian: false,
      is_vegan: false,
      prep_time: 40,
    },
    {
      type: curry[0]._id,
      recipe_name: "Vegan Chickpea Curry",
      ingredients: "Chickpeas, Tomatoes, Spinach, Curry Spices",
      is_vegetarian: true,
      is_vegan: true,
      prep_time: 35,
    },
    {
      type: curry[0]._id,
      recipe_name: "Vegetable Curry",
      ingredients: "Potatoes, Carrots, Peas, Curry Powder",
      is_vegetarian: true,
      is_vegan: true,
      prep_time: 45,
    },
    {
      type: pizza[0]._id,
      recipe_name: "Classic Margherita Pizza",
      ingredients: "Pizza dough, Tomato sauce, Mozzarella, Basil",
      is_vegetarian: true,
      is_vegan: false,
      prep_time: 15,
    },
    {
      type: pizza[0]._id,
      recipe_name: "Pepperoni Pizza",
      ingredients: "Pizza dough, Tomato sauce, Pepperoni, Mozzarella",
      is_vegetarian: false,
      is_vegan: false,
      prep_time: 20,
    },
    {
      type: pizza[0]._id,
      recipe_name: "Vegan Margherita Pizza",
      ingredients: "Pizza dough, Tomato sauce, Vegan mozzarella, Basil",
      is_vegetarian: true,
      is_vegan: true,
      prep_time: 15,
    },
    {
      type: baklava[0]._id,
      recipe_name: "Classic Baklava",
      ingredients: "Phyllo dough, Walnuts, Honey",
      is_vegetarian: true,
      is_vegan: false,
      prep_time: 60,
    },
    {
      type: baklava[0]._id,
      recipe_name: "Walnut Baklava",
      ingredients: "Phyllo dough, Walnuts, Sugar Syrup",
      is_vegetarian: true,
      is_vegan: false,
      prep_time: 50,
    },
    {
      type: baklava[0]._id,
      recipe_name: "Pistachio Baklava",
      ingredients: "Phyllo dough, Pistachios, Rosewater, Honey",
      is_vegetarian: true,
      is_vegan: false,
      prep_time: 55,
    },
    {
      type: kimchi[0]._id,
      recipe_name: "Traditional Kimchi",
      ingredients: "Cabbage, Chili Pepper, Radish, Salt",
      is_vegetarian: true,
      is_vegan: true,
      prep_time: 120,
    },
    {
      type: kimchi[0]._id,
      recipe_name: "Ginger Garlic Kimchi",
      ingredients: "Cabbage, Ginger, Garlic, Fish Sauce",
      is_vegetarian: false,
      is_vegan: false,
      prep_time: 120,
    },
    {
      type: kimchi[0]._id,
      recipe_name: "Scallion Kimchi",
      ingredients: "Cabbage, Chili Paste, Scallions, Salt",
      is_vegetarian: true,
      is_vegan: true,
      prep_time: 120,
    },
    {
      type: poutine[0]._id,
      recipe_name: "Classic Poutine",
      ingredients: "Fries, Cheese Curds, Gravy",
      is_vegetarian: false,
      is_vegan: false,
      prep_time: 25,
    },
    {
      type: poutine[0]._id,
      recipe_name: "Vegan Poutine",
      ingredients: "Fries, Vegan Cheese, Mushroom Gravy",
      is_vegetarian: true,
      is_vegan: true,
      prep_time: 30,
    },
    {
      type: poutine[0]._id,
      recipe_name: "Beef Gravy Poutine",
      ingredients: "Fries, Cheese Curds, Beef Gravy",
      is_vegetarian: false,
      is_vegan: false,
      prep_time: 30,
    },
    {
      type: paella[0]._id,
      recipe_name: "Seafood Paella",
      ingredients: "Rice, Seafood, Saffron, Peas",
      is_vegetarian: false,
      is_vegan: false,
      prep_time: 50,
    },
    {
      type: paella[0]._id,
      recipe_name: "Vegetable Paella",
      ingredients: "Rice, Bell Peppers, Zucchini, Saffron",
      is_vegetarian: true,
      is_vegan: true,
      prep_time: 45,
    },
    {
      type: paella[0]._id,
      recipe_name: "Chicken Paella",
      ingredients: "Rice, Chicken, Peppers, Saffron",
      is_vegetarian: false,
      is_vegan: false,
      prep_time: 60,
    },
    {
      type: pho[0]._id,
      recipe_name: "Beef Pho",
      ingredients: "Beef Broth, Rice Noodles, Herbs, Lime",
      is_vegetarian: false,
      is_vegan: false,
      prep_time: 45,
    },
    {
      type: pho[0]._id,
      recipe_name: "Vegan Pho",
      ingredients: "Vegetable Broth, Tofu, Rice Noodles, Herbs",
      is_vegetarian: true,
      is_vegan: true,
      prep_time: 40,
    },
    {
      type: pho[0]._id,
      recipe_name: "Chicken Pho",
      ingredients: "Chicken Broth, Rice Noodles, Bean Sprouts, Lime",
      is_vegetarian: false,
      is_vegan: false,
      prep_time: 50,
    },
    {
      type: bratwurst[0]._id,
      recipe_name: "Classic Bratwurst",
      ingredients: "Bratwurst, Mustard, Sauerkraut",
      is_vegetarian: false,
      is_vegan: false,
      prep_time: 20,
    },
    {
      type: bratwurst[0]._id,
      recipe_name: "Vegan Bratwurst",
      ingredients: "Vegan Sausage, Mustard, Pretzel Bun",
      is_vegetarian: true,
      is_vegan: true,
      prep_time: 20,
    },
    {
      type: bratwurst[0]._id,
      recipe_name: "Bratwurst with Onions",
      ingredients: "Bratwurst, Mustard, Sautéed Onions, Potato Salad",
      is_vegetarian: false,
      is_vegan: false,
      prep_time: 25,
    },
  ];

  await Recipe.insertMany(recipes);
  console.log("Created recipes in types!");
};

const run = async () => {
  await main();
  db.close();
};

run();
