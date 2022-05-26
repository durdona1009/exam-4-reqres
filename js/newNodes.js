export default function (user){
    let temple = document.getElementById('template');
    let myTemplate = temple.content.cloneNode(true);

    myTemplate.querySelector('.avatar').src = user.avatar;
    myTemplate.querySelector('.fullname').textContent = `${user.first_name} ${user.last_name}`;
    myTemplate.querySelector('.email').textContent = user.email;
    myTemplate.querySelector('.page').href = `/user/${user.id}`;

    return myTemplate
}