// SYNCHRONOUS JS (SINGLE THREADED)

// const user = {
//     id: 1,
//     name: "Samuel",
//     age: 21
// };

// const json = JSON.stringify(user);

// const obj = JSON.parse(json);

// console.log(user);
// console.log(json);
// console.log(obj);

// HTTP REQUESTS
const display = document.querySelector('.display');

const getWordFromApi = async (word) => {
  const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
  const response = await fetch(URL);
  return response.json(); // ALWAYS RETURNS AN ARRAY
};

const form = document.querySelector("#myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  display.innerHTML = "";

  const btn = form.querySelector("button");
  const input = form.querySelector("input");

  // CHECK IF INPUT VALUE IS EMPTY
  if (input.value === "") {
    alert("Please enter a word");
    return;
  }

  btn.textContent = "loading...";

  getWordFromApi(input.value)
    .then((data) => {
      // LOOP THROUGH THE RETURNED ARRAY
      data.forEach((answer) => {
        // DESTRUCTURE THE OBJECT
        const { phonetics, word, meanings } = answer;

        const displayMeaning = meanings.map((m) => {
          return `
            <h3> ${m.partOfSpeech} </h3>
            <p> ${ m.definitions.map(d => (`<p>${d.definition}</p>`)).join('') } </p>
            <hr>
          `;
        });

        const displayPhonetics = phonetics.map(p => {
          return `
            <h3>${p.text}</h3>
            <audio src="${p.audio}" controls></audio>
            <hr>
          `
        })

        display.innerHTML += `<h1> ${word} </h1>`;
        display.innerHTML += displayMeaning.join('');
        display.innerHTML += displayPhonetics.join('');
        
        btn.textContent = "Search";
      });

    })

    .catch((error) => {
      alert("Something went wrong, try again");
      console.error(error);
    });
    
});
