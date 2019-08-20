"use strict";

let data = [
    {sport: "Football", bestTeam: "Dallas Cowboys"},
    {sport: "Baseball", bestTeam: "Texas Rangers"},
    {sport: "Basketball", bestTeam: "Dallas Mavericks"},
    {sport: "Hockey", bestTeam: "Dallas Stars"},
    {sport: "Soccer", bestTeam: "FCDallas"}
];

let length = data.length;
for (let i = 0; i < length; i++){
    let tableRow = 
    `<tr>
    <td>${data[i].sport}</td>
    <td>${data[i].bestTeam}</td>
</tr>`;
    $("#sportsTableBody").append(tableRow);
}