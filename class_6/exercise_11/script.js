document.getElementById('welcomeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    
    const message = `Bienvenid@, ${name}! Tienes ${age} años.`;
    document.getElementById('message').textContent = message;
});