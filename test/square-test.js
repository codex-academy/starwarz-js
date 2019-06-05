describe("The createSquare function" , function() {

	it("should be able to create a square of 5x5", function(){
		var result = createSquare(5);
	
		assert.equal("* * * * * ", result[0]);
		assert.equal("* * * * * ", result[1]);
		assert.equal("* * * * * ", result[2]);
		assert.equal("* * * * * ", result[3]);
		assert.equal("* * * * * ", result[4]);

	});

	it("should be able to create a square of 7x7", function(){
		var result = createSquare(7);
	
		assert.equal("* * * * * * * ", result[0]);
		assert.equal("* * * * * * * ", result[1]);
		assert.equal("* * * * * * * ", result[2]);
		assert.equal("* * * * * * * ", result[3]);
		assert.equal("* * * * * * * ", result[4]);
		assert.equal("* * * * * * * ", result[5]);
		assert.equal("* * * * * * * ", result[6]);
		
	});


});