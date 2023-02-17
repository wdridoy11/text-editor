/*==================================================
   text bold, italic, underline css style function
  ==================================================*/
function fontStyle(fontStyleId, styleCss) {
   const fontElementId = document.getElementById(fontStyleId);
   fontElementId.addEventListener("click", function () {
      const userText = document.getElementById("user-text");
      userText.classList.toggle(styleCss);
   })
};

// text bold, italic,and underline style function call
fontStyle("text-bold", "text-bold");
fontStyle("text-italic", "text-italic");
fontStyle("text-underline", "text-underline");

/*==================================================
   text align left,center,right,justify function
  ==================================================*/
function textAlign(textId, styleCss) {
   const elementId = document.getElementById(textId);
   elementId.addEventListener("click", function () {
      const userText = document.getElementById("user-text");
      userText.style.textAlign = styleCss;
   })
}
// text align left,center,right,justify function call
textAlign("text-left", 'left');
textAlign("text-center", 'center');
textAlign("text-right", 'right');
textAlign("text-justify", 'justify');
/*==================================================
                  font-size
  ==================================================*/
document.getElementById("font-size").addEventListener("click", function (event) {
   const userText = document.getElementById("user-text");
   const fontSizeValue = event.target.value;
   userText.style.fontSize = `${fontSizeValue}px`;
});
/*==================================================
                  text color
  ==================================================*/
document.getElementById("color").addEventListener("change", function (event) {
   const userText = document.getElementById("user-text");
   const textColor = event.target.value;
   userText.style.color = textColor;
   console.log(textColor)
});

/*==================================================
                     font-family
  ==================================================*/
document.getElementById("font-family").addEventListener('change', function (event) {
   const userText = document.getElementById("user-text");
   const fontFamilyValue = event.target.value;
   userText.style.fontFamily = fontFamilyValue;
})
