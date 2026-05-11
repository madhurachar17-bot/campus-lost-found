function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username !== "" && password !== ""){

        alert("Login Successful");

        document.getElementById("portalSection").style.display = "block";
    }
    else{
        alert("Please enter username and password");
    }
}

function addItem(){

    let itemName = document.getElementById("itemName").value;
    let description = document.getElementById("description").value;
    let location = document.getElementById("location").value;
    let status = document.getElementById("status").value;

    if(itemName === "" || description === "" || location === ""){

        alert("Please fill all fields");
        return;
    }

    let itemDiv = document.createElement("div");

    itemDiv.classList.add("item-card");

    itemDiv.innerHTML = `

        <h4>${itemName}</h4>

        <p>${description}</p>

        <p><b>Location:</b> ${location}</p>

        <p><b>Status:</b> ${status}</p>
        
        <button class="btn btn-success" onclick="approveItem(this)">Approve</button>
        
        <button class="btn btn-danger" onclick="deleteItem(this)">Delete</button>

    `;

    document.getElementById("itemsContainer").appendChild(itemDiv);

    document.getElementById("itemName").value = "";
    document.getElementById("description").value = "";
    document.getElementById("location").value = "";
}

function deleteItem(button){

    button.parentElement.remove();
}

function searchItems(){

    let input = document.getElementById("search").value.toLowerCase();

    let items = document.getElementsByClassName("item-card");

    for(let i=0; i<items.length; i++){

        let text = items[i].innerText.toLowerCase();

        if(text.includes(input)){
            items[i].style.display = "block";
        }
        else{
            items[i].style.display = "none";
        }
    }
}
function approveItem(button){
    alert("Item Approved");
}

function deleteItem(button){
    button.parentElement.remove();
}