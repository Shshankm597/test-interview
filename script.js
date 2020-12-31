 var inputArray = document.querySelector("#output");

 arr = ["milk", "sugar", "tea", "egg", "coffee"];

 for(var i=0; i < arr.length; i++) {
     if(i % 2 !== 0) {
         inputArray.innerText += arr[i];
        //  console.log(arr[i]);
     }
 }

