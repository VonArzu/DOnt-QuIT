let response = []; //save large array of all quotes

const getDataQuotes = async () => {
  try { //try "this" and throw error to catch
    let res = await axios.get('https://type.fit/api/quotes')
    response = res.data; //from console in f12
    //Math . rand for random quotes
    const quote = response;
    const random;

    random = Math.floor(Math.random() * quote.legth);


    const quote = document.querySelector('.button');
    let buttons = buttons.innerText = response[random].text


    document.getElementById('text').innerHTML += quote[random];

  } catch (e) {
    console.log(e.message);
  }
}
getDataQuotes();
//Next how to append

const addQuotes = (quotes, element) => {

  list.forEach((quote) => {
    const option = document.createElement('option')
    option.value = `${quote}`
    option.text = `${quote}`
    element.append(quote)
  })



  // let buttons = document.querySelectorAll('.button');

  // buttons.forEach((button) => {
  //   button.click.add(getDataQuotes);
  // })
  // document.querySelector('')

}
addQuotes();

// getRandomQuote = () => {
//   return Math.floor(Math.random() * Math.floor(innerText));
// }
// document.querySelector('#quotes').innerHTML = getRandomQuote();