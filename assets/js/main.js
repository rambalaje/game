// Card deck image array

const cardDeck = [
  "a-black.jpg",
  "a-styles.jpg",
  "adam-bomb.jpg",
  "al-snow.jpg",
  "andre.jpg",
  "arn-anderson.jpg",
  "b-brawler.jpg",
  "bad-news-brown.jpg",
  "bam-bigelow.jpg",
  "bastion-booger.jpg",
  "batista.jpg",
  "berzerker.jpg",
  "big-bossman.jpg",
  "big-show.jpg",
  "billy-gunn.jpg",
  "blue-meanie.jpg",
  "bob-backlund.jpg",
  "bobby-roode.jpg",
  "boogeyman.jpg",
  "booker-t.jpg",
  "braun.jpg",
  "bret-hart.jpg",
  "brian-adams.jpg",
  "brian-pillman.jpg",
  "british-bulldog.jpg",
  "brock-lesnar.jpg",
  "bruno-sammartino.jpg",
  "brutus.jpg",
  "cactus.jpg",
  "chris-jericho.jpg",
  "cw-anderson.jpg",
  "damien-sandow.jpg",
  "daniel-bryan.jpg",
  "danny-doring.jpg",
  "dean-malenko.jpg",
  "diesel.jpg",
  "doink.jpg",
  "don-muraco.jpg",
  "drew-mcintyre.jpg",
  "droz.jpg",
  "e-guerrero.jpg",
  "earthquake.jpg",
  "edge.jpg",
  "elias.jpg",
  "finn-balor.jpg",
  "flash-funk.jpg",
  "gangrel.jpg",
  "george-steele.jpg",
  "gillberg.jpg",
  "godfather.jpg",
  "goldberg.jpg",
  "great-muta.jpg",
  "hakushi.jpg",
  "hardcore-holly.jpg",
  "hillbilly.jpg",
  "honky-tonk.jpg",
  "hugh-morrus.jpg",
  "hulk-hogan.jpg",
  "hurricane.jpg",
  "iron-sheik.jpg",
  "ivan-koloff.jpg",
  "jake-roberts.jpg",
  "jeff-hardy.jpg",
  "jerry-lawler.jpg",
  "jim-neidhart.jpg",
  "john-cena.jpg",
  "john-morrison.jpg",
  "jushin-liger.jpg",
  "justin-credible.jpg",
  "juventud-guerrera.jpg",
  "kama.jpg",
  "kamala.jpg",
  "kane.jpg",
  "ken-shamrock.jpg",
  "kevin-nash.jpg",
  "king-kong-bundy.jpg",
  "konnan.jpg",
  "kurt-angle.jpg",
  "lex-luger.jpg",
  "mantaur.jpg",
  "marc-mero.jpg",
  "marty-jannetty.jpg",
  "matt-hardy.jpg",
  "max-moon.jpg",
  "mikey-whipwreck.jpg",
  "mordecai.jpg",
  "mortis.jpg",
  "mr-perfect.jpg",
  "nailz.jpg",
  "nathan-jones.jpg",
  "new-jack.jpg",
  "nikolai-volkoff.jpg",
  "nova.jpg",
  "one-man-gang.jpg",
  "owen-hart.jpg",
  "perry-saturn.jpg",
  "psychosis.jpg",
  "randy-orton.jpg",
  "randy-savage.jpg",
  "raven.jpg",
  "razor.jpg",
  "rey-mysterio.jpg",
  "rhino.jpg",
  "ric-flair.jpg",
  "rick-martel.jpg",
  "rick-rude.jpg",
  "rick-steiner.jpg",
  "ricky-steamboat.jpg",
  "ricochet.jpg",
  "rikishi.jpg",
  "road-dogg.jpg",
  "roadkill.jpg",
  "rob-van-dam.jpg",
  "roddy-piper.jpg",
  "roman-reigns.jpg",
  "ron-simmons.jpg",
  "sabu.jpg",
  "samoa-joe.jpg",
  "scott-norton.jpg",
  "scott-steiner.jpg",
  "seth-rollins.jpg",
  "sgt-slaughter.jpg",
  "shawn-michaels.jpg",
  "sheamus.jpg",
  "shinsuke-nakamura.jpg",
  "sid.jpg",
  "skinner.jpg",
  "spike.jpg",
  "steve-austin.jpg",
  "steve-blackman.jpg",
  "steve-corino.jpg",
  "stevie-ray.jpg",
  "sting.jpg",
  "taka-michinoku.jpg",
  "tatanka.jpg",
  "tazz.jpg",
  "ted-dibiase.jpg",
  "the-fiend.jpg",
  "the-mountie.jpg",
  "the-patriot.jpg",
  "the-rock.jpg",
  "the-undertaker.jpg",
  "tommy-dreamer.jpg",
  "triple-h.jpg",
  "ultimate-warrior.jpg",
  "ultimo-dragon.jpg",
  "vader.jpg",
  "val-venis.jpg",
  "vampiro.jpg",
  "van-hammer.jpg",
  "virgil.jpg",
  "wahoo-mcdaniel.jpg",
  "warlord.jpg",
  "xpac.jpg",
  "yokozuna.jpg",
];

