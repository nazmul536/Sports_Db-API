const searchTeam = () => {
    const serachField = document.getElementById('search-feild');
    const searchText = serachField.value;

    serachField.value = '';
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.teams))
}
searchTeam()
const displaySearchResult = teams => {
    // console.log(teams)
    const serachResult = document.getElementById('search-result')
    // serachResult.textContent = ''
    teams.forEach(team => {
        // console.log(team)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
             <div onclick="loadTeamDetails(${team.idTeam})" class="card h-100">
                     <img width="150px" src="${team.strTeamBadge}" class="card-img-top" alt="...">
                        <div class="card-body">
                           <h5 class="card-title">${team.strTeam}</h5>
                           <p class="card-text">${team.strDescriptionEN.slice(0, 100)}</p>
                        </div>
            </div>
        `;
        serachResult.appendChild(div);
    })
}
const loadTeamDetails = teamId => {
    console.log(teamId)
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId} `
    fetch(url)
        .then(res => res.json())
        .then(data => displayTeamDetails(data.teams[0]))
}
const displayTeamDetails = team => {
    console.log(team)
    const teamDetails = document.getElementById('team-details');
    teamDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
         <img width="150px" src="${team.strTeamBadge}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${team.strTeam}</h5>
              <p class="card-text">${team.strDescriptionEN.slice(0, 100)}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
    `
    teamDetails.appendChild(div);
}