var Triangle = {
  typeTriangle: function() { 
    var result;

    if ((this.sideOne >= (this.sideTwo + this.sideThree)) ||
    (this.sideTwo >= (this.sideOne + this.sideThree)) || 
    (this.sideThree >= (this.sideOne + this.sideTwo)))  {
      return false;
    } else if ((this.sideOne === this.sideTwo) && (this.sideOne === this.sideThree)) {
      result = "Equilateral Triangle";
    } else if ((this.sideOne === this.sideTwo) || (this.sideOne === this.sideThree) || (this.sideTwo === this.sideThree)) {
      result = "Isosceles Triangle";
    } else {
      result = "Scalene Triangle";
    }
    return result;
  }
};

$(document).ready(function() {
  $("form#new-triangle").submit(function(event) {
    event.preventDefault();

    var inputtedSideOne = parseInt($("input#side-one").val());
    var inputtedSideTwo = parseInt($("input#side-two").val());
    var inputtedSideThree = parseInt($("input#side-three").val());
    var newTriangle = Object.create(Triangle);
    var result = (inputtedSideOne + ", " + inputtedSideTwo + ", " + inputtedSideThree);
    newTriangle.sideOne = inputtedSideOne;
    newTriangle.sideTwo = inputtedSideTwo;
    newTriangle.sideThree = inputtedSideThree;


    if (newTriangle.typeTriangle() === "Equilateral Triangle") {
      $("ul#eTriangles").append("<li>" + result + "</li>");
    } else if (newTriangle.typeTriangle() === "Isosceles Triangle") {
      $("ul#iTriangles").append("<li>" + result + "</li>");
    } else if (newTriangle.typeTriangle() === "Scalene Triangle") {
      $("ul#sTriangles").append("<li>" + result + "</li>");
    } else {
      alert("Those side lengths can't make a triangle.");
    };

    this.reset();
  });
});

