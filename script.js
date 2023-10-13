//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

touristSpots.sort( (a,b) => a-b);

let u = document.getElementsByTagName("ul")[0];

for(let i=0;i<touristSpots.length;i++){
	u.InnerHTML += (`<li>${touristSpots[i]}</li>`);
}
