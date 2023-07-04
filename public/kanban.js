//  id's:{backlog,progress,complete,onhold}
//  div id=`{#id}content` > 
//  ul .dragitemlist`{#id}list`

// 1.Class List
// .dragcolumn,.dragitemlist
// .addbtn,addbtnsolid,addcontainer,additem 

// addBtns is array of all buttons
const addBtns = document.querySelectorAll('addbtn')
const saveItemBtns = document.querySelectorAll('addbtnsolid')
const addItemContainers = document.querySelectorAll('addcontainer')
const addItems = document.querySelectorAll('additem')
// Item Lists: itemLists = [backlogList,progressList,completeList,onHoldList]
const itemLists = document.querySelectorAll('dragitemlist')
const backlogList = document.getElementById('backloglist')
const progressList = document.getElementById('progresslist')
const completeList = document.getElementById('completelist')
const onHoldList = document.getElementById('onholdlist')

// Initialize Arrays: stores data for each of our lists
let backlogListArray = [];
let progressListArray = [];
let completeListArray = [];
let onholdListArray = [];

// Drag Functionality

// Get Arrays from localStorage if available, set default values if not
function getSavedColumns(){
    if(localStorage.getItem('backlogItems')){
         backlogListArray = JSON.parse(localStorage.backlogItems);
         progressListArray = JSON.parse(localStorage.progressItems);
         completeListArray = JSON.parse(localStorage.completeItems);
         onholdListArray = JSON.parse(localStorage.onHoldItems);
    }else{
         backlogListArray = ['backlog test','backlog test'];
         progressListArray = ['progress test','progress test'];
         completeListArray = ['complete test','completetest'];
         onholdListArray = ['onhold test','onhold test'];
    }
}

// Set Local Storage Arrays, saves whatever is set in getSavedColumns to local storage
function updateSavedColumns(){
    localStorage.setItem('backlogItems', JSON.stringify(backlogListArray));
    localStorage.setItem('progressItems', JSON.stringify(progressListArray));
    localStorage.setItem('completeItems', JSON.stringify(completeListArray));
    localStorage.setItem('onholdItems', JSON.stringify(onholdListArray));
}
getSavedColumns();
updateSavedColumns();



