// whenb the factButton is clicked...
$("#factButton").on("click", function() {
	// we generate a random number between 0 and 4 (the number of facts in the booFact)
	var number = Math.floor((Math.random() * booFacts.length));
	// we dispaly the fact from the boofFacts that is in the randome position we just generated.
	$("#factText").text(booFacts[number])
})

var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16", "making him a Pisces, Boo's favourite food is grass", "Boo has released two books" ]

$("#textPink").on("click", function() {
	$("#funText").css("color","pink")
})

$("#textOrange").on("click", function() {
$("#funText").css("color", "orange")
})
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})


$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})