let prompts = []; // Keep the array empty initially

// Function to generate a random prompt
const generatePrompt = () => {
  if (prompts.length === 0) {
    alert('No prompts available. Please load data first.');
    return;
  }

  const industryFilter = document.getElementById('industryFilter').value;
  let filteredPrompts = [];

  if (industryFilter === 'all') {
    filteredPrompts = prompts; // Show all prompts
  } else {
    filteredPrompts = prompts.filter(prompt => prompt.industry === industryFilter);
  }

  if (filteredPrompts.length === 0) {
    alert('No prompts found for the selected industry.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredPrompts.length);
  const randomPrompt = filteredPrompts[randomIndex];
  const promptDisplay = document.getElementById('promptDisplay');

  promptDisplay.innerHTML = 
    `
      <h3>${randomPrompt.title}</h3>
      <p>Industry: ${randomPrompt.industry}</p>
      <p>Design Brief: ${randomPrompt['design-brief']}</p>
      <p>Deliverable: ${randomPrompt.deliverable}</p>
      <p>Deadline: ${randomPrompt.deadline}</p>
  `
  ;
};

// Event listener for the generate button
document.getElementById('generateBtn').addEventListener('click', generatePrompt);

// Fetching JSON data and storing it in prompts array
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    prompts = data; // Store the fetched data in the prompts array
  })
  .catch(error => console.error('Error fetching data:', error));
