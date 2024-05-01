const myForm = document.querySelector('#main');

myForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    let passport =  myForm.passport.files[0];
    passport = URL.createObjectURL(passport);

    const user = {
        name: myForm.fullName.value,
        id: myForm.staffId.value,
        position: myForm.position.value,
        avatar: passport
    }

    console.log(user);
    document.getElementById('staffImage').setAttribute('src', user.avatar);
    document.getElementById('staffId').textContent = user.id;
    document.getElementById('staffName').textContent = user.name;
    document.getElementById('staffPos').textContent = user.position;


    // The reset method is used to reset the form to its original state 
    myForm.reset();
});