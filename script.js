function addDivs() {
  // create first div
  const div1 = document.createElement("div");
  div1.style.height = "25%";
  // create form
  const form = document.createElement("form");
  // create input field
  const input = document.createElement("input");
  input.type = "text";
  input.name = "name";
  input.placeholder = "Enter your name";
  // create submit button
  const submit = document.createElement("input");
  submit.type = "submit";
  submit.value = "Submit";
  // add event listener to submit button
  submit.addEventListener("click", function (event) {
    event.preventDefault(); // prevent form submission
    const name = input.value;
    const id = table.rows.length; // get the next ID
    const date = new Date().toISOString().split("T")[0]; // get the current date
    addTableRow(id, name, "Unknown", date); // add the new row to the table
    input.value = ""; // clear the input field
  });
  // append input and submit to form
  form.appendChild(input);
  form.appendChild(submit);
  // append form to first div
  div1.appendChild(form);

  // create second div
  const div2 = document.createElement("div");
  div2.style.height = "75%";
  // create table
  const table = document.createElement("table");
  // add CSS styles to table
  table.style.width = "100%";
  table.style.borderSpacing = "0";
  // create table headers
  const tr = document.createElement("tr");
  const th1 = document.createElement("th");
  th1.textContent = "ID";
  const th2 = document.createElement("th");
  th2.textContent = "Name";
  const th3 = document.createElement("th");
  th3.textContent = "Author";
  const th4 = document.createElement("th");
  th4.textContent = "Date";
  // append headers to row
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  // append row to table
  table.appendChild(tr);
  // append table to second div
  div2.appendChild(table);

  // function to add rows to table
  function addTableRow(id, name, author, date) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = id;
    const td2 = document.createElement("td");
    td2.textContent = name;
    const td3 = document.createElement("td");
    td3.textContent = author;
    const td4 = document.createElement("td");
    const now = new Date();
    const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    td4.textContent = formattedDate;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);

    // get all the rows in the table
    const rows = table.getElementsByTagName("tr");
    const data = [];

    // loop through the rows and extract the cell data
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.getElementsByTagName("td");
      const rowData = {
        id: cells[0].textContent,
        name: cells[1].textContent,
        author: cells[2].textContent,
        date: cells[3].textContent,
      };
      data.push(rowData);
    }

    // log the JSON data to the console
    console.log(JSON.stringify(data));
  }

  document.body.appendChild(div1);
  document.body.appendChild(div2);
}

// call the function to add the divs and example rows
addDivs();
