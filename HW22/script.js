function myTable() {
  let table = document.getElementById("myTable");
  let count = 1;
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      let cols = document.createElement("td");
      cols.textContent = count;
      row.appendChild(cols);
      count++;
    }
    table.appendChild(row);
  }
}
myTable();
