"use strict";

let movies = [
    {
        name: "Twister",
        description: "Epic action disaster film",
        yearReleased: 1996,
        rating: "PG-13",
        cast: ["Bill Paxton", "Helen Hunt"]
    },
    {
        name: "Toy Story 4",
        description: "Inanimate objects running around",
        yearReleased: 2019,
        rating: "G",
        cast: ["Tom Hanks", "Tim Allen"]
    },
    {
        name: "Mulan",
        description: "Has a dragon",
        yearReleased: 1998,
        rating: "G",
        cast: ["Ming-Na Wen", "Eddie Murphy"]
    },
    {
        name: "Jurassic Park",
        description: "Has dinosaurs",
        yearReleased: 1993,
        rating: "PG-13",
        cast: ["Sam Neill", "Laura Dern"]
    },
    {
        name: "Avengers Endgame",
        description: "Epic action disaster film",
        yearReleased: 2019,
        rating: "PG-13",
        cast: ["Robert Downey Jr.", "Chris Evans"]
    },
    {
        name: "Frozen",
        description: "Chilling Story",
        yearReleased: 2013,
        rating: "PG",
        cast: ["Kristen Bell", "Idina Menzel"]
    },
]


for (let {name: n, yearReleased: y} of movies){
    console.log("Name: " + n + ", Year: " + y)
}