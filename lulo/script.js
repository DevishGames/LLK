const players = [
    { id: 1, name: "Johan", colorClass: "player-cyan", gender: "man", position: 0 },
    { id: 2, name: "Susanne", colorClass: "player-magenta", gender: "woman", position: 0 }
];

const boardPath = [
    "hands",
    "mouth",
    "breasts",
    "butt",
    "hands",
    "breasts",
    "mouth",
    "butt",
    "hands",
    "breasts",
    "mouth",
    "butt",
    "hands",
    "breasts",
    "mouth",
    "butt",
    "hands",
    "star"
];

const challenges = {
    level1: {
        handsByHim: "$ACTOR, smek $TARGETs lår och massera utanpå underkläderna i runda cirklar så det känns igenom ordentligt.",
        handsByHer: "$ACTOR, smek $TARGET utanpå underkläderna och massera hans lem genom tyget med fasta rörelser.",
        mouth: "$ACTOR, ge $TARGET mjuka, våta kyssar på halsen och i området bakom öronen.",
        breastsByHim: "$ACTOR, krama och smek $TARGETs bröst med stora, fasta rörelser utanpå underkläderna.",
        breastsByHer: "$ACTOR, krama och smek $TARGETs bröst med stora, fasta rörelser utanpå underkläderna.",
        butt: "$ACTOR, ställ dig framför $TARGET, massera händerna långsamt ner över skinkorna och dela ut några lätta klappar samtidigt som du masserar och klämmer."
    },
    level2: {},
    level3: {},
    level4: {}
};

const maxPosition = boardPath.length;
const timerDurationSeconds = 180;

let currentPlayerIndex = 0;
let currentLevel = 1;
let lastRoll = null;
let timerIntervalId = null;
let timerRemaining = timerDurationSeconds;

const infoModal = document.getElementById("infoModal");
const diceModal = document.getElementById("diceModal");
const challengeModal = document.getElementById("challengeModal");
const levelProgressionModal = document.getElementById("levelProgressionModal");
const clothingInstructionModal = document.getElementById("clothingInstructionModal");
const endingModal = document.getElementById("endingModal");
const diceTrigger = document.getElementById("diceTrigger");
const startGameButton = document.getElementById("startGameButton");
const moveButton = document.getElementById("moveButton");
const startTimerButton = document.getElementById("startTimerButton");
const completeTurnButton = document.getElementById("completeTurnButton");
const nextLevelButton = document.getElementById("nextLevelButton");
const replayLevelButton = document.getElementById("replayLevelButton");
const goToEndingButton = document.getElementById("goToEndingButton");
const startRoundButton = document.getElementById("startRoundButton");
const closeEndingButton = document.getElementById("closeEndingButton");
const dicePlayerName = document.getElementById("dicePlayerName");
const dieFace = document.getElementById("dieFace");
const challengeCategory = document.getElementById("challengeCategory");
const challengeText = document.getElementById("challengeText");
const timerDisplay = document.getElementById("timerDisplay");
const clothingTitle = document.getElementById("clothingTitle");
const clothingText = document.getElementById("clothingText");

function setModalState(modal, isActive) {
    modal.classList.toggle("active", isActive);
    modal.setAttribute("aria-hidden", String(!isActive));
}

function getCurrentPlayer() {
    return players[currentPlayerIndex];
}

function getOtherPlayer() {
    return players[(currentPlayerIndex + 1) % players.length];
}

function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function resetTimer() {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
    timerRemaining = timerDurationSeconds;
    timerDisplay.textContent = formatTime(timerRemaining);
    startTimerButton.textContent = "STARTA NJUTNINGEN";
}

function startChallengeTimer() {
    clearInterval(timerIntervalId);
    timerRemaining = timerDurationSeconds;
    timerDisplay.textContent = formatTime(timerRemaining);
    startTimerButton.textContent = "TIDTAGNINGEN PÅGÅR";
    timerIntervalId = window.setInterval(() => {
        timerRemaining -= 1;
        timerDisplay.textContent = formatTime(Math.max(timerRemaining, 0));
        if (timerRemaining <= 0) {
            clearInterval(timerIntervalId);
            timerIntervalId = null;
            startTimerButton.textContent = "STARTA NJUTNINGEN IGEN";
        }
    }, 1000);
}

function getLevelChallengeSet() {
    return challenges[`level${currentLevel}`] || challenges.level1;
}

function getTileCategory(position) {
    if (position <= 0) {
        return null;
    }

    return boardPath[position - 1];
}

function getChallengeKey(category, player) {
    if (category === "hands") {
        return player.gender === "man" ? "handsByHim" : "handsByHer";
    }

    if (category === "breasts") {
        return player.gender === "man" ? "breastsByHim" : "breastsByHer";
    }

    return category;
}

