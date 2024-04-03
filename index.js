const prompts = [
    "Create a landing page for a new product launch.",
    "Design a mobile app interface for a social media platform.",
    "Create a branding package for a new startup company.",
    "Design a UI kit for a web application.",
    "Create a wireframe for a new website layout.",
    "Design a logo for a new business.",
    "Create a user flow diagram for a new feature.",
    "Design a dashboard interface for a data visualization tool.",
    "Create a style guide for a brand's visual identity.",
    "Design a packaging for a new product.",
    "Create a sitemap for a new website.",
    "Design a UI for a payment gateway.",
    "Create a user persona for a target audience.",
    "Design a UI for a music streaming app.",
    "Create a user journey map for a product.",
    "Design a UI for a news website.",
    "Create a moodboard for a brand's visual identity.",
    "Design a UI for a calendar app.",
    "Create a prototype for a new product.",
    "Design a UI for a video sharing platform.",
    "Create a UI for an e-commerce website.",
    "Design a logo for a sports team.",
    "Create a wireframe for a mobile app.",
    "Design a UI for an educational platform.",
    "Create a user flow diagram for a booking system.",
    "Design a dashboard interface for an analytics tool.",
    "Create a style guide for a fashion brand.",
    "Design a packaging for a food product.",
    "Create a sitemap for a blog website.",
    "Design a UI for a fitness tracking app.",
  ];
  
  const categories = ["Product design", "Industrial Design", "Graphic Design"];
  
  function generatePrompt() {
    const prompt = prompts[Math.floor(Math.random() * prompts.length)];
    document.getElementById("prompt").textContent = prompt;
  }
  
  document.getElementById("generatePrompt").addEventListener("click", generatePrompt);
  
  function filterPromptsByCategory() {
    const category = document.getElementById("categorySelect").value.toLowerCase();
    const filteredPrompts = prompts.filter(prompt =>
      category === "all" || prompt.toLowerCase().includes(category)
    );
    displayPrompts(filteredPrompts);
  }
  
  function displayPrompts(prompts) {
    const promptContainer = document.getElementById("promptContainer");
    promptContainer.innerHTML = "";
    prompts.forEach(prompt => {
      const promptElement = document.createElement("p");
      promptElement.textContent = prompt;
      promptContainer.appendChild(promptElement);
    });
  }
  
  document.getElementById("categorySelect").addEventListener("change", filterPromptsByCategory);
  
  window.onload = () => {
    generatePrompt();
    filterPromptsByCategory();
  };