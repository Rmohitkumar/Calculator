


var num1 = 0;
var num2 = 0;
var operator  = 0;


function calculs(num1, num2 , operator){
    var double1 = parseFloat(num1);
    var double2 = parseFloat(num2);
        
    if (operator == "%") {
        return (double1)%(double2);
    }
    else if (operator == "/") {
        return (double1)/(double2);
    }
    else if (operator == "*") {
        return (double1)*(double2);
    }
    else if (operator == "-") {
        return (double1)-(double2);
    } 
    else if (operator == "+") {
        return (double1)+(double2);
    }
}



$(".num").click(function(){
    var buttonhtml = this.innerHTML;
    if (operator == 0) {
        num1 = num1 + buttonhtml;
        $(".new-typing").html(num1);
    } 
    else {
        num2 = num2 + buttonhtml;
        $(".new-typing").html(num2);
    }
   
})




$(".operations").click(function(){

    var buttonhtml = this.innerHTML;

    switch (buttonhtml) {
        case "AC":
            num1 = 0;
            num2 = 0;
            $(".new-typing").html(0);
            break;
        case "%":
            operator = "%";
            $(".new-typing").html(operator);
            break;
        case "X":
            if (operator == 0) {
                num1 = num1.slice(0, -1);
                $(".new-typing").html(num1);

            } 
            else {
                num1 = num2.slice(0, -1);
                $(".new-typing").html(num1);
            }
            break;
        case "/":
            operator = "/"
            $(".new-typing").html(operator);
            break;

        case "*":
            operator = "*"
            $(".new-typing").html(operator);
            break;
        case "-":
            operator = "-"
            $(".new-typing").html(operator);
            break;

        case "+":
            operator = "+"
            $(".new-typing").html(operator);
            break;

        case "=":
            var answer = calculs(num1,num2,operator);
            num1 = 0;
            num2 = 0;
            $(".new-typing").html(answer);
            break;
        default:
            break;
    }
    
})