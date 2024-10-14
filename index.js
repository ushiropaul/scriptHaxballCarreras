var room = HBInit({
    roomName: "",
    maxPlayers: 16,
    noPlayer: true
});
room.setDefaultStadium("Big");
room.setScoreLimit(5);
room.setTimeLimit(0);

function updateAdmins() { 
    var players = room.getPlayerList();
    if (players.length == 0) return;
    if (players.find((player) => player.admin) != null) return;
    room.setPlayerAdmin(players[0].id, true);
}

room.onPlayerJoin = function(player) {
    room.sendAnnouncement(`Bienvenido a la sala, ${player.name}`, null, 0xffffff, "bold", 2);
}

room.onPlayerLeave = function(player) {
    room.sendAnnouncement(`${player.name} ha abandonado la sala`, null, 0xffffff, "bold", 2);
    updateAdmins();
}
