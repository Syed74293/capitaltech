const random = ["I need a new graphics card for my gaming PC.", "My smartphone battery needs to be replaced.", "I want to buy a high-end gaming laptop for my gaming needs.", "I'm thinking about getting a smartwatch to track my fitness activities.", "I need to upgrade my home theater system with a new soundbar.", "I'm considering purchasing a wireless gaming mouse for better control.", "My old printer is not working properly, I need a new one.", "I want to get a pair of noise-cancelling headphones for my work.", "I need a portable power bank for my travels.", "I'm thinking about getting a VR headset to experience virtual reality."];
const Mobile = window.matchMedia("(max-width: 864px)").matches;
const S_Mobile = window.matchMedia("(max-width: 499px)").matches;

document.getElementById('msg').placeholder = random[Math.floor(Math.random() * (random.length - 0) + 0)];

if (Mobile || S_Mobile) {
    document.getElementById('msg').rows = '2';
}