var array1 = [ [1,2,3], [3,4,5], [6,7,8] ];
var array2 = [ [1,2,3], [1,2,3], [1,2,3] ];
 
function matrix_add(arrayOne, arrayTwo) {
    var outputArray = [];
    for (var outerCount = 0; outerCount < arrayOne.length; outerCount++) {
        var innerArray = [];
        for (var innerCount = 0; innerCount < arrayOne[outerCount].length; innerCount++) {
            var addedNum = arrayOne[outerCount][innerCount] + arrayTwo[outerCount][innerCount];
            innerArray.push(addedNum);
        }
        outputArray.push(innerArray);
    }
    return outputArray;
}