function buildChallengeContent(position) {
    const currentPlayer = getCurrentPlayer();
    const otherPlayer = getOtherPlayer();
    const category = getTileCategory(position);

    if (category === "star") {
        return {
            title: "STJÄRNMYNT",
            text: `${currentPlayer.name}, du har nått stjärnmyntet. Fortsätt rulla tills ${otherPlayer.name} också når hit.`
        };
    }

    const levelSet = getLevelChallengeSet();
    const challengeKey = getChallengeKey(category, currentPlayer);
    const template = levelSet[challengeKey] || `Fler utmaningar för nivå ${currentLevel} kommer snart.`;

    return {
        title: getCategoryTitle(category, currentPlayer),
        text: template
            .replaceAll("$ACTOR", currentPlayer.name)
            .replaceAll("$TARGET", otherPlayer.name)
    };
}

function getCategoryTitle(category, player) {
    if (category === "hands") {
        return player.gender === "man" ? "HÄNDER (HONOM)" : "HÄNDER (HENNE)";
    }

    if (category === "breasts") {
        return player.gender === "man" ? "BRÖST (HONOM)" : "BRÖST (HENNE)";
    }

    if (category === "mouth") {
        return "MUN";
    }

    if (category === "butt") {
        return "RUMPA";
    }

    return "UTMANING";
}

function updateNextLevelButtonLabel() {
    const nextLevel = Math.min(currentLevel + 1, 4);
    nextLevelButton.textContent = `GÅ TILL NÄSTA NIVÅ (NIVÅ ${nextLevel})`;
}

function showDiceModal() {
    const currentPlayer = getCurrentPlayer();
    lastRoll = Math.floor(Math.random() * 6) + 1;
    dicePlayerName.textContent = currentPlayer.name.toUpperCase();
    dicePlayerName.className = `player-name ${currentPlayer.colorClass}`;
    dieFace.textContent = String(lastRoll);
    setModalState(diceModal, true);
}

function showChallengeForCurrentPosition() {
    const content = buildChallengeContent(getCurrentPlayer().position);
    challengeCategory.textContent = content.title;
    challengeText.textContent = content.text;
    resetTimer();
    setModalState(challengeModal, true);
}

function areBothPlayersAtStar() {
    return players.every((player) => player.position === maxPosition);
}

function moveCurrentPlayer() {
    if (lastRoll === null) {
        return;
    }

    const currentPlayer = getCurrentPlayer();
    currentPlayer.position = Math.min(currentPlayer.position + lastRoll, maxPosition);
    setModalState(diceModal, false);

    if (areBothPlayersAtStar()) {
        updateNextLevelButtonLabel();
        setModalState(levelProgressionModal, true);
        return;
    }

    showChallengeForCurrentPosition();
}

function advanceTurn() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    lastRoll = null;
}

function completeTurn() {
    clearInterval(timerIntervalId);
    setModalState(challengeModal, false);
    advanceTurn();
}

function resetBoardPositions() {
    players.forEach((player) => {
        player.position = 0;
    });
    lastRoll = null;
}

function showClothingInstruction() {
    clothingTitle.textContent = `NIVÅ ${currentLevel} STARTAR!`;
    clothingText.textContent = "Bered er på högre hetta. När ni så önskar är det OK att kläderna ryker inför en utmaning.";
    setModalState(clothingInstructionModal, true);
}

function goToNextLevel() {
    currentLevel = Math.min(currentLevel + 1, 4);
    setModalState(levelProgressionModal, false);
    resetBoardPositions();
    advanceTurn();
    showClothingInstruction();
}

function replayCurrentLevel() {
    setModalState(levelProgressionModal, false);
    resetBoardPositions();
    advanceTurn();
}

function showEnding() {
    setModalState(levelProgressionModal, false);
    setModalState(endingModal, true);
}

startGameButton.addEventListener("click", () => {
    setModalState(infoModal, false);
    diceTrigger.classList.remove("hidden");
});

diceTrigger.addEventListener("click", showDiceModal);
moveButton.addEventListener("click", moveCurrentPlayer);
startTimerButton.addEventListener("click", startChallengeTimer);
completeTurnButton.addEventListener("click", completeTurn);
nextLevelButton.addEventListener("click", goToNextLevel);
replayLevelButton.addEventListener("click", replayCurrentLevel);
goToEndingButton.addEventListener("click", showEnding);
startRoundButton.addEventListener("click", () => {
    setModalState(clothingInstructionModal, false);
});
closeEndingButton.addEventListener("click", () => {
    setModalState(endingModal, false);
});
