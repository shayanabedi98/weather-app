document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = document.querySelector('input').value;
    const response = await fetch('/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city })
    });
    const data = await response.json();
    document.querySelector('h2').innerHTML = data.temp;
})