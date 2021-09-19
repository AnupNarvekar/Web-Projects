function getValue(){
    const query = document.querySelector('#query').value;
    document.querySelector('#query').value = eval(query);
}

function clearScreen(){
    document.querySelector('#query').value = ' ';
}

function pressButton(symbol){
    const query = document.querySelector('#query').value;
    document.querySelector('#query').value = query + symbol;

}


function del(){
    const query = document.querySelector('#query').value;
    document.querySelector('#query').value = query.slice(0, -1);

}


const inputQuery = document.querySelector("#query");
const BIRTHNUMBER_ALLOWED_CHARS_REGEXP = /[0-9\/\+\-\*\^\%]+/;
inputQuery.addEventListener("keypress", e => {
  console.log(e);
  if (!BIRTHNUMBER_ALLOWED_CHARS_REGEXP.test(e.key)) {
    e.preventDefault();
  }
});
