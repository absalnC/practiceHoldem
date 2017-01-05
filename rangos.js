var myMod=(function(){
	var cartas=["2","3","4","5","6","7","8","9","T","J","Q","K","A"];
	var paresMano=
	["premium","connectors","suited cards","offsuit cards","pocket pairs","offsuited connectors",
	"suited connectors","unsuited 1 Gappers","unsuited 1 Gappers","unsuited broadways","suited broadways"
	];
	return {
		cartas:cartas
	}
})();

function newGridRow(id){
  return "<div class='col-md-12' id='row"+id+"'></h3>";
}
function newGridCol(id,inner){
  return "<div class='grid-row' id='col"+id+"'>"+inner+"</h3>";
}

$(document).ready(function(){
var cartas=myMod.cartas;
	cartas.reverse().forEach(function(el){
      var elRow=el;
      $("#grid").append(newGridRow(el));
      cartas.forEach(function(elCol){
      //  console.log(elCol);
        $("#grid>#row"+elRow).append(newGridCol(elCol,elRow+elCol));
      });
  });
$("[id^='col']").click(function(){
  console.log("click on row");
  $(this).toggleClass("blue");
});
});
