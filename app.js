let response = []; //save large array of all quotes

const getData = async () => {
  try { //try "this" and throw error to catch
    let res = await axios.get('https://type.fit/api/quotes')
    response = res.data; //from console in f12
    //Math . rand for random quotes
    //append to page
    let h1 = document.querySelector('h1');
    h1.innerText = response[277].text

  } catch (e) {
    console.log(e.message);
  }
}
getData();
//Next how to append