// Global constant variables

const mode = ["fatal4", "kingofthering", "battleroyal", "royalrumble"],
  title = document.querySelector(".mode-head"),
  deck = document.querySelector(".deck"),
  modal = document.querySelector("#gameWon"),
  restart = document.querySelector(".restart-btn"),
  newGame = document.querySelector(".new-game-btn"),
  moveCount = document.querySelector(".move-count"),
  stars = document.querySelector(".match-rating").querySelectorAll(".star"),
  timeCount = document.querySelector(".timer"),
  stats = document.querySelector(".modal-body");

// Global changeable variables

let currentCards = 0,
  cardLimit = 0,
  moves = 0,
  starCount = 5,
  time,
  minutes = 0,
  seconds = 0,
  startTime = false,
  // Global array stores flipped cards

  flipped = [],
  // Global array Stores paired cards

  paired = [];

// Shuffle arrays function credit to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// A function to add multiple attributes to img elements credit to https://stackoverflow.com/questions/12274748/setting-multiple-attributes-for-an-element-at-once-with-javascript?

function setAttributes(addImg, attrs) {
  for (let key in attrs) {
    addImg.setAttribute(key, attrs[key]);
  }
}

// Load the correct game mode and number of cards on the board from the mode selected on the index page

function startGame() {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("mode");
  if (myParam === "fatal4") {
    title.innerHTML = "Fatal 4 (Easy)";
    cardLimit = 8;
  } else if (myParam === "kingofthering") {
    title.innerHTML = "King of the Ring (Medium)";
    cardLimit = 16;
  } else if (myParam === "battleroyal") {
    title.innerHTML = "Battle Royal (Hard)";
    cardLimit = 40;
  } else if (myParam === "royalrumble") {
    title.innerHTML = "Royal Rumble (Extreme)";
    cardLimit = 60;
  }

  // Declare a new array as the result of shuffling the cardDeck array then selecting the number of cards equal to half the card limit

  let shuffDeck = shuffle(cardDeck).slice(0, cardLimit / 2);

  // Create a new array by merging two copies of shuffDeck together and shuffle

  let newDeck = shuffDeck.concat(shuffDeck);
  shuffle(newDeck);

  // Repeat over newDeck array
  for (let i = 0; i < newDeck.length; i++) {
    // Create the <li> with the class of card then nest an image inside the list item

    const liEl = document.createElement("LI");
    liEl.classList.add("card");
    const addImg = document.createElement("IMG");
    liEl.appendChild(addImg);

    // Set multiple attributes for the images

    setAttributes(addImg, {
      src: "assets/images/cards/" + newDeck[i],
      alt: "image of a professional wrestler",
    });

    // Add the list item to the <ul> with the class of deck

    deck.appendChild(liEl);
  }
}
if (currentCards < cardLimit) {
  currentCards++;
}
startGame(mode);

// Remove all cards from the deck <ul></ul>

function removeCard() {
  while (deck.hasChildNodes()) {
    deck.removeChild(deck.firstChild);
  }
}

/* Timer function is invoked in an event listener on the first selection of a card
Credit to https://www.w3schools.com/js/js_timing.asp */

function timer() {
  time = setInterval(function () {
    // Update the timeCount every second
    seconds++;
    // Every 60 seconds update the minutes and reset the seconds
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    timeCount.innerHTML =
      "<i class='fas fa-stopwatch'></i>" +
      " MATCH TIME: " +
      minutes +
      " MINS " +
      seconds +
      " SECS";
  }, 1000);
}

// Stop the timer once all cards have been matched

function stopTime() {
  clearInterval(time);
}

// Reset all global variables and generated html content

function resetAll() {
  stopTime();
  startTime = false;
  seconds = 0;
  minutes = 0;
  timeCount.innerHTML =
    "<i class='fas fa-stopwatch'></i>" +
    " MATCH TIME: " +
    minutes +
    " MINS " +
    seconds +
    " SECS";
  stars[1].firstElementChild.classList.add("fa-star");
  stars[2].firstElementChild.classList.add("fa-star");
  stars[3].firstElementChild.classList.add("fa-star");
  stars[4].firstElementChild.classList.add("fa-star");
  starCount = 5;

  moves = 0;
  moveCount.innerHTML = 0;

  paired = [];

  flipped = [];
  removeCard();
  stats.remove("p");
  startGame(mode);
}

// Function updates the move count html

function moveCounter() {
  moveCount.innerHTML++;
  moves++;
}

