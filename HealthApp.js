//Get  images
var images = document.getElementsByClassName('col-lg-4 col-xs-6 thumbnail')

//Get the modals
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");

var Modals = document.getElementsByClassName("modal");
var spans = document.getElementsByClassName("close_modal");

// proprties of father modal
var modalHead = document.getElementById("modalHead");
var modalBody = document.getElementById("modalBody");
var modal2Head  =  document.getElementById("modal2Head");
var modal3Body = document.getElementById("modal3Body");
var quantityLabel = document.getElementById("quantityLabel"); //grams

function closeModals(){
  for (const modal of Modals){
  modal.style.display = "none";
}
}


// Radios buttons
exp =   `<input type="number" id="quantity" max="400" step="10">`
exp2 =  `<input type="number" id="quantity" max="5">`




$("#optionsRadios3")[0].click(function() {
      $("#quantity")[0].innerHTML = exp;
});
$("#optionsRadios2")[0].click(function() {
      $("#quantity")[0].innerHTML = exp2;
});
$("#optionsRadios1")[0].click(function() {
      $("#quantity")[0].innerHTML = exp2;
});

var addFoodButton = document.getElementById("addFoodButton")
addFoodButton.addEventListener("click",function(){
  closeModals()
})


// When the user clicks on <span> (x), close the modal
for (const span of spans) {

  span.addEventListener("click",function(){
    closeModals()
  })}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    closeModals()
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
    html_Chainer = `<h4>משקאות קלים</h4><p>ממותק</p><p>מים בטעמים</p><p>נקטר</p>
    <h4>משקאות מוגזים</h4><p>קולה/ספרייט/פאנטה</p><p>קולה/ספרייט/פאנטה <em>זירו<em></p><p>ממותק עדין</p><p>XL / BLU / Red-bull</p>
    <h4>חלב/סויה</h4><p>חלב</p><p>סויה/שקדים/ אורגני</p><p>סויה ממותק</p><p>יוגורט  טבעי</p>
    <h4>אלכוהול</h4><p>בירה</p><p>וודקה</p><p>(~13%)יין</p><p>יין עדין</p><p>תירוש(מיץ ענבים טבעי)</p>;`
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

      pTags = document.getElementById("modalBody").getElementsByTagName("p");
      for(const ptag of pTags){
        ptag.addEventListener("click",function(){
            modal.style.display = "none";
            modal2.style.display = "block";
            modal2Head.textContent = mainFood + "=>" + ptag.textContent.trim() ; //the child food

      }
  )
}})}




