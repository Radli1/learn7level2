let userBase = [];

function manageBase() {
    let inpt1 = document.getElementById('inpt1');
    let inpt2 = document.getElementById('inpt2');
    let isNotNull = inpt1.value && inpt2.value;
    if (isNotNull) {
        let newUser = new User(inpt1.value, inpt2.value);
        let id = userBase.length;
        userBase.push(newUser);
        let opt = document.createElement("option");
        opt.value = String(id);
        opt.text = newUser.name;
        selectUser.appendChild(opt);
        inpt1 = '';
        inpt2 = '';

    }
    else {
        alert("Введите данные во все поля!");
    }
}

function showUser() {
    let id = selectUser.value;
    if (id) {
        let userData = userBase[id];
        selectUser.innerhtml = userData;
    }
    else{
        alert('Не выбран пользователь!');
    }
}





