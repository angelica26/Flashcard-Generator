
function BasicCard (front, back) {
	this.front = front;
	this.back = back;
}

var nj = new BasicCard("What is the capital of New Jersey?","Trenton")

// console.log(nj.front);
module.exports = BasicCard;