const url="http://localhost:8080/api/users/";

const userList = () => {
    return $.getJSON(url);
}

const userDetail = (id) => {
    return $.getJSON(`${url}${id}`);
}