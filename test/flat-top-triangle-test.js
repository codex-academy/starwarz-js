describe("The createFlatTopTriangle function" , function() {

	it("should be able to create a Flat Top Triangle of 5 to 1", function(){
		var result = createFlatTopTriangle(5);
		
		assert.equal("* * * * * ", result[0]);
		assert.equal("* * * * ", result[1]);
		assert.equal("* * * ", result[2]);
		assert.equal("* * ", result[3]);
		assert.equal("* ", result[4]);

	});

	it("should be able to create a Flat Top Triangle of 7 to 1", function(){
		var result = createFlatTopTriangle(7);
	
		assert.equal("* * * * * * * ", result[0]);
		assert.equal("* * * * * * ", result[1]);
		assert.equal("* * * * * ", result[2]);
		assert.equal("* * * * ", result[3]);
		assert.equal("* * * ", result[4]);
		assert.equal("* * ", result[5]);
		assert.equal("* ", result[6]);
		
	});


});