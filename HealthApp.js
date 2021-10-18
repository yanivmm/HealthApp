//Get  images
var images = document.getElementsByClassName('col-lg-4 col-xs-6 thumbnail')

//Get the modals
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");

var Modals = document.getElementsByClassName("modal");
var span = document.getElementsByClassName("close_modal");

// proprties of father modal
var modalHead = document.getElementById("modalHead");
var modalBody = document.getElementById("modalBody");
var modal2Head  =  document.getElementById("modal2Head");
var modal3Body = document.getElementById("modal3Body");
var quantityLabel = document.getElementById("quantityLabel"); //grams




// // Radios buttons
// exp =   `<input type="number" id="gramsQuantity" max="400" step="10">`
// exp2 =  `<input type="number" id="gramsQuantity" max="5">`
//
// $("#optionsRadios3").click(function() {
//       $("#quantity").innerHTML = exp;
// });
// $("#optionsRadios2").click(function() {
//       $("#quantity").innerHTML = exp2;
// });
// $("#optionsRadios1").click(function() {
//       $("#quantity").innerHTML = exp2;
// });

// var addFoodButton = document.getElementById("addFoodButton")
// addFoodButton.addEventListener("click",function(){
//   // take current parameters to other screen
// })


// When the user clicks on <span> (x), close the modal
for (const spanButton of span) {

  spanButton.addEventListener("click",function(){
    for (const modal of Modals){
    modal.style.display = "none";

  }
  })}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }})



//                   inner Modal content


var foodsDic = {

  "ביצים" : ["קשות", "מטוגנות"],
  "ירקות":["מלפפון","עגבנייה","גמבה","סלק","אבוקדו","גזר","זיתים","ברוקולי","שועית ירוקה","קישוא","ארטישוק"],
  "גבינות":["קוטג'","גבינה לבנה","גבינה צהובה","גבינה צפתית","יוגורט ללא סוכר","שייק חלבון","גבינת פרמז'ן"],
  "לחם":["לחם חום","לחם לבן פרוס","פיתה לבנה","בגט/לחמנייה לבנה","לחם מחמצת","מצה עבודת יד",""],
  "פחמימות":["אורז","אורז חום","בטטה","פתיתים/גריסים","תפוח אדמה","ספגטי","פתיתים"],
  "בשר/דגים":["חזה עוף","שניצל","בשר בקר דל שומן","אסאדו","סלמון","טונה בשימורים","סרדינים בשימורים","דג מלוח(הרינג,מקרל)"],
  "פירות":["בננה","תפוח","תפוז","ענבים","תאנים","אגס","תמרים"],
  "אגוזים וזרעים":["אגוז מלך","מקדמיה","אגוז ברזיל","אגוז לוז","שקדים","גרעיני דלעת","גרעיני חמנייה"],
  "קינוחים":["מעדן חלב","משקה חלבון ממותק","ממרח שוקולד","עוגה(כולל מאפים עם מילוי)","עוגייה(ללא מילוי)","סוכריות","סוכריות גומי","חלווה","פירות יבשים מתוקים","וופל מצופה"],
  "נשנושים":["במבה","בייגלה/קרקר/דגן מלוח","במבה נוגט","ביסלי/צ'יפס","עבאדי","",""],
  "תוספים":["מגנזיום","COQ10","B אחר","B12","ברזל","אומגה 3","סידן","D","C"]
  // "משקאות":["","","","","","",""]
  // "" : ["","","","","","",""],
}



function foodsListProcessor(mainFood){

  if (mainFood != "משקאות") {

  childFoods = foodsDic[mainFood];
  html_Chainer =""

  for (const food of childFoods) {
    html_Chainer = html_Chainer +"<p>" + food + "</p>"
  }
}
  if (mainFood =="משקאות") {
    html_Chainer = `<h6>משקאות קלים</h6><p>ממותק</p><p>מים בטעמים</p><p>נקטר</p>
    <h6>משקאות מוגזים</h6><p>קולה/ספרייט/פאנטה</p><p>קולה/ספרייט/פאנטה <em>זירו<em></p><p>ממותק עדין</p><p>XL/BLU/Red-bull</p>
    <h6>חלב/סויה</h6><p>חלב</p><p>סויה/שקדים/ אורגני</p><p>סויה ממותק</p><p>יוגורט  טבעי</p>
    <h6>אלכוהול</h6><p>בירה</p><p>וודקה</p><p>(~13%)יין</p><p>יין עדין</p><p>תירוש(מיץ ענבים טבעי)</p>;`
  }

  return html_Chainer;

}



// When the user clicks an image, open the modal
for (const im of images) {
  im.addEventListener("click",function(){ //open click listener
      modal.style.display = "block";

      mainFood =  this.textContent.trim();

      modalHead.textContent = mainFood;
      modalBody.innerHTML = foodsListProcessor(mainFood)

      pTags = modalBody.innerHTML.getElementsByTagName("p");
      for(const ptag of pTags){
        ptag.addEventListener("click",function(){
            modal.style.display = "none";
            modal2.style.display = "block";
            modal2Head.textContent = mainFood + "=>" + ptag.textContent.trim() ; //the child food

      }
      // activateModalFoodsClicker(modalBody.innerHTML,mainFood)
  )
}})}


// Shaping food list
// button the childFoods

/*
function activateModalFoodsClicker(modalBodyInnerHTML,mainFood){
var childFoods = modalBodyInnerHTML.getElementsByTagName("p")

for (const food of childFoods) {
  food.addEventListener("click",function(){
      modal.style.display = "none";
      modal2.style.display = "block";
      modal2Head.textContent = mainFood + "=>" + this.textContent ; //the child food

  })
}

}
*/
