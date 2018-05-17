(function (){

  var ids = 1;
  var colNum = 0;

  addFood = function(){
    colNum = colNum + 1;
    $('tr').each(function(){
         var trow = $(this);
         switch (trow.index()){
           case (0):
              trow.append('<td> <input type="text" /> </td>');
              break;
           case (32):
              trow.append('<td> <button onclick=fillMonth(' + colNum + ')> Fill </button> </td>');
              break;
            case(33):
              trow.append('<td id="foodQuantity_' + colNum + '"> 0 </td>');
              break;
            case(34):
              trow.append('<td> <input type="number" value=0 id="multiplier_' + colNum + '" /> </td>');
              break;
            case(35):
              trow.append('<td id="multiplierTotal_' + colNum + '" /> </td>');
              break;
            default:
              trow.append('<td> <input type="number" class="quantity food_' + colNum + '" value=0 /></td>');
         }


     });
  }

  fillMonth = function(val){
    var elems = $(".food_" + val);
    var x = prompt("", "");

    if (x == null || x == ""){
      return;
    }

    for(var i = 0; i < elems.length; i++){
      elems[i].value = x;
    }
  }

  getTotalQuantity = function(){
    var total = 0;
    for (var i = 1; i <= colNum; i++){
      total = 0;
      var quantities = $(".food_" + i);
      for (var j = 0; j < quantities.length; j++){
        total += parseInt(quantities[j].value);
      }
      $("#foodQuantity_" + i).text(total);
    }

  }

  getTotal = function(){
    for (var i = 1; i <= colNum; i++){
      var multiplierVal = parseInt($("#multiplier_" + i).val());
      var quantity = parseInt($("#foodQuantity_" + i).text());
      console.log(multiplierVal);
      console.log(quantity);
      $("#multiplierTotal_" + i).text(multiplierVal * quantity);

    }
  }

})();
