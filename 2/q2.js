
const callback = function (elem) {
  elem.classList.add('newElementStyles');
};
function elementCreator(elementName, callbackFunction) {
  const newElement = document.createElement(elementName);
  newElement.textContent = 'This is a new element.';
  callbackFunction(newElement);
  document.body.append(newElement);
}
elementCreator('div', callback);