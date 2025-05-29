async function displayMessage() {
    const response = await fetch(`./hello.json`);
    const data = await response.json();
    const messegeElm = document.getElementById('message');
    messegeElm.innerHTML = data.message;
}
displayMessage();
