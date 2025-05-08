/* Author - Ahil Tanvir
 */

let string = "";
const input = document.querySelector('.display input');
const buttons = document.querySelectorAll('.button');

 buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerText;

    if (value === 'C') {
      string = "";
      input.value = "";
    } else if (value === '=') {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    } else {
      string += value;
      input.value = string;
    }
  });
}); 

