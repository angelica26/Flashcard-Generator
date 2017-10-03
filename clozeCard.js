function ClozeCard (fullText, cloze) {
    this.fullText = fullText;
    this.cloze = cloze;
  	this.partial = this.fullText.replace(this.cloze, "...");

}

var gouda = new ClozeCard("Gouda is a type of cheese", "cheese");

// console.log(gouda.partial);

module.exports = ClozeCard;