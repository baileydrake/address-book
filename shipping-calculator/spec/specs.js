describe("Package", function () {
  describe("rate", function() {
    it("gives gives the shipping rate based on distance and weight", function() {
      var testRate = Object.create(Package);
      testRate.distance = 200;
      testRate.weight = 2;
      testRate.rate().should.equal(22);
    });
    it("adds $50 when shipped internationally", function() {
      var testRate = Object.create(Package);
      testRate.distance = 200;
      testRate.weight = 2;
      testRate.international = true;
      testRate.rate().should.equal(72);
    });
  });
});
