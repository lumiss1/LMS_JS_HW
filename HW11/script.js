const array = [1, 2, 3, 4, 5, 6, 7];
alert(`Ваш масив: ${array}`);

let remove = prompt("Який елемент масиву хочете видалити?");
numRemove = Number(remove);
function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

removeElement(array, numRemove);

alert(`Масив з видаленим елементом: ${array}`);
