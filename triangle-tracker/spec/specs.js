describe("Triangle", function () {
  describe("typeTriangle", function() {
    it("return Equilateral Triangle if all sides are the same", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.sideOne = 4;
      testTriangle.sideTwo = 4;
      testTriangle.sideThree = 4;
      testTriangle.typeTriangle().should.equal("Equilateral Triangle");
    });
    it("return Isosceles Triangle if two sides are the same", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.sideOne = 5;
      testTriangle.sideTwo = 5;
      testTriangle.sideThree = 3;
      testTriangle.typeTriangle().should.equal("Isosceles Triangle");
    });
    it("return Scalene Triangle if all three sides have diff lengths", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.sideOne = 10;
      testTriangle.sideTwo = 12;
      testTriangle.sideThree = 14;
      testTriangle.typeTriangle().should.equal("Scalene Triangle");
    });
    it("returns false if the sides dont equal a triangle", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.sideOne = 8;
      testTriangle.sideTwo = 2;
      testTriangle.sideThree = 2;
      testTriangle.typeTriangle().should.equal(false);
    });
  });
});
