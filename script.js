// Array of speaker data with dummy profile image URLs
const speakers = [
  {
    name: "John Doe",
    position: "Chief Marketing Officer, Acme Corp",
    details:
      "Monotonectally synergize business communities rather than client-centric convergence...",
    imgUrl: "https://picsum.photos/id/1005/200/200", // Dummy image URL
  },
  {
    name: "Jane Smith",
    position: "Chief Engagement Officer, Acquia",
    details:
      "Assertively unleash cross-platform best practices rather than pandemic total linkage...",
    imgUrl: "https://picsum.photos/id/1011/200/200",
  },
  {
    name: "Michael Johnson",
    position: "Chief Technical Developer, Pantheon",
    details:
      "Synergistically monetize parallel infomediaries whereas 2.0 mindshare...",
    imgUrl: "https://picsum.photos/id/1027/200/200",
  },
  {
    name: "Sarah Connor",
    position: "Chief Marketing Officer, Specbee",
    details:
      "Dramatically pursue real-time markets through e-business strategic theme areas...",
    imgUrl: "https://picsum.photos/id/1012/200/200",
  },
  {
    name: "John Doe",
    position: "Chief Marketing Officer, Acme Corp",
    details:
      "Monotonectally synergize business communities rather than client-centric convergence...",
    imgUrl: "https://picsum.photos/id/1005/200/200", // Dummy image URL
  },
  {
    name: "Jane Smith",
    position: "Chief Engagement Officer, Acquia",
    details:
      "Assertively unleash cross-platform best practices rather than pandemic total linkage...",
    imgUrl: "https://picsum.photos/id/1011/200/200",
  },
  {
    name: "Michael Johnson",
    position: "Chief Technical Developer, Pantheon",
    details:
      "Synergistically monetize parallel infomediaries whereas 2.0 mindshare...",
    imgUrl: "https://picsum.photos/id/1027/200/200",
  },
  {
    name: "Sarah Connor",
    position: "Chief Marketing Officer, Specbee",
    details:
      "Dramatically pursue real-time markets through e-business strategic theme areas...",
    imgUrl: "https://picsum.photos/id/1012/200/200",
  },
  
];

// Get references to DOM elements
const speakerCarousel = document.getElementById('speakerCarousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const speakerModal = document.getElementById('speakerModal');
const closeModalButton = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const speakerName = document.getElementById('speakerName');
const speakerPosition = document.getElementById('speakerPosition');
const speakerDetails = document.getElementById('speakerDetails');

// Generate speaker cards dynamically
speakers.forEach((speaker, index) => {
  const speakerCard = document.createElement('div');
  speakerCard.classList.add('bg-white', 'shadow-lg', 'rounded-lg', 'p-6', 'w-72', 'flex-shrink-0', 'mx-2');
  speakerCard.innerHTML = `
    <img src="${speaker.imgUrl}" alt="${speaker.name} profile image" loading="lazy" class="profile-img rounded-t-lg">
    <h2 class="text-lg font-bold mb-2 mt-4">${speaker.name}</h2>
    <p class="text-sm text-gray-500 mb-4">${speaker.position}</p>
    <button class="custom-button text-white rounded-lg" data-index="${index}">View Details</button>
  `;
  speakerCarousel.appendChild(speakerCard);
});

// Add event listener to open modal when speaker card is clicked
speakerCarousel.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-index]');
  if (button) {
    const speakerIndex = button.getAttribute('data-index');
    const speaker = speakers[speakerIndex];

    // Fill modal with speaker details
    modalImage.src = speaker.imgUrl;
    speakerName.textContent = speaker.name;
    speakerPosition.textContent = speaker.position;
    speakerDetails.textContent = speaker.details;

    // Show modal and ensure carousel shifts down
    speakerModal.classList.add('active');
  }
});

// Close modal when close button is clicked
closeModalButton.addEventListener('click', () => {
  speakerModal.classList.remove('active');
});

// Carousel navigation logic
const scrollStep = 300; // Number of pixels to scroll per button press

nextBtn.addEventListener('click', () => {
  speakerCarousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  speakerCarousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
});
