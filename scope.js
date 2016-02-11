var a = 1, b = 2, c = 3;

var firstFunction = function(){

    var b = 5, c = 6;
    console.log(a, b, c)

    var secondFunction = function(){

        var b = 8;
        console.log(a, b, c)

        var thirdFunction = function(){

            var a = 7, c = 9;
            console.log(a, b, c)

        }

    }
}

firstFunction()





 

