describe("The createTriangle function" , function() {

	it("should be able to create a square of 1 to 5", function(){
		var result = createTriangle(5);
	
		assert.equal("* ", result[0]);
		assert.equal("* * ", result[1]);
		assert.equal("* * * ", result[2]);
		assert.equal("* * * * ", result[3]);
		assert.equal("* * * * * ", result[4]);

	});

	it("should be able to create a square of 1 to 7", function(){
		var result = createTriangle(7);
	
		assert.equal("* ", result[0]);
		assert.equal("* * ", result[1]);
		assert.equal("* * * ", result[2]);
		assert.equal("* * * * ", result[3]);
		assert.equal("* * * * * ", result[4]);
		assert.equal("* * * * * * ", result[5]);
		assert.equal("* * * * * * * ", result[6]);
		
	});


});