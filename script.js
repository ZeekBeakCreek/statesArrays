function myFunction() {
  // continents
  var statesArr = ["Alabama", "Alaska", "Arizona", "Hawaii", "Maine", "Texas"];
  var capitalsArr = ["bruh", "hello", "eijfdksvb", "fvd c", "efwvd", "wfvd"];
  var dropdownSelect = document.getElementById("states");

  // grab text content
  document.getElementById("capital-display").textContent = "";

  // change text content
  document.getElementById("capital-display").textContent =
    capitalsArr[statesArr.indexOf(dropdownSelect.value)];
}

  // execute function on change
document.getElementById("states").addEventListener("change", myFunction);
