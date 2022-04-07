function saveCustomer() {
    let inputValue = document.querySelector('input').value;
    localStorage.setItem('name-client', inputValue)
}