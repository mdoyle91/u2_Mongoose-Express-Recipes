//Child of recipes
const db = require("../db");
const { Recipe, Direction } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const salmonSushiDirections = await Recipe.find({
    recipe_name: "Salmon Sushi Roll",
  });
  console.log(salmonSushiDirections);
  const vegSushiDirections = await Recipe.find({
    recipe_name: "Vegetarian Sushi Roll",
  });
  const tunaNigiriDirections = await Recipe.find({
    recipe_name: "Tuna Nigiri",
  });
  const chickenTacoDirections = await Recipe.find({
    recipe_name: "Chicken Tacos",
  });
  const veganTacoDirections = await Recipe.find({ recipe_name: "Vegan Tacos" });
  const beefTacoDirections = await Recipe.find({ recipe_name: "Beef Tacos" });
  const chickenCurryDirections = await Recipe.find({
    recipe_name: "Chicken Curry",
  });
  const veganChickpeaCurryDirections = await Recipe.find({
    recipe_name: "Vegan Chickpea Curry",
  });
  const vegetableCurryDirections = await Recipe.find({
    recipe_name: "Vegetable Curry",
  });
  const margheritaPizzaDirections = await Recipe.find({
    recipe_name: "Classic Margherita Pizza",
  });
  const pepperoniPizzaDirections = await Recipe.find({
    recipe_name: "Pepperoni Pizza",
  });
  const veganPizzaDirections = await Recipe.find({
    recipe_name: "Vegan Margherita Pizza",
  });
  const classicBaklavaDirections = await Recipe.find({
    recipe_name: "Classic Baklava",
  });
  const walnutBaklavaDirections = await Recipe.find({
    recipe_name: "Walnut Baklava",
  });
  const pistachioBaklavaDirections = await Recipe.find({
    recipe_name: "Pistachio Baklava",
  });
  const traditionalKimchiDirections = await Recipe.find({
    recipe_name: "Traditional Kimchi",
  });
  const gingerGarlicKimchiDirections = await Recipe.find({
    recipe_name: "Ginger Garlic Kimchi",
  });
  const scallionKimchiDirections = await Recipe.find({
    recipe_name: "Scallion Kimchi",
  });
  const classicPoutineDirections = await Recipe.find({
    recipe_name: "Classic Poutine",
  });
  const veganPoutineDirections = await Recipe.find({
    recipe_name: "Vegan Poutine",
  });
  const beefGravyPoutineDirections = await Recipe.find({
    recipe_name: "Beef Gravy Poutine",
  });
  const seafoodPaellaDirections = await Recipe.find({
    recipe_name: "Seafood Paella",
  });
  const vegetablePaellaDirections = await Recipe.find({
    recipe_name: "Vegetable Paella",
  });
  const chickenPaellaDirections = await Recipe.find({
    recipe_name: "Chicken Paella",
  });
  const beefPhoDirections = await Recipe.find({ recipe_name: "Beef Pho" });
  const veganPhoDirections = await Recipe.find({ recipe_name: "Vegan Pho" });
  const chickenPhoDirections = await Recipe.find({
    recipe_name: "Chicken Pho",
  });
  const classicBratwurstDirections = await Recipe.find({
    recipe_name: "Classic Bratwurst",
  });
  const veganBratwurstDirections = await Recipe.find({
    recipe_name: "Vegan Bratwurst",
  });
  const bratwurstWithOnionsDirections = await Recipe.find({
    recipe_name: "Bratwurst with Onions",
  });

  const directions = [
    {
      recipe: salmonSushiDirections[0]._id,
      directions:
        "Cook rice. Layer seaweed, rice, and salmon. Roll tightly and slice. Serve with soy sauce.",
      materials: "Sushi rolling mat, Knife, Rice cooker",
    },
    {
      recipe: vegSushiDirections[0]._id,
      directions:
        "Cook rice. Layer seaweed, rice, cucumber, and avocado. Roll tightly and slice.",
      materials: "Sushi rolling mat, Knife, Rice cooker",
    },
    {
      recipe: tunaNigiriDirections[0]._id,
      directions:
        "Shape cooked rice into small mounds. Place tuna on top. Serve with soy sauce and wasabi.",
      materials: "Knife, Cutting board",
    },
    {
      recipe: chickenTacoDirections[0]._id,
      directions:
        "Grill chicken, chop into small pieces. Warm tortillas. Add salsa, chicken, and cheese.",
      materials: "Grill, Knife, Tortilla warmer",
    },
    {
      recipe: veganTacoDirections[0]._id,
      directions:
        "Warm tortillas. Add black beans, corn, avocado, and salsa. Serve with lime wedges.",
      materials: "Tortilla warmer, Knife",
    },
    {
      recipe: beefTacoDirections[0]._id,
      directions:
        "Cook ground beef. Warm tortillas. Add beef, lettuce, and cheese.",
      materials: "Skillet, Knife",
    },
    {
      recipe: chickenCurryDirections[0]._id,
      directions:
        "Cook chicken with curry paste and spices. Add coconut milk and simmer.",
      materials: "Pan, Spoon",
    },
    {
      recipe: veganChickpeaCurryDirections[0]._id,
      directions:
        "Cook chickpeas in a curry sauce made with tomatoes and spices. Add spinach at the end.",
      materials: "Pot, Spoon",
    },
    {
      recipe: vegetableCurryDirections[0]._id,
      directions:
        "Boil potatoes and carrots. Add peas and curry powder. Simmer until cooked.",
      materials: "Pot, Knife",
    },
    {
      recipe: margheritaPizzaDirections[0]._id,
      directions:
        "Spread tomato sauce on dough. Add mozzarella and basil. Bake in the oven.",
      materials: "Oven, Pizza stone",
    },
    {
      recipe: pepperoniPizzaDirections[0]._id,
      directions:
        "Spread tomato sauce on dough. Add pepperoni and mozzarella. Bake in the oven.",
      materials: "Oven, Pizza stone",
    },
    {
      recipe: veganPizzaDirections[0]._id,
      directions:
        "Spread tomato sauce on dough. Add vegan mozzarella and basil. Bake in the oven.",
      materials: "Oven, Pizza stone",
    },
    {
      recipe: classicBaklavaDirections[0]._id,
      directions:
        "Layer phyllo dough with walnuts. Drizzle with honey and bake.",
      materials: "Baking tray, Oven",
    },
    {
      recipe: walnutBaklavaDirections[0]._id,
      directions:
        "Layer phyllo dough with walnuts and sugar syrup. Bake until golden brown.",
      materials: "Baking tray, Oven",
    },
    {
      recipe: pistachioBaklavaDirections[0]._id,
      directions:
        "Layer phyllo dough with pistachios. Add rosewater and bake. Drizzle with honey.",
      materials: "Baking tray, Oven",
    },
    {
      recipe: traditionalKimchiDirections[0]._id,
      directions:
        "Salt the cabbage and let it ferment. Add chili pepper and radish. Ferment for 24 hours.",
      materials: "Large bowl, Fermenting jar",
    },
    {
      recipe: gingerGarlicKimchiDirections[0]._id,
      directions:
        "Salt the cabbage. Add ginger, garlic, and fish sauce. Ferment for 24 hours.",
      materials: "Large bowl, Fermenting jar",
    },
    {
      recipe: scallionKimchiDirections[0]._id,
      directions:
        "Prepare cabbage with chili paste and scallions. Let it ferment for 24 hours.",
      materials: "Large bowl, Fermenting jar",
    },
    {
      recipe: classicPoutineDirections[0]._id,
      directions:
        "Cook fries. Layer cheese curds on top. Pour hot gravy over fries and serve.",
      materials: "Frying pan, Saucepan",
    },
    {
      recipe: veganPoutineDirections[0]._id,
      directions:
        "Cook fries. Layer vegan cheese on top. Pour mushroom gravy and serve.",
      materials: "Frying pan, Saucepan",
    },
    {
      recipe: beefGravyPoutineDirections[0]._id,
      directions:
        "Cook fries. Layer cheese curds on top. Pour beef gravy over fries and serve.",
      materials: "Frying pan, Saucepan",
    },
    {
      recipe: seafoodPaellaDirections[0]._id,
      directions:
        "Cook rice with saffron. Add seafood and peas. Simmer until seafood is cooked.",
      materials: "Large pan, Stirring spoon",
    },
    {
      recipe: vegetablePaellaDirections[0]._id,
      directions:
        "Cook rice with saffron. Add bell peppers, zucchini, and peas. Simmer until cooked.",
      materials: "Large pan, Stirring spoon",
    },
    {
      recipe: chickenPaellaDirections[0]._id,
      directions:
        "Cook rice with saffron. Add chicken and peppers. Simmer until chicken is done.",
      materials: "Large pan, Stirring spoon",
    },
    {
      recipe: beefPhoDirections[0]._id,
      directions:
        "Prepare beef broth. Cook rice noodles and herbs. Add beef and lime to the broth.",
      materials: "Large pot, Strainer",
    },
    {
      recipe: veganPhoDirections[0]._id,
      directions:
        "Prepare vegetable broth. Cook tofu, rice noodles, and herbs. Serve with lime.",
      materials: "Large pot, Strainer",
    },
    {
      recipe: chickenPhoDirections[0]._id,
      directions:
        "Prepare chicken broth. Cook rice noodles and add chicken and bean sprouts.",
      materials: "Large pot, Strainer",
    },
    {
      recipe: classicBratwurstDirections[0]._id,
      directions:
        "Grill bratwurst sausages. Serve with mustard and sauerkraut on a bun.",
      materials: "Grill, Tongs",
    },
    {
      recipe: veganBratwurstDirections[0]._id,
      directions:
        "Grill vegan bratwurst. Serve with mustard and sauerkraut on a bun.",
      materials: "Grill, Tongs",
    },
    {
      recipe: bratwurstWithOnionsDirections[0]._id,
      directions:
        "Grill bratwurst. Sauté onions and serve on top of the sausages.",
      materials: "Grill, Pan",
    },
  ];

  await Direction.insertMany(directions);
  console.log("Created directions for recipe!");
};

const run = async () => {
  await main();
  db.close();
};

run();
