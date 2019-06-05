describe("The createSquareOutline function" , function() {

	it("should be able to create a square outline of 5x5", function(){
		var result = createSquareOutline(5);
	
		assert.equal("* * * * * ", result[0]);
		assert.equal("*       * ", result[1]);
		assert.equal("*       * ", result[2]);
		assert.equal("*       * ", result[3]);
		assert.equal("* * * * * ", result[4]);

	});

	it("should be able to create a square outline of 7x7", function(){
		var result = createSquareOutline(7);
	
		assert.equal("* * * * * * * ", result[0]);
		assert.equal("*  		  * ", result[1]);
		assert.equal("*  		  * ", result[2]);
		assert.equal("*  		  *  ", result[3]);
		assert.equal("*  		  *  ", result[4]);
		assert.equal("*  		  *  ", result[5]);
		assert.equal("* * * * * * * ", result[6]);
		
	});

});