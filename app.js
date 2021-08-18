
document.getElementById("refresh").addEventListener("click", fetchContacts);

// link to the add contact page
document.getElementById("addContacts").addEventListener("click", () => {window.open("add-contact.html", "_self")});

function fetchContacts(){ //fetch contacts from the sever
    fetch(rootPath + "controller/get-contacts/")
    .then( (response) =>{
        return response.json();
    })
    .then((data) =>{
        displayOutput(data); // call the display function
    })
}

// contruct the output
function displayOutput(data){
    output = "<table>";

    // display contacts one by one in a table format
    for(i in data){
        output += `
                  <tr onclick="aditContact(${data[i].id})">
                     <td><img src="${rootPath}controller/uploads/${data[i].avatar}" width="40"/></td>
                     <td><h5>${data[i].firstname}</h5></td>
                     <td><h5>${data[i].lastname}</h5></td>
                     </tr>
                  `
    }

    output += "</table>";
    document.getElementById("table").innerHTML = output;
}

// call the adit contact page
function aditContact(id){
    window.open("adit-contact.html?id=" + id, "_self");
}

// link to the home page
function homeLink(){
    window.open("index.html", "_self");
}

