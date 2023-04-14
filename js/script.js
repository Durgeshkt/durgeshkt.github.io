const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    "Supported commands: about, experience, education, skills, certifications, contact",
  about:
    "Hello, my name is Durgesh, but many people in the infosec community know me by my pseudonym, Godzilla. I am a highly passionate and motivated individual with a deep interest in the field of cybersecurity.Over the past year, I have gained valuable experience in the field, constantly exploring new techniques and strategies to stay up to date with the latest trends and threats. I am an active participant in CTF competitions and love to challenge myself by using Hack the Box to improve my skills.Aside from my work in the infosec field, I am also an avid writer and blogger, using my platform to share my thoughts and experiences on the industry. I enjoy sharing my knowledge and experience with others and hope to inspire more people to become involved in the world of cybersecurity.In my free time, I love to explore the world around me, immersing myself in nature through hiking and camping. I am also a passionate traveler, always eager to experience new cultures and cuisines.Overall, I am a dedicated and enthusiastic individual who is committed to personal and professional growth in the field of cybersecurity. I believe that with hard work, persistence, and a continuous desire to learn and improve, anyone can achieve success in this exciting and ever-evolving field Thank you! :)",
  skills: "Ethical Hacking | Red Teaming | Social Engineering | Reverse Engineering",
  education:
    "Finished my BCA Aryabhatta Knowledge University (AKU Patna). <br> MCA from Anugrah Narayan College, Patna",
  experience:
    "- Present\nAUJAS Cyber Security.\nSocial Engineering Enthusiast\n Cloud Compluting Enthusiast\nCyber Security Analyst at THINKAPPS Solution",
  certifications:
    "CEH | Practical - Certified Ethical Hacker\n ICSI | Certied Network Security Specialist ",
  contact:
    "You can contact me on Linkedin and or via the mail:\nLinkedin - https://www.linkedin.com/in/durgeshkt\nEmail - durgeshkumartiwari007@gmail.com",
};

let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  console.log("Application loaded");
};

const execute = function (e) {
  let n;
  if ((e = e.toLowerCase()).length !== 0) {
    n = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${e}</div>`;
    if (COMMANDS.hasOwnProperty(e)) {
      n += COMMANDS[e].replace(/\n/g, "<br>");
    } else {
      n += `<div class="terminal-line">no such command: ${e}</div>`;
      console.log("Oops! no such command");
    }
    terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${n}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
};

const key = function (e) {
  const n = userInput.innerHTML;
  if (!BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    if (e.key === "Enter") {
      execute(n);
      userInput.innerHTML = "";
    } else if (e.key === "Backspace") {
      userInput.innerHTML = n.slice(0, n.length - 1);
    } else {
      userInput.innerHTML += e.key;
    }
  }
};

document.addEventListener("keydown", key);
document.addEventListener("DOMContentLoaded", app);
