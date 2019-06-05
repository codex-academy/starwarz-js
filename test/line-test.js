describe("The line function" , function() {

	it("should be able to create a line of 5 long", function(){
		assert.equal("* * * * * ", createLine(5));
	});

	it("should be able to create a line of 7 long", function(){
		assert.equal("* * * * * * * ", createLine(7));
	});


});