/* Function updates the match rating. Once the number of moves made reaches the card limit number 
and any multiplication applied, remove a star from the match rating */

function matchRating() {
  if (moves === cardLimit * 0.75) {
    stars[4].firstElementChild.classList.remove("fa-star");
    starCount--;
  }

  if (moves === cardLimit) {
    stars[3].firstElementChild.classList.remove("fa-star");
    starCount--;
  }

  if (moves === cardLimit * 1.5) {
    stars[2].firstElementChild.classList.remove("fa-star");
    starCount--;
  }

  if (moves === cardLimit * 2) {
    stars[1].firstElementChild.classList.remove("fa-star");
    starCount--;
  }
}

// Compare two selected cards to determine if they are a match or not

function compareTwo() {
  // If there are 2 cards in the flipped array disable any other selections
  if (flipped.length === 2) {
    document.body.style.pointerEvents = "none";
  }
  // Compare the cards by image src
  if (flipped.length === 2 && flipped[0].src === flipped[1].src) {
    // Call the match function
    match();
  } else if (flipped.length === 2 && flipped[0].src != flipped[1].src) {
    setTimeout(function () {
      // Add red border around card
      flipped[0].parentElement.classList.add("no-match");
      flipped[1].parentElement.classList.add("no-match");
    }, 200);
    // Call the no pair function
    noPair();
  }
}

// Retrieve the two flipped cards and add .match class to the li element

function match() {
  setTimeout(function () {
    flipped[0].parentElement.classList.add("match");
    flipped[1].parentElement.classList.add("match");
    // Push the matched cards in the flipped array to the paired array
    paired.push(...flipped);
    // Allow further selecting of cards
    document.body.style.pointerEvents = "auto";
    // Check to see if the user has won their game
    gameWon();
    // Reset the flipped array
    flipped = [];
  }, 500);
  // Add 1 to move count
  moveCounter();
  matchRating();
}

// Remove flip and no-match classes after 800 milliseconds

function noPair() {
  setTimeout(function () {
    flipped[0].parentElement.classList.remove("flip");
    flipped[1].parentElement.classList.remove("flip");
    flipped[0].parentElement.classList.remove("no-match");
    flipped[1].parentElement.classList.remove("no-match");
    // Allow further selecting of cards
    document.body.style.pointerEvents = "auto";
    // Reset the flipped array
    flipped = [];
  }, 800);
  // Add 1 to move count
  moveCounter();
  matchRating();
}

function modalStats() {
  // Create four different paragraphs
  for (let i = 1; i <= 4; i++) {
    const statsEl = document.createElement("p");
    // Add stats class to the new Paragraph
    statsEl.classList.add("stats");
    // Add the new created <p> tag to the modal content
    stats.appendChild(statsEl);
  }
  // Select all p tags with the class of stats and update the content
  let p = stats.querySelectorAll("p.stats");
  p[0].innerHTML = "You found all " + cardLimit / 2 + " card pairs";
  p[1].innerHTML =
    "Match Finish Time: " + minutes + " Minutes and " + seconds + " Seconds";
  p[2].innerHTML = moves + " Moves Made";
  p[3].innerHTML = "Your Match Rating is: " + starCount + " out of 5 stars";
}

// Open the modal and apply the close button.

function displayModal() {
  const closeModal = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  // On selecting the close button, hide the modal again
  closeModal.onclick = function () {
    modal.style.display = "none";
  };
}

// Check the number of paired cards against the card limit and if true stop the timer and display the modal with stats

function gameWon() {
  if (paired.length === cardLimit) {
    stopTime();
    displayModal();
    modalStats();
  }
}

/*----------------------------------  
Main Event Listeners
------------------------------------*/

// Event Listener if a card is clicked call flipCard function

deck.addEventListener("click", function (evt) {
  if (evt.target.nodeName === "LI") {
    // Start the timer after the first selection of a card
    if (startTime === false) {
      startTime = true;
      // Executes the timer() function
      timer();
    }
    flipCard();
  }

  //Flip the card and display cards img
  function flipCard() {
    // When <li> is clicked add the class .flip to show img
    evt.target.classList.add("flip");
    // Call addToOpened() function
    addToFlipped();
  }

  //Add the fliped cards to the empty array of flipped
  function addToFlipped() {
    if (flipped.length === 0 || flipped.length === 1) {
      // Push that imgage to flipped array
      flipped.push(evt.target.firstElementChild);
    }
    // Call compareTwo() function
    compareTwo();
  }
});

/*----------------------------------  
Button Event Listeners
------------------------------------*/

// Restart button calls for resetAll function
restart.addEventListener("click", resetAll);

// New Game button hides the modal and calls for resetAll function
newGame.addEventListener("click", function () {
  modal.style.display = "none";
  resetAll();
});
