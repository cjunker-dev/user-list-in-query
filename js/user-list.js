//const url = "http://localhost:8080/api/users/";
let newUser = {
    id: 0, 
    username: "user", 
    password: "user", 
    firstName: "Normal", 
    lastName: "User",
    isAdmin: true,
    isReviewer: true,
    phoneNumber: "513-555-0419",
    email: "user@test.com"
}

let allUsers = [];

$().ready(()=>{
    

    userList()
        .done((users) => {
            allUsers = users;
            display(allUsers);
        })
        .fail()
    
    // console.log("jQuery is ready!");
    // $.ajax({
    //     method: "POST",
    //     url: url,
    //     data: JSON.stringify(newUser),
    //     contentType: 'application/json'
    // })
    //     .done((res)=> {
    //         console.log(res);
    //     })
    //     .fail((err) => {
    //         console.error(err);
    //     })
// console.log("before call to getJSON");
//     $.getJSON(url)
//         .done((users)=> {
//             console.log(users);
//             console.log("completed call");

//         })
//         .fail((err) => {
//             console.error(err);
//         })
//         console.log("after call to getJSON");

});

const display = (users) => {
    let tbody = $("tbody");
    tbody.empty();
    for (let user of users) {
        let tr = $("<tr></tr>");
        let tdId = $(`<td>${user.id}</td>`);
        tr.append(tdId);
        //in one statement
        tr.append($(`<td>${user.username}</td>`));
        let tdName = $(`<td>${user.firstName} ${user.lastName}</td>`);
        tr.append(tdName);
        tr.append($(`<td>${user.isReviewer ? "Yes" : "No"}</td>`));
        tr.append($(`<td>${user.isAdmin ? "Yes" : "No"}</td>`));
        tbody.append(tr);
    }
}