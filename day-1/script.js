                   //JSON
     //    JSON stands for JavaScript Object Notation
     //    JSON is a text format for storing and transporting data      
     
                   //syntax and Data types 
                   
  /*   {
        "name":"Rahul",                                  -->String
       
        "age":22,                                        -->Number
       
        "address":{"country":"india","city":"hyderabad"},-->object

        "activities":["playing","sleeping","eating"],     -->Array

        "male":true,                                      -->Boolean

        "handicap":null                                    -->null
    }
*/

                        //JSON.parse()
     
      /*    When receiving data from a web server, the data is always a string.

           Parse the data with JSON.parse(), and the data becomes a JavaScript object.*/

                              //EXAMPLE

   const  text = '{"name":"Rahul", "age":22, "city":"hyderabad"}'
   let object   = JSON.parse(text);
   console.log(`${object.name} is ${object.age} old,stay in ${object.city}` ) // OUTPUT:Rahul is 22 old,stay in hyderabad

                        //JSON.stringify()
    
       /*      When sending data to a web server, the data has to be a string.

              Convert a JavaScript object into a string with JSON.stringify().*/

                            //EXAMPLE
   
   const obj = {name:"rahul",age:22,city:"hyderabad"}
   const myJson =JSON.stringify(obj)
   console.log(myJson)          //OUTPUT:{"name":"rahul","age":22,"city":"hyderabad"}
   
{
                // Storing data:
    const myObj = { name: "rahul", age: 22, city: "hyderabad" };
    const myJSON = JSON.stringify(myObj);
     localStorage.setItem("testJSON", myJSON);
                    // Retrieving data:
     let text = localStorage.getItem("testJSON");
     let obj = JSON.parse(text);

        console.log(obj.name)
}
                        
                                        

                                       

