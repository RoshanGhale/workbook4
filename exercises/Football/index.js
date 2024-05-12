"use script";

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

const teamsList = document.getElementById("teamsList");

const displayTeamButton = document.getElementById("displayTeamButton");

function init() {
  for (const team of teams) {
    const option = document.createElement("option");
    option.value = team.code;
    option.text = team.name;

    teamsList.appendChild(option);
  }
}

function displayTeam() {
  const teamsList = document.getElementById("teamsList");
  const selectedTeamCode = teamsList.value;
  const selectedTeam = teams.find((team) => team.code === selectedTeamCode);

  if (selectedTeam) {
    const teamInfo = document.getElementById("teamInfo");
    teamInfo.innerText = `You selected ${selectedTeam.name} (${selectedTeam.code}) who plays in ${selectedTeam.plays}`;
  } else {
    alert("Team not found");
  }
}

window.onload = init;
