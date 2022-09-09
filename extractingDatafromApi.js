// import fetch from "node-fetch";
const api_url = "https://fakestoreapi.com/users";

async function getApi(url) {
    const respose = await fetch(url);
    const data = await respose.json()
    showData(data);
}

getApi(api_url);

function showData(data) {
    // console.log(data);
    let tab = 
            `<tr>
                <th>ID</th>   
                <th>Name</th>
                <th>Email</th>
            </tr>`;

    for(let user of data) {
        tab +=
        `<tr>
            <td>${user.id}</td>
            <td>${user.name.firstname } ${user.name.lastname}</td>
            <td>${user.email}</td>
        </tr>`
    }

    document.getElementById("users").innerHTML = tab;
}