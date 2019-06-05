function createRectangle(width, height) {
	var square = [];
  	for (var i=0;i<height;i++){
    	square.push(createLine(width));
    }
  	return square;
}