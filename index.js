let prompts = []; // Keeping the array empty 

const generatePrompt = () => {
  const industryFilter = document.getElementById('industryFilter').value;
  let filteredPrompts = [];

  if (industryFilter === 'all') {
    filteredPrompts = prompts; // Shows all the prompts
  } else {
    filteredPrompts = prompts.filter(prompt => prompt.industry === industryFilter);
  }

  const randomIndex = Math.floor(Math.random() * filteredPrompts.length);
  const randomPrompt = filteredPrompts[randomIndex];
  const industryColor = randomPrompt.color; // Get the color for the industry

  const promptDisplay = document.getElementById('promptDisplay');

  promptDisplay.innerHTML = 
    `
      <p class="industry" style="background-color: ${industryColor};"> ${randomPrompt.industry}</p>
      <h3 class="design-brief">${randomPrompt['design-brief']}</h3>
      <p class="title">Title: ${randomPrompt.title}</p>
      <p class="deliverable"> Deliverable: ${randomPrompt.deliverable}</p>
    `
  ;
};


// let timerInterval;
// let timerSeconds = 0;
// let timerMinutes = 0;
// let timerHours = 0;

// const startTimer = () => {
//     const seconds = parseInt(document.getElementById('secondsInput').value) || 0;
//     const minutes = parseInt(document.getElementById('minutesInput').value) || 0;
//     const hours = parseInt(document.getElementById('hoursInput').value) || 0;

//     timerSeconds = seconds;
//     timerMinutes = minutes;
//     timerHours = hours;

//     clearInterval(timerInterval);
//     timerInterval = setInterval(updateTimer, 1000);
// };

// const setTimer = (minutes) => {
//     timerHours = Math.floor(minutes / 60);
//     timerMinutes = minutes % 60;
//     timerSeconds = 0;

//     document.getElementById('hoursInput').value = timerHours;
//     document.getElementById('minutesInput').value = timerMinutes;
//     document.getElementById('secondsInput').value = timerSeconds;

//     startTimer();
// };

// const updateTimer = () => {
//     timerSeconds--;
//     if (timerSeconds < 0) {
//         timerSeconds = 59;
//         timerMinutes--;
//         if (timerMinutes < 0) {
//             timerMinutes = 59;
//             timerHours--;
//             if (timerHours < 0) {
//                 clearInterval(timerInterval);
//                 alert('Timer expired!');
//             }
//         }
//     }

//     const formattedTime = formatTime(timerHours) + ':' + formatTime(timerMinutes) + ':' + formatTime(timerSeconds);
//     document.getElementById('timer').innerText = formattedTime;
// };

// const formatTime = (time) => {
//     return (time < 10) ? '0' + time : time;
// };

// document.getElementById('startBtn').addEventListener('click', startTimer);

// document.getElementById('resetBtn').addEventListener('click', () => {
//     clearInterval(timerInterval);
//     timerSeconds = 0;
//     timerMinutes = 0;
//     timerHours = 0;
//     document.getElementById('timer').innerText = '00:00:00';
// });


// Generate prompt button.
document.getElementById('generateBtn').addEventListener('click', generatePrompt);

// Fetching JSON data and storing it in prompts array
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    prompts = data; // Store the fetched data in the prompts array
    generatePrompt(); // Call generatePrompt function to display a random prompt
  })
  .catch(error => console.error('Error fetching data:', error));

// Generate prompt when the page loads
window.onload = generatePrompt;
