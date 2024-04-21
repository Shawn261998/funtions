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

// Generate prompt button.
document.getElementById('generateBtn').addEventListener('click', generatePrompt);

// Fetching JSON data and storing it in prompts array
fetch('assets/data.json')
  .then(response => response.json())
  .then(data => {
    prompts = data; // Store the fetched data in the prompts array
    generatePrompt(); // Call generatePrompt function to display a random prompt
  })
  .catch(error => console.error('Error fetching data:', error));

// Generate prompt when the page loads
window.onload = generatePrompt;
