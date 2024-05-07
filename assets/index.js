  // On borading pop-up
  // On borading pop-up
  // On borading pop-up
  // On borading pop-up

document.addEventListener('DOMContentLoaded', () => {
  const popupOverlay = document.getElementById('popupOverlay');
  const closePopup = document.getElementById('closePopup');

  popupOverlay.style.visibility = 'visible';

  closePopup.addEventListener('click', () => {
      popupOverlay.style.visibility = 'hidden';
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopup = document.getElementById('closePopup');

    popupOverlay.classList.add('active');

    closePopup.addEventListener('click', () => {
        popupOverlay.classList.remove('active');
    });
});

  // filter for the industry
  // filter for the industry
  // filter for the industry
  // filter for the industry

const generatePrompt = () => {
  const industryFilter = document.getElementById('industryFilter').value;
  let filteredPrompts = [];

  if (industryFilter === 'all') {
    filteredPrompts = prompts; 
  } else {
    filteredPrompts = prompts.filter(prompt => prompt.industry === industryFilter); 
  }

// randomizing the design briefs 
// randomizing the design briefs 
// randomizing the design briefs 
// randomizing the design briefs 

  const randomIndex = Math.floor(Math.random() * filteredPrompts.length);
  const randomPrompt = filteredPrompts[randomIndex];

  const promptDisplay = document.getElementById('promptDisplay');

  promptDisplay.innerHTML = 
    `
      <div class="background" style="background: ${randomPrompt['background']}">
        <h3 class="design-brief">${randomPrompt['design-brief']}</h3>
        <p class="deliverable"> Deliverable: ${randomPrompt.deliverable}</p>
      </div>
    `
  ;
};

// Generate button  
// Generate button  
// Generate button  
// Generate button  

document.getElementById('generateBtn').addEventListener('click', generatePrompt);

// Fetching JSON data and storing it in prompts array
// Fetching JSON data and storing it in prompts array
// Fetching JSON data and storing it in prompts array

fetch('assets/data.json')
  .then(response => response.json())
  .then(data => {
    prompts = data; 
    generatePrompt(); 
  })

// Generate prompt when the page load
// Generate prompt when the page loads
// Generate prompt when the page loads
// Generate prompt when the page loads

window.onload = generatePrompt;
