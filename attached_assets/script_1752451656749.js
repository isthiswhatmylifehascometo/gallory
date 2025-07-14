function getRandomGreeting(greetings) {
  // Use crypto for better randomness if available
  if (window.crypto && window.crypto.getRandomValues) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return greetings[array[0] % greetings.length];
  }
  return greetings[Math.floor(Math.random() * greetings.length)];
}

function getGreeting() {
  const now = new Date();
  const hour = now.getHours();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = now.toLocaleDateString('en-US', options);

  const morningGreetings = [
    `Good morning Jheela! It's ${currentDate} and I hope you wake up feeling beautiful and loved x`,
    `Good morning Jheelie! Today is ${currentDate} and you're still the prettiest girl in the world x`,
    `Good morning Jheeeeeeeel! Wishing you a day as lovely as you are. Stay hydrated x`,
    `Good morning Jheelie meelie! It's ${currentDate} and I hope your smile shines all day x`,
    `Good morning Jheel! Remember you're amazing and today will be too x`,
    `Good morning Jheelu! A new day, a new chance to make memories x, have lots of fun`,
    `Good morning to the girl with the prettiest eyes aka jheel! It's ${currentDate} and I hope your dreamt of me x`,
    `Good morning Jheel! The world is brighter because of you x`,
    `Good morning Jheel sihag! Wishing you energy and happiness all day x`,
    `Good morning Jheel aka the prettiest girl in the world! It's ${currentDate} and you make every morning special x`
  ];

  const afternoonGreetings = [
    `Good afternoon beautiful! How's your day going? I'm always here for you x`,
    `Good afternoon Jheela! Hope your day is filled with laughter and light and do tell me about it when I get back x`,
    `Good afternoon Jheeeeeeeeeel! Just checking in to remind you I'm thinking of you x`,
    `Good afternoon Jheeeeel! Hope you're taking care of yourself today x`,
    `Good afternoon Jheelie! Sending you a little love for the rest of your day x`,
    `Good afternoon Jheelie meelie! Hope your afternoon is as wonderful as you are x`,
    `Good afternoon Jhil mil! I was just thinking of you and you opened the website, do send me a selfie x`,
    `Good afternoon Jheel! Hope your day is going smoothly and eat well okay? x`,
    `Good afternoon Jheel! Take a breath and enjoy the moment, look outside, its so sunny x`,
    `Good afternoon Jheel! I'm always just a message away x :)`
  ];

  const eveningGreetings = [
    `Good evening gorgeous! Time to unwind and enjoy yourself x`,
    `Good evening Jheel! Hope you find some time to relax tonight x`,
    `Good evening my basketball player! You deserve a peaceful and happy evening x`,
    `Good evening Jheelie! Take some time for yourself, you've earned it x`,
    `Good evening Jheela! Let the stress of the day go away and have some rest x`,
    `Good evening Jheelu! I hope you are not too tired cause we still have the night to go through :) x`,
    `Good evening Jheeeeeeeeel! Hope you do something fun this evening x`,
    `Good evening Jheelie! Remember to rest and recharge, bahot thak gayi hogi tu I know x`,
    `Good evening Jheelie meelie! Enjoy your evening, I am always there for you, just call me x`,
    `Good evening Jheel! Time to enjoy the little things and I hope the sunset is beautiful, do send me a picture of it x`
  ];

  const nightGreetings = [
    `Goodnight princess, see you in my dreams. Rest well and wake up refreshed tomorrow x`,
    `Goodnight my baby, hope you have the sweetest dreams tonight (of me ofcc) x`,
    `Goodnight gorgeous, sleep tight and know you're loved, (very very much ) x`,
    `Goodnight jheela, may your dreams be peaceful and freaky and may it have me in it, jk sweet dreams babe x`,
    `Goodnight jaan, sending you a hug before you sleep, wish I was really there hugging you but this will have to do, see you x`,
    `Goodnight jaaaaaan, dont miss me too much, oh also I see that you are enjoying this website okay anyways see you my love x`,
    `Goodnight jheeli, achhe se sona and I had so much fun talking to you today, see you tomorrow :) x`,
    `Goodnight princess, rest easy and wake up smiling, dont forget to wake me up please :P x`,
    `Goodnight my iris, I'll be here when you wake up, or maybe you will have to wake my lazy ass up by saying wake up sid haha x`,
    `Goodnight princess, wishing you a calm and restful night x`
  ];

  if (hour >= 4 && hour < 12) {
    return getRandomGreeting(morningGreetings);
  } else if (hour >= 12 && hour < 17) {
    return getRandomGreeting(afternoonGreetings);
  } else if (hour >= 17 && hour < 23) {
    return getRandomGreeting(eveningGreetings);
  } else {
    return getRandomGreeting(nightGreetings);
  }
}

