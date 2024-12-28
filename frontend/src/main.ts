import './style.css';
import './app.css';

import {Greet} from '../wailsjs/go/main/App';
import Layout from './components/Layout';

// Setup the greet function
window.greet = function () {
    // Get name
    let name = nameElement!.value;

    // Check if the input is empty
    if (name === "") return;

    // Call App.Greet(name)
    try {
        Greet(name)
            .then((result) => {
                // Update result with data back from App.Greet()
                resultElement!.innerText = result;
            })
            .catch((err) => {
                console.error(err);
            });
    } catch (err) {
        console.error(err);
    }
};

const app = document.getElementById('app');

const layout = Layout();

/*
const layoutStr = layout(`
    <img id="logo" class="logo">
      <div class="result" id="result">Please enter your name below 👇</div>
      <div class="input-box" id="input">
        <input class="input" id="name" type="text" autocomplete="off" />
        <button class="btn" onclick="greet()">Greet</button>
      </div>
    </div>
`);

let nameElement = (document.getElementById("name") as HTMLInputElement);
nameElement.focus();
let resultElement = document.getElementById("result");

*/

if(app) {
	layout.render(app)
}

declare global {
    interface Window {
        greet: () => void;
    }
}
