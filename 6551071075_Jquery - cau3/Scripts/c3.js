function insert_Row_DOM() {
  const table = document.getElementById("sampleTable");
  const newRow = table.insertRow(); 
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerHTML = "New Row cell1";
  cell2.innerHTML = "New Row cell2";
}

$(document).ready(function() {
  $("#insert").click(function() {
    insert_Row_DOM();
    });
  });