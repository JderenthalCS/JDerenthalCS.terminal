const output=document.getElementById('output');const userInput=document.getElementById('user-input');const welcomeArt=`
 __    __     _                          
/ / /\\ \\ \\___| | ___ ___  _ __ ___   ___ 
\\ \\/  \\/ / _ \\ |/ __/ _ \\| '_ \` _ \\ / _ \\
 \\  /\\  /  __/ | (_| (_) | | | | | |  __/
  \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|
`;const helpText=`
Available commands:
/aboutme  - Learn about me
/contact   - Get in touch
/education - Display academic portfolio
/projects - View my current project portfolio
/clear     - Clear the screen
`;const contactText=`
Email: <a href="mailto:jderenthalcs@gmail.com">jderenthalcs@gmail.com</a><br>
LinkedIn: <a href="https://linkedin.com/in/jderenthalcs" target="_blank">linkedin.com/in/jderenthalcs</a><br>
GitHub: <a href="https://github.com/JderenthalCS" target="_blank">github.com/JderenthalCS</a>
`;function appendOutput(text,isHTML=!1){if(isHTML){output.innerHTML+=`${text}\n`}else{output.innerHTML+=`${text.replace(/</g,"&lt;").replace(/>/g,"&gt;")}\n`}
output.scrollTop=output.scrollHeight}const lines=["Initializing system...","Loading modules...","Connecting to server...",];let index=0;function displayLine(){if(index<lines.length){appendOutput(lines[index]);index++;setTimeout(displayLine,1000)}else{appendOutput(welcomeArt);appendOutput(helpText);userInput.focus()}}
document.addEventListener('DOMContentLoaded',()=>{displayLine();userInput.focus()});const commands={"/help":"Available commands:\n/aboutme - Learn about me\n/contact - Get in touch\n/education - Display Academic Portfolio\n/projects - View my current project portfolio\n/clear - Clear the screen","/aboutme":"Name: Justin Derenthal\nField: Computer Scientist\nInterests: AI, Web Development, Cybersecurity","/contact":contactText,"/education":`
        Education:
            - B.S. in Computer Science, Farmingdale State College
            - Associate Degree in Liberal Arts, Nassau Community College

        Relevant Courses:
            - Data Structures and Algorithms
            - Networking and Security
            - Machine Learning
            - Web Development

        Activities & Societies:
            - Cybersecurity Club Member
            - Ignite Symposium Presenter
            - Chancellor's Award Committee - Board Member
    `,"/projects":`
        TikTok Post Virality Predictor:
            Developing a machine learning algorithm to predict TikTok post 
            virality by analyzing user engagement metrics, including likes,
            comments, and shares. Focused on identifying key features 
            influencing video share counts. Leveraged logistic regression,
            k-fold cross-validation, and data standardization, achieving 
            an accuracy of 87.92%.
    `,"/clear":""};const availableCommands=["/help","/aboutme","/contact","/education","/projects","/clear"];let history=[],historyIndex=-1;userInput.addEventListener("input",function(){if(!userInput.value.startsWith("/")){userInput.value="/"+userInput.value}});userInput.addEventListener("keydown",function(event){if(event.key==="Enter"){const command=userInput.value.trim().toLowerCase();if(command){history.push(command);historyIndex=history.length;processCommand(command)}userInput.value="";userInput.focus()}else if(event.key==="ArrowUp"){if(historyIndex>0){historyIndex--;userInput.value=history[historyIndex]}}else if(event.key==="ArrowDown"){if(historyIndex<history.length-1){historyIndex++;userInput.value=history[historyIndex]}else{userInput.value=""}}else if(event.key==="Tab"){event.preventDefault();const currentValue=userInput.value.trim().toLowerCase();const match=availableCommands.find(cmd=>cmd.startsWith(currentValue));if(match)userInput.value=match}});
function processCommand(command){if(commands.hasOwnProperty(command)){if(command==="/clear"){output.innerHTML="";appendOutput(welcomeArt);appendOutput(helpText);userInput.focus()}else if(command==="/contact"){output.innerHTML+=`${commands[command]}\n`;output.scrollTop=output.scrollHeight}else{appendOutput(commands[command])}}else{appendOutput(`Command not recognized: ${command}\nType /help for a list of commands.`)}}


