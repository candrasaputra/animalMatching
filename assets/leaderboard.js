let leaderboard = window.localStorage.getItem('leaderboard');
leaderboard = (leaderboard === null) ? [] : JSON.parse(leaderboard);
leaderboard.sort(function (a, b) {
    return a.time - b.time
});

let i = 1;
let list = '';
for (let k in leaderboard) {
    console.log(leaderboard[k].name);

    if (i === 1) {
        list += `<li class="list-group-item list-group-item-light text-warning">
        ${i}. ♔ ${leaderboard[k].name} (${leaderboard[k].time} seconds)
    </li>`
    } else if (i === 2) {
        list += `<li class="list-group-item list-group-item-light text-success">
        ${i}. ♕ ${leaderboard[k].name} (${leaderboard[k].time} seconds)
    </li>`
    } else if (i === 3) {
        list += `<li class="list-group-item list-group-item-light text-primary">
        ${i}. ♢ ${leaderboard[k].name} (${leaderboard[k].time} seconds)
    </li>`
    } else {
        list += `<li class="list-group-item list-group-item-light text-dark">
        ${i}. ${leaderboard[k].name} (${leaderboard[k].time} seconds)
    </li>`
    }

    if (i === 10) break;
    i++;
}

if (leaderboard.length === 0) {
    list = 'No Record!'
}

document.getElementById('leaderboard').innerHTML = list;