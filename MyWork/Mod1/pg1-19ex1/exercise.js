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
		product: "Dum Dum",
		price: 1.99,
	},
];

let someCandy = candy.filter(c => c.price < 5);
if (someCandy.length != 0) {
	for (let i = 0; i < someCandy.length; i++) {
		console.log(someCandy[i].product);
	}
} else {
	console.log("null");
}

let m = candy.find(m => m.product == "Snickers");
if(m == null)
{
    console.log("We do not carry this item");
}
else
{console.log(m.price)}