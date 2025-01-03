import '@mantine/core/styles.css'
import './App.css'
import { Center, MantineProvider, Text, Title } from '@mantine/core'

function App() {
  return (
    <MantineProvider>
      <Title className='title'><span style={{ color: '#4444ff' }}>coder</span>.<span style={{color: 'darkkhaki'}}>type</span><span style={{ color: '#4444ff' }}>(&thinsp;)</span></Title>
      <Text id='text' style={{ fontSize: '2em', width: '50%' }}>Words</Text>
    </MantineProvider>
  )
}

window.onload = () => {
  const text = document.getElementById('text');
  if (!text) return;
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
};`
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
  let typedText = '';
  textarea.addEventListener('input', (e) => {
    if (startTime === null) {
      startTime = new Date().getTime();
    }
    typedText = textarea.value;
    console.log(typedText.length);
    console.log(todo.length);
    if (typedText === todo) {
      const endTime = new Date().getTime();
      const timeTaken = (endTime - startTime) / 1000 / 60; 
      const wordsTyped = todo.split(' ').length;
      const wpm = Math.round(wordsTyped / timeTaken);
      text.textContent = `You typed at ${wpm} words per minute!`;
      text.style.color = 'black';
      document.body.removeChild(textarea);
    } else {
      const todoParts = todo.split('');
      const typedParts = typedText.split('');
      text.innerHTML = todoParts.map((part, i) => {
        if (typedParts[i] === part) {
          return `<span style="color: black; text-decoration: underline;">${part}</span>`;
        } else if (typedParts[i] !== undefined) {
          return `<span style="color: red; text-decoration: underline;">${typedParts[i]}</span>`;
        } else {
          return `<span style="color: gray;">${part}</span>`;
        }
      }).join('');
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