// Typewriter effect function
function typewriterEffect(element, text, speed = 50) {
  element.textContent = '';
  let i = 0;
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Enhanced message display with animations
function displayGreetingWithEffect() {
  const greeting = getGreeting();
  const messageContainer = document.getElementById('message-container');
  const mainTitle = document.getElementById('main-title');
  const mainText = document.getElementById('main-text');
  
  // Update title based on time of day
  const hour = new Date().getHours();
  let timeOfDay = '';
  
  if (hour >= 4 && hour < 12) {
    timeOfDay = 'Good Morning';
  } else if (hour >= 12 && hour < 17) {
    timeOfDay = 'Good Afternoon';
  } else if (hour >= 17 && hour < 23) {
    timeOfDay = 'Good Evening';
  } else {
    timeOfDay = 'Good Night';
  }
  
  // Update main title and subtitle
  mainTitle.textContent = timeOfDay;
  mainText.textContent = 'A special message just for you...';
  
  // Clear existing messages
  messageContainer.innerHTML = '';
  
  // Create greeting message element
  const greetingElement = document.createElement('div');
  greetingElement.className = 'message greeting-message';
  greetingElement.style.fontSize = '1.1rem';
  greetingElement.style.lineHeight = '1.6';
  greetingElement.style.background = 'rgba(255, 255, 255, 0.15)';
  greetingElement.style.backdropFilter = 'blur(15px)';
  greetingElement.style.border = '2px solid rgba(255, 255, 255, 0.3)';
  greetingElement.style.borderRadius = '15px';
  greetingElement.style.padding = '25px';
  greetingElement.style.margin = '20px 0';
  greetingElement.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
  
  messageContainer.appendChild(greetingElement);
  
  // Add typewriter effect to the greeting
  setTimeout(() => {
    typewriterEffect(greetingElement, greeting, 30);
  }, 1000);
  
  // Add a subtle pulse animation
  setTimeout(() => {
    greetingElement.style.animation = 'pulse 2s infinite';
  }, greeting.length * 30 + 2000);
}

// Add pulse animation to CSS (you can add this to your styles.css)
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }
  
  .greeting-message {
    transition: all 0.3s ease;
  }
  
  .greeting-message:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }
`;
document.head.appendChild(style);

// Main initialization
document.addEventListener('DOMContentLoaded', function() {
  const messageContainer = document.getElementById('message-container');
  const video = document.getElementById('background-video');
  
  // Video controls
  video.addEventListener('loadeddata', function() {
    video.play().catch(function(error) {
      console.log('Video autoplay failed:', error);
    });
  });
  
  // Handle video loading errors
  video.addEventListener('error', function() {
    console.log('Video failed to load');
    document.querySelector('.video-container').style.background = 
      'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #ff9ff3 100%)';
  });
  
  // Display greeting with delay for dramatic effect
  setTimeout(() => {
    displayGreetingWithEffect();
  }, 2000);
  
  // Optional: Refresh greeting every hour
  setInterval(() => {
    displayGreetingWithEffect();
  }, 3600000); // 1 hour in milliseconds
  
  // Add click event to refresh greeting
  messageContainer.addEventListener('click', function() {
    displayGreetingWithEffect();
  });
});

// Make functions globally available
window.getGreeting = getGreeting;
window.displayGreetingWithEffect = displayGreetingWithEffect;
window.typewriterEffect = typewriterEffect;
