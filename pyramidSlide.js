 function myFunction(){
    // just so we know we're here
    console.log("someone invoked the myFunction()");
    
    var height = document.getElementById("pyramidHeight").value;

    var brick = document.getElementById("brickpyramid").value;
    document.getElementById("slider").innerHTML = height;
    drawPyramid(height, brick);  
 }


function drawPyramid(height, brick) {
    // before drawing, clear the old content
    document.getElementById("pyramid").innerHTML = "";
    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "&nbsp";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick;
        }

       // create a text element with the string of characters
       textElem = document.createTextNode(rowStr);

       // create a <p> element with the text inside
       rowElem = document.createElement("p");
       //rowElem.appendChild(textElem);
       rowElem.innerHTML = rowStr;
       // insert the paragraph as a child of the container <div>
       document.getElementById("pyramid").appendChild(rowElem);
   }
}