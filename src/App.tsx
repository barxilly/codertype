import '@mantine/core/styles.css'
import './App.css'
import { Button, Card, Center, MantineProvider, Text, Title } from '@mantine/core'
import { FaCog } from 'react-icons/fa'
import { useState } from 'react'

function App() {
  const [settingsOpened, setSettingsOpened] = useState(false)

  function settings(){
    const settings = document.getElementById('settingsMenu')
    if (!settings) return;
    if (settingsOpened) {
      setSettingsOpened(false)
      settings.style.display = 'none'
    } else{
      setSettingsOpened(true)
      settings.style.display = ''
    }
  }

  return (
    <MantineProvider>
      <Title onClick={() => { window.location.reload() }} className='title'><span style={{ color: '#4444ff' }}>coder</span>.<span style={{ color: 'darkkhaki' }}>type</span><span style={{ color: '#4444ff' }}>(&thinsp;)</span></Title>
      <Text id='timer'></Text>
      <Text id='text' style={{ fontSize: '2em', width: '80%', display: 'none' }}>Words</Text>
      <Center id='gbtn' style={{ height: '100vh' }}>
        <Button id='gogo' onClick={gogo}>Start</Button>
      </Center>
      <Button id='settingsButton' onClick={settings}><FaCog /></Button>
      <Center id='settingsMenu' style={{display:'none'}}>
        <Card shadow='md' radius='md' padding='xl' style={{position:'relative'}}>
          <Button id='settingsClose' onClick={settings} style={{position:'absolute', top:'0.5em', right:'0.5em', borderRadius:'50%', padding:'5px', backgroundColor:'transparent', color:'black', fontSize:'1.5em'}}>&times;</Button>
          <Title order={3}>Settings</Title>

        </Card>
      </Center>
    </MantineProvider>
  )
}

function gogo() {
  const text = document.getElementById('text');
  if (!text) return;
  text.style.display = 'block';
  const gbtn = document.getElementById('gbtn');
  if (!gbtn) return;
  gbtn.style.display = 'none';
  const snippets = [
    `function greet(name) {
  return \`Hello, \${name}!\`;
}`,
    `const add = (a, b) => a + b;`,
    `const person = {
  name: 'John',
  age: 30,
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
};`,
    `const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);`,
    `const fetchData = async () => {
  const res = await fetch('https://api.example.com/data');
  return await res.json();
};`,
    `document.querySelector('button').addEventListener('click', () => {
  alert('Button clicked!');
});`,
    `setTimeout(() => {
  console.log('Time is up!');
}, 1000);`,
    `const isEmail = email => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);`,
    `const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};`,
    `localStorage.setItem('user', JSON.stringify({ name: 'Jane' }));
const user = JSON.parse(localStorage.getItem('user'));`,
    `const div = document.createElement('div');
div.textContent = 'Hello World';
document.body.appendChild(div);`,
    `const reverseString = str => str.split('').reverse().join('');`,
    `const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);`,
    `const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};`,
    `const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));`,
    `const deepClone = obj => JSON.parse(JSON.stringify(obj));`,
    `const isPalindrome = str => {
  const sanitized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return sanitized === sanitized.split('').reverse().join('');
};`,
    `function launchNukes(city) {
  const loc = [city.lat,city.long];
  const url = 'https://api.defense.gov/supersecretapi/launchnuke?lat='+loc[0]+'&long='+loc[1];
  fetch(url).then(res => res.json()).then(data => console.log(data));
  console.log('Nukes are launched!');
}
`
  ];
  const todo = snippets[Math.floor(Math.random() * snippets.length)] + '\n' + snippets[Math.floor(Math.random() * snippets.length)] + '\n' + snippets[Math.floor(Math.random() * snippets.length)];
  text.textContent = todo;
  text.style.color = 'gray';
  text.style.whiteSpace = 'pre';
  const textarea = document.createElement('textarea');
  textarea.style.position = 'absolute';
  textarea.id = 'textarea';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.focus();
  let startTime: number | null = null;
  let correctChars = 0;
  let totalChars = 0;
  const timerInterval = setInterval(() => {
    if (startTime !== null) {
      const ttxt = document.getElementById('timer');
      if (ttxt) {
        // Time to 2dp
        ttxt.innerHTML = `${((new Date().getTime() - startTime) / 1000).toFixed(3)}s`;
      }
    }
  }, 10);
  let typedText = '';
  textarea.addEventListener('input', () => {
    if (startTime === null) {
      startTime = new Date().getTime();
    }
    const newText = textarea.value;
    if (newText.length < typedText.length) {
      textarea.value = typedText; // Prevent deletion
      return;
    }
    typedText = newText;
    console.log(typedText.length);
    console.log(todo.length);
    totalChars = typedText.length;
    correctChars = 0;
    const todoParts = todo.split('');
    const typedParts = typedText.split('');
    text.innerHTML = todoParts.map((part, i) => {
      if (typedParts[i] === part) {
        correctChars++;
        if (part == '\n') {
          return `<span style="color: black; text-decoration: underline;">⁋${part}</span>`;
        } else {
          return `<span style="color: black; text-decoration: underline;">${part}</span>`;
        }
      } else if (typedParts[i] !== undefined && part == '\n') {
        return `<span style="color: red; text-decoration: underline;">${typedParts[i]}\n</span>`;
      } else if (typedParts[i] !== undefined) {
        return `<span style="color: red; text-decoration: underline;">${typedParts[i]}</span>`;
      } else {
        return `<span style="color: gray;">${part}</span>`;
      }
    }).join('');
    const accuracy = ((correctChars / totalChars) * 100).toFixed(2);
    const accuracyText = document.getElementById('accuracy');
    if (accuracyText) {
      accuracyText.innerHTML = `Accuracy: ${accuracy}%`;
    }
    if (typedText === todo || typedText.length == todo.length) {
      const endTime = new Date().getTime();
      const timeTaken = (endTime - startTime) / 1000 / 60;
      const wordsTyped = todo.split(' ').length;
      const wpm = Math.round(wordsTyped / timeTaken);
      text.textContent = `You typed at ${wpm} words per minute with ${accuracy}% accuracy!`;
      text.style.color = 'black';
      document.body.removeChild(textarea);
      clearInterval(timerInterval);
    }
  });
}



window.onclick = () => {
  document.getElementById('textarea')?.focus();
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    const textarea = document.getElementById('textarea') as HTMLTextAreaElement;
    if (textarea) {
      textarea.dispatchEvent(new KeyboardEvent('keydown', { key: 'Space' }));
      textarea.dispatchEvent(new KeyboardEvent('keydown', { key: 'Space' }));
    }
  }
});

export default App