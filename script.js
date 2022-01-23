/* Границы */
const a = 0;
const b = 1;
const n = 20;
const accuracy = 3;

// Math.sqrt(Math.sin(2*x)+1);  // 12 вармант ( другой метод )
// x * Math.log(1 + Math.cos(x)); // 12 вариант 
//(Math.sqrt(1.5*x +1 ))/(1.2*x + Math.sqrt(x**2 + 1.8))  //3 вариант

const SubstitutionFunction = x => (Math.cos(x**3+2*x**2));
     //((Math.sqrt(1.1*x**2 + 0.9))/(1.6+Math.sqrt(0.8*x**2+1.4)))
     //(Math.sqrt(1.1*x**2+0.9))/(1.6+Math.sqrt(0.8*x**2+1.4));

function RectangleMethod(a, b, n){

    let xArr = [];
    xArr[0] = a;
    let sumY = 0;

    let h = (b-a)/n;

    for(let i = 0; i < n; i++){
        xArr.push(xArr[i] += h);
    }

    for(let j = 0; j < n; j++){
        sumY += (SubstitutionFunction(xArr[j]));
    }

    return h * sumY;
};

/* Результат */
alert('Result: ' + RectangleMethod(a,b,n));
//alert('Result: ' + RectangleMethod(a, b, n).toFixed(accuracy));
//alert('Result: ' + TrapeziumMethod(a, b, n).toFixed(accuracy));
