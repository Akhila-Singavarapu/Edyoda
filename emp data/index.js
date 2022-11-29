var url =
  "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";

let tableBody = document.getElementById("table-body");
let userSelected = document.querySelector(".user-selected");
let infoContent = document.querySelector("#info-content");
let searchBox = document.getElementById("search-box");
let tableRow = document.querySelectorAll(".data-row");
console.log(tableRow);


// console.log(tableRow);
let tableData = [];

const fetchingData = async () => {
  const response = await fetch(url);
  console.log(response);
  let data = await response.json();
  console.log(data);
  tableData = data;
  getTableDetails(data);
};
fetchingData();
console.log(tableData);

const getTableDetails = (data) => {
  // const output = data.map((data) => {
  //   return ` <tr class="data-row">
  //   <td class="column1">${data.id}</td>
  //   <td class="column2">${data.firstName}</td>
  //   <td class="column3">${data.lastName}</td>
  //   <td class="column4">${data.email}</td>
  //   <td class="column5">${data.phone}</td>
  // </tr>`;
  // });
  function tableInformation(data) {
    const output = data.reduce((acc, curr) => {
      acc += ` <tr class="data-row" >
        <td class="column1">${curr.id}</td>
        <td class="column2">${curr.firstName}</td>
        <td class="column3">${curr.lastName}</td>
        <td class="column4">${curr.email}</td>
        <td class="column5">${curr.phone}</td>
      </tr>`;
      return acc;
    }, "");
    tableBody.innerHTML = output;

    // tableInformation(data);
    let tableRow = document.querySelectorAll(".data-row");

    console.log(tableRow);
    tableRow.forEach((element) => {
      element.addEventListener("click", (e) => {
        infoContent.style.display = "block";
        console.log(this);
        for (let i = 0; i < tableRow.length; i++) {
          tableRow[i].classList.remove("active");
          e.target.parentElement.classList.add("active");
        }

        
        // console.log(e.target.parentElement.children[0].innerText)
        let selectedProfile =
          e.target.parentElement.children[1].innerText.toLowerCase();

        const filteredData = data.filter((info) => {
          return info.firstName.toLowerCase().includes(selectedProfile);
        });
        console.log(filteredData[0].id);
        const detailedInfo = filteredData.reduce((acc, curr) => {
          acc += `
          <div><b>User selected:</b>${curr.firstName} ${curr.lastName}</div>
          <div>
            <b>Description: </b>
            <textarea cols="50" rows="5" readonly>${curr.description}</textarea
            >
          </div>
          <div><b>Address:</b>${curr.address.streetAddress}</div>
          <div><b>City:</b>${curr.address.city}</div>
          <div><b>State:</b>${curr.address.state}</div>
          <div><b>Zip:</b>${curr.address.zip}</div>
        `;
          return acc;
        }, "");
        infoContent.innerHTML = detailedInfo;
      });
    });
  }

  tableInformation(data);

  searchBox.addEventListener("keydown", (e) => {
    // console.log(e.target.value)
    let searchedInfo = tableData.filter((info) => {
      return (
        info.firstName.toLowerCase().includes(e.target.value) ||
        info.lastName.toLowerCase().includes(e.target.value) ||
        info.email.toLowerCase().includes(e.target.value)
      );
    });
    console.log(searchedInfo);
    tableInformation(searchedInfo);
  });
};
