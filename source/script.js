async function fetchGitHubStats(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
}

async function displayStats() {
    const username = 'driversline'; // Ваше имя пользователя
    const stats = await fetchGitHubStats(username);
    
    const statsDiv = document.getElementById('stats');
    statsDiv.innerHTML = `
        <h2>${stats.login}</h2>
        <p>Количество репозиториев: ${stats.public_repos}</p>
        <p>Количество подписчиков: ${stats.followers}</p>
        <p>Количество звезд: ${stats.public_gists}</p>
    `;
}

displayStats();
