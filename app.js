let response = []; //save large array of all quotes

async function getDataQuotes() {
  console.log(this);
  let openButtons = document.querySelectorAll('.open');
  openButtons.forEach(button => {
    button.remove();
  })
  try {                                           //try "this" and throw error to catch
    let res = await axios.get('https://type.fit/api/quotes');
    let response = res.data;                      //from console in f12
    //Math . rand for random quotes
    const quote = response;

    const getRandomQuote = quote[Math.floor(Math.random() * quote.length)];
    console.log(getRandomQuote);
    let span = document.createElement('span');
    span.innerText = getRandomQuote.text
    span.classList.add('open');
    this.parentNode.insertBefore(span, this.nextSibling)

  } catch (e) {
    console.log(e.message);

  }
}
// button.parentNode.insertBefore(div, button.nextSibling)
//add quotes to button w/on click

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');
const button6 = document.querySelector('.button6');

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach(button => {

  button.addEventListener("click", getDataQuotes);
})