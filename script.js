//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

touristSpots.sort( (a,b) => a-b);

let u = document.getElementsByTagName("ul")[0];

for(let i=0;i<touristSpots.length;i++){
  const liElement = document.createElement('li');
  // liElement.textContent = touristSpots[i];
	liElement.innerHTML = touristSpots[i];
  u.appendChild(liElement);
}
