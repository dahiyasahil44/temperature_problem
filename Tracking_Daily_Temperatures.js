// Create an array that stores the temperatures recorded over 7 days. Use indexing to access the
//  temperature for the 4th day and update it to a new value by adding 2 degrees. After that, log 
// the updated temperatures for all 7 days to the console.


// temperature (in Celcius) for 7 days 
let arr = [22,24,25,19,17,23,24];

for(i=0;i<arr.length;i++){
    if(i==3){
        arr[i] +=2;
    }
    console.log("Temperature at Day "+(i+1)+" is "+arr[i]);
}
