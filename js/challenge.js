const counter = document.querySelector('#counter')
const plusButton = document.querySelector('#plus')
const minusButton = document.querySelector('#minus')
const likeButton = document.querySelector('#heart')
const pauseButton = document.querySelector('#pause')
const commentForm = document.querySelector('#comment-form')
const likes = {};

let timerValue = 0
let isCounterRunning = true;

function timerCount() {
    const timer = setInterval(incrementTimer, 1000);
}

plusButton.addEventListener("click", incrementTimer)
minusButton.addEventListener("click", decrementTimer)
likeButton.addEventListener("click", incrementLikes)
pauseButton.addEventListener("click", toggleButtons)
commentForm.addEventListener("submit", submitComment)


function incrementTimer() {
    if (isCounterRunning){
        timerValue++
        counter.textContent = timerValue
    }
}

function decrementTimer() {
    timerValue--
    counter.textContext = timerValue
}

function incrementLikes() {
   if (likes[timerValue]){
       likes[timerValue]++;
       document.querySelector(`#likeVal-${timerValue}`).textContent = `${likes[timerValue]} times.`;
   } else {
       likes[timerValue] = 1;
       const likeListItem = document.createElement('li');
       likeListItem.innerHTML = `${timerValue} has been liked <span id="likeVal-${timerValue}">${likes[timerValue]} time.</span>`;
       document.querySelector('.likes').append(likeListItem);
   }
}

function toggleButtons() {
    isCounterRunning = !isCounterRunning;
    document.querySelectorAll("button").forEach((button) => {
      if (button.id !== "pause") {
        button.disabled = !isCounterRunning;
      } else {
        if (isCounterRunning) {
          button.textContent = "pause";
        } else {
          button.textContent = "resume";
        }
      }
    });
}

function submitComment(e) {
    e.preventDefault();
    const commentVal = e.target.comment.value;
    const newComment = document.createElement('p')
    newComment.textContent = commentVal
    document.querySelector('.comments').append(newComment)
}

timerCount();