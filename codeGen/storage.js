let user = [];
const addInfo = (ev) =>{
    ev.preventDefault();
    let userInfo = {
        name: document.getElementById('name').value,
        lastName: document.getElementById('lastname').value, 
        mail: document.getElementById('mail').value,
        code: document.getElementById('down-space').value
    };
    //manda info a user y resetea el formulario
    user.push(userInfo);
    document.forms[0].reset();

    //Si quiero mostrar el array para ver errores
    /*console.warn('added', {user});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(user, '\t', 2);
  */  
    //guarda la info del array en local storage en forma de string 
    localStorage.setItem('userForm', JSON.stringify(user));
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addInfo);
});



