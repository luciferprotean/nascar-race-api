const express = require("express");
const driverData = require("./driverNames.json"); // Works directly

const app = express();
const PORT = 3000;
var numberList;
var weather = "sunny";
var timeOfDay = "night";
var track = "Daytona";
var winners;

app.get("/racedata", (req, res) => {
    getRandomDriverNumbers();
    selectWinnerNumbers(numberList);
    res.json({"weather": weather, "timeOfDay" : timeOfDay, "track" : track, "startingOrder":numberList, "winners": winners});
});

function getRandomDriverNumbers(){
  const uniqueNumbers = new Set(); // Use a Set to ensure uniqueness
  const maxCars = 16;
  const min = 0;
  const max = 99;

  while (uniqueNumbers.size < maxCars) {
    // Generate a random integer within the specified range (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(randomNumber); // Add to the Set; duplicates are automatically ignored
  }
  numberList = Array.from(uniqueNumbers);
  return numberList;
}

function selectWinnerNumbers(numberList){
    var newList = Array.from(numberList);
    var shuffled = newList.sort(() => 0.5 - Math.random());
    winners = shuffled.slice(0, 3);
    return winners;
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));