let prompts = []; // Define an empty array to store the prompts

const generatePrompt = () => {
  if (prompts.length === 0) {
    alert('No prompts available. Please load data first.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * prompts.length);
  const randomPrompt = prompts[randomIndex];
  const promptDisplay = document.getElementById('promptDisplay');

  promptDisplay.innerHTML = `
      <h3>${randomPrompt.title}</h3>
      <p>Industry: ${randomPrompt.industry}</p>
      <p>Design Brief: ${randomPrompt['design-brief']}</p>
      <p>Deliverable: ${randomPrompt.deliverable}</p>
      <p>Deadline: ${randomPrompt.deadline}</p>
  `;
};

document.getElementById('generateBtn').addEventListener('click', generatePrompt);

// Fetch the JSON file and populate the prompts array
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Assuming your JSON data is an array of prompt objects
    prompts = data;
  })
  .catch(error => console.error('Error fetching data:', error));
