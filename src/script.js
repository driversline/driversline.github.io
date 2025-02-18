async function fetchGitHubStats(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
}

async function displayStats() {
    const username = 'driversline';
    const stats = await fetchGitHubStats(username);
    
    const statsDiv = document.getElementById('stats');
    statsDiv.innerHTML = `
        <h2><span>${stats.login}</span></h2>
        <p>Репозиториев: <span>${stats.public_repos}</span></p>
        <p>Подписчиков: <span>${stats.followers}</span></p>
        <p>Звезд: <span>${stats.public_gists}</span></p>
    `;
}

displayStats();
