// 1: examine the document object model

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 'xyz';
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].innerHTML = "<h1>Hello</h1>";
// console.log(document.forms[0]);
// console.log(document.links);

// 2: accessing elements
// getting elements by id

// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = "Hello"; 
// headerTitle.innerHTML = "Goodbye"; 
// console.log(headerTitle.outerHTML)
// console.log(headerTitle.innerHTML)
// console.log(headerTitle.innerText)
// console.log(headerTitle.textContent)
// headerTitle.innerHTML = "<h3>Hello</h3>";
// let header = document.getElementById('main-header');
// header.style.borderBottom = "solid 3px #000";

// 3: getting elements by classname
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].style.fontWeight = 'bold';
// // items[1].style.backgroundColor = 'yellow';
// // items.style.backgroundColor = 'yellow';// gives error because of HTMLcollection
// for (const item of items) { 
//     item.style.backgroundColor = "#f4f4f4";
// }

// 4: getting elements by tagname
// let li = document.getElementsByTagName('li');
// console.log(li);
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// li.style.backgroundColor = 'yellow';// gives error because of HTMLcollection
// for (const item of li) { 
//     item.style.backgroundColor = "#f4f4f4";
// }

// 5: querySelector
// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #000';
// const input = document.querySelector('input');
// input.value = "some text";
// const submit = document.querySelector('input[type="submit"]');
// submit.value = "send";
// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// 6: querySelectorAll
const titles = document.querySelectorAll('.title');
titles[0].style.color = 'royalblue';
titles[1].style.color = 'magenta';
const odd = document.querySelectorAll('li:nth-child(odd)');
const even = document.querySelectorAll('li:nth-child(even)');
console.log(odd);
for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';

}