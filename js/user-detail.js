let user = null;

$().ready(() => {
    userDetail(5)
        .done((user) => {
            user = user;
            display(user);
        })
});

const display = (user) => {
    $("#pid").text(user.id);
    $("#pusername").text(user.username);
    $("#pemail").text(user.email);

}