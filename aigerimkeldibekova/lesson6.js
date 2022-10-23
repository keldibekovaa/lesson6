// Задача 1
 let newFruits = ['grape', 'watermelon', 'lemon', 'apple', 'blueberry'];
 let [elem1, elem2, ...arr] = newFruits;
 alert(elem1);
 alert(elem2);
 alert(arr);
 //Задача 2
 let newArr = ['grape', 'watermelon', 'lemon', 'apple', 'blueberry'];
 newArr.reverse();
 let [elem3, elem4] = newArr;
 alert(elem3);
 alert(elem4);
 //Задача 3
function func (a = 'АНОНИМ'){
    alert('hi'+ a);
}
let name = 'АРУУКЕ';
func();
alert(name);
