const properties = document.querySelector('#properties');
const cssCode = document.querySelector('.css-code');
const button = document.querySelector('.button');

properties.addEventListener('change', handleChange);

const handleStyle = {
  element: button,

  texto(value) {
    this.element.innerText = value;
  },

  color(value) {
    this.element.style.color = value;
  },

  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },

  height(value) {
    this.element.style.height = value + 'px';
  },

  width(value) {
    this.element.style.width = value + 'px';
  },

  border(value) {
    this.element.style.border = value;
  },

  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },

  fontFamily(value) {
    this.element.style.fontFamily = value;
  },

  fontSize(value) {
    this.element.style.fontSize = value + 'px';
  },
}

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const savedProperties = Object.keys(localStorage);

  savedProperties.forEach(propertie => {
    handleStyle[propertie](localStorage[propertie]);
    properties.elements[propertie].value = localStorage[propertie];
  });
  showCss();
}
setValues();

function showCss() {
  cssCode.innerHTML = '<span>' + button.style.cssText.split('; ').join(';<span></span>');
}