function createGames(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon=${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon=${player2}.svg" alt="Bandeira do ${player2}">
  </li>
  `
}

let delay = -0.5;
function createCard(date, day, games) {
  delay = delay + 0.5;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML = 
    createCard("20/11", "domingo", 
      createGames("qatar", "13:00", "ecuador")) +

    createCard("21/11", "segunda", 
      createGames("england", "10:00", "iran") +
      createGames("senegal", "13:00", "netherlands") +
      createGames("usa", "16:00", "wales")) +

    createCard("22/11", "terça", 
      createGames("argentina", "07:00", "saudi-arabia") +
      createGames("denmark", "10:00", "tunisia") +
      createGames("mexico", "13:00", "poland") +
      createGames("france", "16:00", "australia")) +

    createCard("23/11", "quarta", 
      createGames("morocco", "07:00", "croatia") +
      createGames("germany", "10:00", "japan") +
      createGames("spain", "13:00", "costa-rica") + 
      createGames("belgium", "16:00", "canada")) +

    createCard("24/11", "quinta", 
      createGames("switzerland", "07:00", "cameroon") +
      createGames("uruguay", "10:00", "south-korea") +
      createGames("portugal", "13:00", "ghana") +
      createGames("brazil", "16:00", "serbia")) +

    createCard("25/11", "sexta", 
      createGames("wales", "07:00", "iran") +
      createGames("qatar", "10:00", "senegal") +
      createGames("netherlands", "13:00", "ecuador") +
      createGames("england", "16:00", "usa")) +

    createCard("26/11", "sábado", 
      createGames("tunisia", "07:00", "australia") +
      createGames("poland", "10:00", "saudi-arabia") +
      createGames("france", "13:00", "denmark") +
      createGames("argentina", "16:00", "mexico")) +

    createCard("27/11", "domingo", 
      createGames("japan", "07:00", "costa-rica") +
      createGames("belgium", "10:00", "morocco") +
      createGames("croatia", "13:00", "canada") +
      createGames("spain", "16:00", "germany")) +

    createCard("28/11", "segunda", 
      createGames("cameroon", "07:00", "serbia") +
      createGames("south-korea", "10:00", "ghana") +
      createGames("brazil", "13:00", "switzerland") + 
      createGames("portugal", "16:00", "uruguay")) +

    createCard("29/11", "terça", 
      createGames("ecuador", "12:00", "senegal") +
      createGames("netherlands", "12:00", "qatar") +
      createGames("iran", "16:00", "usa") + 
      createGames("wales", "16:00", "england")) +

    createCard("30/11", "quarta", 
      createGames("tunisia", "12:00", "france") +
      createGames("australia", "12:00", "denmark") +
      createGames("poland", "16:00", "argentina") + 
      createGames("saudi-arabia", "16:00", "mexico")) +

    createCard("01/12", "quinta", 
      createGames("croatia", "12:00", "belgium") +
      createGames("canada", "12:00", "morocco") +
      createGames("japan", "16:00", "spain") + 
      createGames("costa-rica", "16:00", "germany")) +

    createCard("02/12", "sexta", 
      createGames("south-korea", "12:00", "portugal") +
      createGames("ghana", "12:00", "uruguay") +
      createGames("serbia", "16:00", "switzerland") +
      createGames("cameroon", "16:00", "brazil"));
