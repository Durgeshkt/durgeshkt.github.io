const BLACKLISTED_KEY_CODES=[38],COMMANDS={help:'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">certifications</span>, <span class="code">contact</span>',about:"Hello, my name is Durgesh, but many people in the infosec community know me by my pseudonym, Godzilla. I am a highly passionate and motivated individual with a deep interest in the field of cybersecurity.Over the past year, I have gained valuable experience in the field, constantly exploring new techniques and strategies to stay up to date with the latest trends and threats. I am an active participant in CTF competitions and love to challenge myself by using Hack the Box to improve my skills.Aside from my work in the infosec field, I am also an avid writer and blogger, using my platform to share my thoughts and experiences on the industry. I enjoy sharing my knowledge and experience with others and hope to inspire more people to become involved in the world of cybersecurity.In my free time, I love to explore the world around me, immersing myself in nature through hiking and camping. I am also a passionate traveler, always eager to experience new cultures and cuisines.Overall, I am a dedicated and enthusiastic individual who is committed to personal and professional growth in the field of cybersecurity. I believe that with hard work, persistence, and a continuous desire to learn and improve, anyone can achieve success in this exciting and ever-evolving field Thank you! :)",skills:"Ethical Hacking | Red Teaming | Social Engineering | Reverse Engineering ",education:"Finished my BCA Aryabhatta Knowledge University (AKU Patna). <br> MCA from Anugrah Narayan College, Patna",experience:'<span class="code"> - Present<br> AUJAS Cyber Security  <br> Social Engineering Enthusiast <br> Cloud Compluting Enthusiast <br> Cyber Security Analyst at THINKAPPS Solution',certifications:"CEH | Practical - Certified Ethical Hacker<br> ICSI | Certied Network Security Specialist <br>",contact:"You can contact me on Linkedin and or via the mail:<br><a href='https://www.linkedin.com/in/durgeshkt' class='success link'>Linkedin</a>, <a href='mailto:Durgeshkumartiwari007@gmail.com' class='success link'>Email</a>,"};let userInput,terminalOutput;const app=()=>{userInput=document.getElementById("userInput"),terminalOutput=document.getElementById("terminalOutput"),document.getElementById("dummyKeyboard").focus(),console.log("Application loaded")},execute=function(e){let n;0!==(e=e.toLowerCase()).length&&(n=`<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${e}</div>`,COMMANDS.hasOwnProperty(e)?n+=COMMANDS[e]:(n+=`<div class="terminal-line">no such command: ${e}</div>`,console.log("Oops! no such command")),terminalOutput.innerHTML=`${terminalOutput.innerHTML}<div class="terminal-line">${n}</div>`,terminalOutput.scrollTop=terminalOutput.scrollHeight)},key=function(e){const n=userInput.innerHTML;if(!BLACKLISTED_KEY_CODES.includes(e.keyCode))return"Enter"===e.key?(execute(n),void(userInput.innerHTML="")):void(userInput.innerHTML=n+e.key)},backspace=function(e){8!==e.keyCode&&46!==e.keyCode||(userInput.innerHTML=userInput.innerHTML.slice(0,userInput.innerHTML.length-1))};document.addEventListener("keydown",backspace),document.addEventListener("keypress",key),document.addEventListener("DOMContentLoaded",app);