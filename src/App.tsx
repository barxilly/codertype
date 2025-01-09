import '@mantine/core/styles.css'
import './App.css'
import { Button, Card, Center, Checkbox, List, MantineProvider, NativeSelect, Stack, Text, Title } from '@mantine/core'
import { FaCog } from 'react-icons/fa'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables);
import { useState } from 'react'

function App() {
  const [settingsOpened, setSettingsOpened] = useState(false)
  const [backspace, setBackspace] = useState(true)
  const [autoenter, setAutoenter] = useState(true)
  const [showVideo, setShowVideo] = useState(false)


  let backspaces = 0;

  const comingSoon = () => {
    const modal = document.getElementById('comingSoonModal')
    if (!modal) {
      console.error('comingSoonModal element not found');
      return;
    }
    if (modal.style.display === 'none') {
      modal.style.display = ''
    } else {
      modal.style.display = 'none'
    }
  }

  const whatsNew = () => {
    const modal = document.getElementById('whatsNewModal')
    if (!modal) {
      console.error('whatsNewModal element not found');
      return;
    }
    if (modal.style.display === 'none') {
      console.log('whatsNewModal opened');
      modal.style.display = ''
    } else {
      console.log('whatsNewModal closed');
      modal.style.display = 'none'
    }
  }

  function gogo() {
    const text = document.getElementById('text');
    if (!text) {
      console.error('text element not found');
      return;
    }
    text.style.display = 'block';
    const gbtn = document.getElementById('gbtn');
    if (!gbtn) {
      console.error('gbtn element not found');
      return;
    }
    gbtn.style.display = 'none';
    const JSsnippets = [
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
      `const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};`,
      `const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });`,
      `const getQueryParam = param => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};`,
      `const flattenArray = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);`,
      `const uniqueArray = arr => [...new Set(arr)];`,
      `const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));`,
      `const sortByKey = (arr, key) => arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));`,
      `const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};`,
      `const toggleClass = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
};`,
      `const copyToClipboard = text => {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Text copied to clipboard');
  });
};`,
      `const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};`,
      `const binarySearch = (arr, target) => {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};`
    ];
    const PythonSnippets = [
      `def greet(name):
    return f"Hello, {name}!"`,

      `def add(a, b):
    return a + b`,

      `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    def greet(self):
        return f"Hi, I'm {self.name}"`,

      `numbers = [1, 2, 3, 4]
squared = [num ** 2 for num in numbers]`,

      `import requests
def fetch_data(url):
    response = requests.get(url)
    return response.json()`,

      `def factorial(n):
    return 1 if n <= 1 else n * factorial(n - 1)`,

      `is_email = lambda email: bool(re.match(r'^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$', email))`,

      `def get_random_int(min_val, max_val):
    return random.randint(min_val, max_val)`,

      `with open('file.txt', 'r') as file:
    content = file.read()`,

      `def reverse_string(s):
    return s[::-1]`,

      `def capitalize(s):
    return s[0].upper() + s[1:]`,

      `def is_palindrome(s):
    sanitized = re.sub(r'[^a-zA-Z0-9]', '', s.lower())
    return sanitized == sanitized[::-1]`,

      `def debounce(func, delay):
    import time
    def wrapper(*args, **kwargs):
        time.sleep(delay)
        return func(*args, **kwargs)
    return wrapper`,

      `def merge_dicts(dict1, dict2):
    return {**dict1, **dict2}`,

      `import time
def sleep_for(seconds):
    time.sleep(seconds)`,

      `def chunk_list(lst, size):
    return [lst[i:i + size] for i in range(0, len(lst), size)]`,

      `def flatten_list(lst):
    return [item for sublist in lst for item in sublist]`,

      `def unique_list(lst):
    return list(set(lst))`,

      `import uuid
def generate_uuid():
    return str(uuid.uuid4())`,

      `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,

      `def read_file(file_path):
    with open(file_path, 'r') as file:
        return file.read()`,

      `def write_file(file_path, content):
    with open(file_path, 'w') as file:
        file.write(content)`,

      `import json
def save_to_json(file_path, data):
    with open(file_path, 'w') as file:
        json.dump(data, file)`,

      `import json
def load_from_json(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)`
    ];
    const CPPsnippets = [
      `#include <iostream>
using namespace std;
void greet(const string& name) {
    cout << "Hello, " << name << "!" << endl;
}`,

      `int add(int a, int b) {
    return a + b;
}`,

      `class Person {
  public:
    string name;
    int age;
    Person(string name, int age) : name(name), age(age) {}
    void greet() {
        cout << "Hi, I'm " << name << endl;
    }
};`,

      `#include <vector>
#include <algorithm>
vector<int> numbers = {1, 2, 3, 4};
vector<int> squared;
transform(numbers.begin(), numbers.end(), back_inserter(squared), [](int num) {
    return num * num;
});`,

      `#include <fstream>
#include <string>
void writeToFile(const string& fileName, const string& content) {
    ofstream file(fileName);
    file << content;
    file.close();
}
string readFromFile(const string& fileName) {
    ifstream file(fileName);
    string content((istreambuf_iterator<char>(file)), istreambuf_iterator<char>());
    file.close();
    return content;
}`,

      `int factorial(int n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}`,

      `#include <regex>
#include <string>
bool isEmail(const string& email) {
    const regex pattern("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
    return regex_match(email, pattern);
}`,

      `#include <cstdlib>
#include <ctime>
int getRandomInt(int min, int max) {
    srand(time(0));
    return min + (rand() % (max - min + 1));
}`,

      `#include <string>
#include <algorithm>
string reverseString(const string& str) {
    string reversed = str;
    reverse(reversed.begin(), reversed.end());
    return reversed;
}`,

      `#include <string>
string capitalize(const string& str) {
    if (str.empty()) return str;
    string result = str;
    result[0] = toupper(result[0]);
    return result;
}`,

      `#include <string>
#include <cctype>
#include <algorithm>
bool isPalindrome(const string& str) {
    string sanitized;
    for (char c : str) {
        if (isalnum(c)) sanitized += tolower(c);
    }
    string reversed = sanitized;
    reverse(reversed.begin(), reversed.end());
    return sanitized == reversed;
}`,

      `#include <vector>
#include <map>
#include <algorithm>
template <typename T>
std::vector<T> uniqueVector(const std::vector<T>& vec) {
    std::vector<T> result = vec;
    std::sort(result.begin(), result.end());
    result.erase(std::unique(result.begin(), result.end()), result.end());
    return result;
}`,

      `#include <vector>
std::vector<std::vector<int>> chunkArray(const std::vector<int>& arr, size_t size) {
    std::vector<std::vector<int>> chunks;
    for (size_t i = 0; i < arr.size(); i += size) {
        chunks.push_back(std::vector<int>(arr.begin() + i, arr.begin() + std::min(arr.size(), i + size)));
    }
    return chunks;
}`,

      `#include <vector>
#include <algorithm>
int binarySearch(const std::vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,

      `#include <iostream>
#include <thread>
#include <chrono>
void sleepFor(int milliseconds) {
    std::this_thread::sleep_for(std::chrono::milliseconds(milliseconds));
}`,

      `#include <uuid/uuid.h>
#include <string>
std::string generateUUID() {
    uuid_t uuid;
    uuid_generate(uuid);
    char uuidStr[37];
    uuid_unparse(uuid, uuidStr);
    return std::string(uuidStr);
}`
    ];

    const lang = (document.getElementById('lang') as HTMLSelectElement).value;
    let snippets = JSsnippets;
    if (lang === 'JS') snippets = JSsnippets;
    if (lang === 'Python') snippets = PythonSnippets;
    if (lang === 'C++') snippets = CPPsnippets;

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
    let tr: number;
    let aot = [0];
    let wpmot = [0];
    const timerInterval = setInterval(() => {
      if (startTime !== null) {
        const ttxt = document.getElementById('timer');
        if (ttxt) {
          // Time to 2dp
          ttxt.innerHTML = `${((new Date().getTime() - startTime) / 1000).toFixed(3)}s`;
          // set tr to the whole number
          let ltr = ttxt.innerHTML.split('s')[0]
          let ltrn = ltr.split('.')[0] as unknown as number
          if (ltrn != tr) {
            tr = ltrn
            let accuracy = ((correctChars / totalChars) * 100).toFixed(2) as unknown as number;
            const oneCharAccuracy = (1 / totalChars) * 100;
            accuracy = (accuracy - (backspaces * oneCharAccuracy)).toFixed(2) as unknown as number;
            aot = [...aot, accuracy]
            console.log(aot)
            let wpm = Math.round((correctChars / 5) / (tr / 60))
            wpmot = [...wpmot, wpm]
            console.log(wpmot)
          }
        }
      }
    }, 10);
    let typedText = '';
    const autoenter = true; // Set this variable to true to enable autoenter
    textarea.addEventListener('input', () => {
      if (startTime === null) {
        startTime = new Date().getTime();
      }
      const newText = textarea.value;
      if (newText.length < typedText.length && !backspace) {
        textarea.value = typedText; // Prevent deletion
        return;
      }
      typedText = newText;
      if (autoenter && todo[typedText.length] === '\n') {
        textarea.value += '\n';
        typedText += '\n';
      }
      console.log(`Typed text length: ${typedText.length}`);
      console.log(`Todo length: ${todo.length}`);
      totalChars = typedText.length;
      correctChars = 0;
      const todoParts = todo.split('');
      const typedParts = typedText.split('');
      text.innerHTML = todoParts.map((part, i) => {
        if (typedParts[i] === part) {
          correctChars++;
          if (part == '\n') {
            return `<span style="color: var(--mantine-color-text); text-decoration: underline;">⁋${part}</span>`;
          } else {
            return `<span style="color: var(--mantine-color-text); text-decoration: underline;">${part}</span>`;
          }
        } else if (typedParts[i] !== undefined && part == '\n') {
          return `<span style="color: red; text-decoration: underline;">${typedParts[i]}\n</span>`;
        } else if (typedParts[i] !== undefined) {
          return `<span style="color: red; text-decoration: underline;">${typedParts[i]}</span>`;
        } else {
          return `<span style="color: gray;">${part}</span>`;
        }
      }).join('');
      let accuracy = ((correctChars / totalChars) * 100).toFixed(2) as unknown as number;
      // Work out one character's worth of accuracy
      const oneCharAccuracy = (1 / totalChars) * 100;
      accuracy = (accuracy - (backspaces * oneCharAccuracy)).toFixed(2) as unknown as number;
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
        text.style.color = 'var(--mantine-color-text)';
        document.body.removeChild(textarea);
        clearInterval(timerInterval);
        // Create graph of accuracy over time
        const ctx = document.createElement('canvas');
        ctx.id = 'chart';
        ctx.width = 400;
        ctx.height = 200;
        document.getElementById('chartdiv')?.appendChild(ctx);
        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: aot.map((_, i) => i),
            datasets: [
              {
                label: 'Accuracy (%)',
                data: aot,
                borderColor: 'var(--mantine-color-primary)',
                backgroundColor: '#00f',
                borderWidth: 1
              },
              {
                label: 'WPM',
                data: wpmot,
                borderColor: 'var(--mantine-color-secondary)',
                backgroundColor: '#f00',
                borderWidth: 1
              }
            ]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
        chart.update();
        const chartDiv = document.getElementById('chartdivc');
        if (chartDiv) {
          console.log('Chart div found');
          chartDiv.style.display = '';
        }

      }
    });
  }

  function settings() {
    const settings = document.getElementById('settingsMenu')
    if (!settings) {
      console.error('settingsMenu element not found');
      return;
    }
    if (settingsOpened) {
      setSettingsOpened(false)
      settings.style.display = 'none'
      // Save settings to localStorage
      localStorage.setItem('settings', JSON.stringify({ 'backspace': backspace, 'autoenter': autoenter }));
    } else {
      setSettingsOpened(true)
      settings.style.display = ''
    }
  }

  window.onload = () => {
    // Get settings from localStorage
    const settingsLS = localStorage.getItem('settings');
    if (settingsLS) {
      const settingsParsed = JSON.parse(settingsLS);
      setBackspace(settingsParsed.backspace);
      setAutoenter(settingsParsed.autoenter);
      console.log('Settings loaded from localStorage:', settingsParsed);
    }

    // If 'version' is not in localStorage, show what's new modal
    if (!localStorage.getItem('version') || localStorage.getItem('version') !== '1.1') {
      whatsNew();
      localStorage.setItem('version', '1.1');
    }

    document.getElementById('l')?.click();
  }

  let lastBackspaceTime = 0;
  const BACKSPACE_LIMIT_INTERVAL = 1000 / 3; // 3 times per second

  window.addEventListener('keydown', (e) => {
    const textarea = document.getElementById('textarea') as HTMLTextAreaElement;
    if (textarea) {
      if (e.key === 'Tab') {
        e.preventDefault();
        console.warn('Tab key pressed');
        textarea.dispatchEvent(new KeyboardEvent('keydown', { key: 'Space' }));
        textarea.dispatchEvent(new KeyboardEvent('keydown', { key: 'Space' }));
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        console.warn('Enter key pressed');
      }
      if (e.key === 'Backspace') {
        const currentTime = Date.now();
        if (e.repeat || currentTime - lastBackspaceTime < BACKSPACE_LIMIT_INTERVAL) return; // Prevent repeated firing
        lastBackspaceTime = currentTime;
        console.log(lastBackspaceTime);
        if (!backspace) {
          e.preventDefault();
          console.warn('Backspace key pressed but backspace is disabled');
        } else {
          backspaces++;
          console.log(`Backspaces count: ${backspaces}`);
        }
      }
    }
  });


  return (
    <MantineProvider defaultColorScheme='auto'>
      <Title onClick={() => { window.location.reload() }} className='title'><span style={{ color: '#4444ff' }}>coder</span>.<span style={{ color: 'darkkhaki' }}>type</span><span style={{ color: '#4444ff' }}>(&thinsp;)</span>&thinsp;<sub style={{ fontSize: '0.4em', color: '#555' }}>v1.1</sub></Title>
      <Text id='timer'></Text>
      <Text id='text' style={{ fontSize: '2em', width: '80%', display: 'none' }}>Words</Text>
      <Center id='chartdivc' style={{ height: '100vh', display: 'none' }}><div id='chartdiv' /></Center>
      <Center id='gbtn' style={{ height: '100vh' }}>
        <Stack>
          <Center>
            <Button id="vbtn" onClick={() => setShowVideo(!showVideo)}>
              {showVideo ? 'Hide Demo Video' : 'Show Demo Video'}
            </Button>
          </Center>
          {showVideo && (
            <Center>
              <video src='/demo.mp4' loop muted controls style={{ width: '50%' }}></video>
            </Center>
          )}
          <Center><Button id='gogo' onClick={gogo}>Start</Button></Center>
          <Center><NativeSelect
            data={['JS', 'Python', 'C++']}
            defaultValue='JS'
            id='lang'
            w='100%'
          />
          </Center>
          <Center><Text id="mt" style={{ maxWidth: '70vw', textAlign: 'center', fontSize: '0.7em' }}>If on mobile, please only take the video into consideration, as mobile support is experimental and will be fully out in a future update.</Text></Center>
        </Stack>
      </Center>
      <Button id='settingsButton' onClick={settings}><FaCog /></Button>
      <Button id='comingSoon' onClick={comingSoon}>Planned Updates</Button>
      <Center id='settingsMenu' style={{ display: 'none' }}>
        <Card shadow='md' radius='md' padding='xl' style={{ position: 'relative' }}>
          <Button id='settingsClose' onClick={settings} style={{ position: 'absolute', top: '0.5em', right: '0.5em', borderRadius: '50%', padding: '5px', backgroundColor: 'transparent', color: 'black', fontSize: '1.5em' }}>&times;</Button>
          <Title order={3}>Settings</Title>
          <Checkbox mt='md' label='Enable Backspace' checked={backspace} onChange={(e) => setBackspace(e.currentTarget.checked)} />
          <Checkbox mt='xs' label='Auto-Enter' disabled checked={true} onChange={(e) => console.log(e)/*setAutoenter(e.currentTarget.checked)*/} />
        </Card>
      </Center>

      <Center id='comingSoonModal' style={{ display: 'none' }}>
        <Card shadow='md' radius='md' padding='xl' style={{ position: 'relative' }}>
          <Button id='closeComingSoon' onClick={comingSoon} style={{ position: 'absolute', top: '0.5em', right: '0.5em', borderRadius: '50%', padding: '5px', backgroundColor: 'transparent', color: 'black', fontSize: '1.5em' }}>&times;</Button>
          <Title order={3}>Coming Soon</Title>
          <List mt='md'>
            <List.Item>More (coding) Languages</List.Item>
            <List.Item>Dark Theme</List.Item>
            <List.Item>User Stats</List.Item>
            <List.Item>Built-in Sharing</List.Item>
            <List.Item>Full Mobile Support</List.Item>
            <List.Item>More Customisability</List.Item>
            <List.Item>Fix Accuracy</List.Item>
          </List>
        </Card>
      </Center>

      <Center id='whatsNewModal' style={{ display: 'none' }}>
        <Card shadow='md' radius='md' padding='xl' style={{ position: 'relative' }}>
          <Button id='closeWhatsNew' onClick={whatsNew} style={{ position: 'absolute', top: '0.5em', right: '0.5em', borderRadius: '50%', padding: '5px', backgroundColor: 'transparent', color: 'black', fontSize: '1.5em' }}>&times;</Button>
          <Title order={3}>What's New</Title>
          <List mt='md'>
            <List.Item>Backspaces are now enabled by default</List.Item>
            <List.Item>Using backspaces negatively affects accuracy</List.Item>
            <List.Item>More mobile support</List.Item>
            <List.Item>Added new languages</List.Item>
          </List>
        </Card>
      </Center>
    </MantineProvider>
  )
}

window.onclick = () => {
  document.getElementById('textarea')?.focus();
}

export default App