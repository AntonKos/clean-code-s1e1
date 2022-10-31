var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTaskHolder = document.getElementById("incomplete-tasks-wrapper"); //ul of #incompleteTasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

var createNewTaskElement = function(taskString) {

  var listItem = document.createElement("li");

  var checkBox = document.createElement("input"); 
 
  var label = document.createElement("label"); 

  var editInput = document.createElement("input"); 

  var editButton = document.createElement("button"); 

  var deleteButton = document.createElement("button"); 
  var deleteButtonImg = document.createElement("img"); 

  label.innerText = taskString;
  label.className = 'task';

  checkBox.type = "checkbox";
  editInput.type = "text";
  editInput.className = "task";

  editButton.innerText = "Edit";
  editButton.className = "edit";

  deleteButton.className = "del";
  deleteButtonImg.src = './remove.svg';
  deleteButton.appendChild(deleteButtonImg);
  
  //and appending.
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}


var addTask = function() {
  console.log("Add Task...");

  if (!taskInput.value) return;
  var listItem = createNewTaskElement(taskInput.value);

 
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value = "";

}

var editTask = function() {
  console.log("Edit Task...");
  console.log("Change 'edit' to 'save'");


  var listItem = this.parentNode;

  var editInput = listItem.querySelector('input[type=text]');
  var label = listItem.querySelector("label");
  var editBtn = listItem.querySelector(".edit");
  var containsClass = listItem.classList.contains("edit-mode");
  if (containsClass) {

    label.innerText = editInput.value;
    editBtn.innerText = "Edit";
  } else {
    editInput.value = label.innerText;
    editBtn.innerText = "Save";
  }

  listItem.classList.toggle("edit-mode");
};

var deleteTask = function() {
  console.log("Delete Task...");

  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  ul.removeChild(listItem);

}

var taskCompleted = function() {
  console.log("Complete Task...");

  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete = function() {
  console.log("Incomplete Task...");
  var listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}



var ajaxRequest = function() {
  console.log("AJAX Request");
}

addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);


var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("bind list item events");
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.del");



  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;
}

for (var i = 0; i < incompleteTaskHolder.children.length; i++) {

  bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

for (var i = 0; i < completedTasksHolder.children.length; i++) {
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

console.log(
  `Ваша оценка - 40 баллов 
  Отзыв по пунктам ТЗ:
  Не выполненные/не засчитанные пункты:
  1) Правило '2.1 БЭМ' из html-and-css-extended соблюдено: все классы именованы согласно БЭМ нотации 
    
  Выполненные пункты:
  1) Правило '1.1 Отступы' из html-and-css выполняется во всем проекте: табуляция не используется, все отступы выполнены пробельным  символом 
    
  2) Правило '1.2 Нижний регистр написания' из html-and-css выполняется во всем проекте: все HTML теги, атрибуты из значения,  селекторы и их значения записаны в нижнем регистре 
    
  3) Правило '1.3 Кавычки в HTML/CSS документе' из html-and-css выполняется во всем проекте: в HTML и СSS файлах используются только  двойные кавычки 
    
  4) Правило '2.1 Форматирование' из html-and-css выполняется во всем проекте: все блочные, табличные и списочные элементы перенесены  на отдельную строку и выделены отступами в соответствии с лестничной иерархией вложенности. 
    
  5) Правило '2.2 Тип документа / Document Type' из html-and-css выполняется во всем проекте: doctype присутствует первым тегом в  html документе и соответствует типу html5 
    
  6) Правило '2.3 Символы-мнемоники' из html-and-css выполняется во всем проекте: символы-мнемоники не используются в html файлах 
    
  7) Правило '2.4 Атрибут 'type'' из html-and-css выполняется во всем проекте: CSS-стили и JS-скрипты подключены без использования  данного атрибута 
    
  8) Правило '3.1 Единый стиль именования селекторов (классов / id)' из html-and-css выполняется во всем проекте: все селекторы  именованы в едином стиле, при этом или в соответствии с БЭМ, или все слова в нижнем регистре и разделены между собой дефисом 
    
  9) Правило '3.2 Значимые названия идентификаторов и классов' из html-and-css выполняется во всем проекте: все имена классов и  идентификаторов имеют или осмысленные имена в соответствии с их функциональным значением (!но НЕ ВНЕШНИМ ВИДОМ!), или шаблонное имя  (также соответствующее назначению элемента) 
    
  10) Правило '3.3 Лаконичность названий идентификаторов и классов' из html-and-css выполняется во всем проекте: все имена id и  классов понятны, достаточно длинные для понимания их назначения и при этом лаконичны 
    
  11) Правило '3.4 Теговые селекторы' из html-and-css выполняется во всем проекте: теговые селекторы не используются (за исключением  намеренного сброса дефолтных стилей) 
    
  12) Правило '3.5 Отступы в блоках' из html-and-css выполняется во всем проекте: содержимое всех блоков отделены отступами 
    
  13) Правило '3.6 Пробел после названий свойств' из html-and-css выполняется во всем проекте: значения CSS-свойств отделены  пробелами после двоеточия 
    
  14) Правило '3.7 Точка с запятой после свойств' из html-and-css выполняется во всем проекте: после каждого CSS-правила стоит точка  с запятой 
    
  15) Правило '3.8 Разделение селекторов и свойств' из html-and-css выполняется во всем проекте: каждый селектор в групповом  перечислении CSS-блока отделен переносом строки 
    
  16) Правило '1.1 Семантика' из html-and-css-extended соблюдено: все html-теги используются в соответствии с их назначением. При  этом использование div-элементов сведено к минимуму, где возможно они заменены на семантические html5 элементы 
    
  17) Правило '1.2 Альтернатива для мультимедиа' из html-and-css-extended соблюдено: каждый мультимедиа элемент (в данном задании  img) имеет alt-атрибут с осмысленным содержанием, соответствующим контенту элементы. При этом чисто декоративные картинки имеют alt  с пустым значением. 
    
  `
)