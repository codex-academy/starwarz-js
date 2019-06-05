describe("The createRectangle function" , function() {

	it("should be able to create a rectangle of 5x2", function(){
		var result = createRectangle(5,2);
	
		assert.equal("* * * * * ", result[0]);
		assert.equal("* * * * * ", result[1]);

	});

	it("should be able to create a rectangle of 7x4", function(){
		var result = createRectangle(7,4);
	
		assert.equal("* * * * * * * ", result[0]);
		assert.equal("* * * * * * * ", result[1]);
		assert.equal("* * * * * * * ", result[2]);
		assert.equal("* * * * * * * ", result[3]);
		
	});


});