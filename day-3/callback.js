                //call backs

function1 = (call_back)=>{   //-->function one takeing a argument as a function
    console.log("this is an function one console")
    call_back()
}

function2 = ()=>{
    console.log("this is an function two console")
}

function1(function2)

      //example
      
      let a= 4;
      let b= 3;

    total = (sum_,mul_,sub_)=>{
       console.log(`the sum of 4+3 is ${sum_()} ,the mult of 4*3 is ${mul_()},the substraction of 4-3 is ${sub_()}`) 
    }
    
    sum = ()=> a+b;
    mul = ()=> a*b;
    sub = ()=> a-b;
    
    total(sum,mul,sub)