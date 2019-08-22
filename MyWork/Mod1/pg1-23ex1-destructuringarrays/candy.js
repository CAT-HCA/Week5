"use strict";

let candy = [
	{
		product: "Gummy Worms",
		price: 5.79,
	},
	{
		product: "Plain M&Ms",
		price: 2.89,
	},
	{
		product: "Twizzlers",
		price: 3.49,
	},
	{
		product: "Twix",
		price: 5.19,
	},
	{
		product: "Kit Kat",
		price: 5.59,
	},
	{
		product: "Jolly Ranchers",
		price: 4.79,
	},
	{
		product: "Taffy",
		price: 6.79,
	},
	{
		product: "Starburst",
		price: 2.99,
	},
	{
		product: "Snickers",
		price: 4.19,
	},
	{
		product: "Dum Dums",
		price: 1.99,
	},
];


for(let i = 0; i > candy.length; i++){
    let obj1 = candy[i];
    let obj2 = candy[i+1];
    comparePrices(obj1, obj2);
}

let comparePrices = (obj1, obj2) => {
    if (obj1.price > obj2.price){
        return 1
    }
    return -1;
}

let sortedArray = candy.sort(comparePrices)
    console.log(sortedArray);

    let a,b,c;
    [a,b,c] = [sortedArray[0], sortedArray[1], sortedArray[2]]
    
    console.log("The 3 cheapest candies are: " + a.product + ", " +  b.product + ", " + c.product)
