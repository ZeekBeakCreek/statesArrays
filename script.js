function myFunction() {
  // continents
  var statesArr = ["Alabama", "Alaska", "Arizona", "Hawaii", "Maine", "Texas"];
  var capitalsArr = ["Montgomery", "Juneau", "Pheonix", "Honolulu", "Augusta", "Austin"];
  var dropdownSelect = document.getElementById("states");

  // grab text content
  document.getElementById("capital-display").textContent = "";

  // change text content
  document.getElementById("capital-display").textContent =
    capitalsArr[statesArr.indexOf(dropdownSelect.value)];
}

  // execute function on change
document.getElementById("states").addEventListener("change", myFunction);
