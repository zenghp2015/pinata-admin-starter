# 指南

return Promise.all([query1.run(), query2.run()]). h(
  data => join(data[0], data[1]),
  error => {}
);

function join(players, teams) {
  return players.map(player => {
    const team = teams.find(t => player.tid === t.tid);
    return { ...player, ...team };
  });
}