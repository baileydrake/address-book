var Package = {
  rate: function() {
    var distanceCost = (this.distance / 10) * 1;
    var international = document.getElementById("international").checked;
    var result;

    if (international) {
      result = Math.round(distanceCost) + this.weight + 50;
    } else {
      result = Math.round(distanceCost) + this.weight;
    }

    return result;
    
}
};




$(document).ready(function() {
  $("form#new-rate").submit(function(event) {
    event.preventDefault();

    var inputtedDistance = parseInt($("input#new-distance").val());
    var inputtedWeight = parseInt($("input#new-weight").val());
    var newPackage = Object.create(Package);
    newPackage.distance = inputtedDistance;
    newPackage.weight = inputtedWeight;
    
    $("p#calculated-rate").text("It will cost $" +  newPackage.rate());

    this.reset();

  });
});

