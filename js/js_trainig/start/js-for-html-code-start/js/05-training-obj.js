
function Calculator() {


    this.read = function () {
       this.value1 = prompt( 'Введите первое число:', 0);
       this.value2 = prompt('Введите второе число:', 0);
    }
    this.sum = function () {
        return  this.value1 + this.value2;
        
    }
    this.mul = function () {
        return  this.value1 * this.value2;
       
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
