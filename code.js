for (var i = 1; i < 12; i++) {

    setTimeout( function() {

        document.getElementById("countdownTimer").innerHTML = "The time left is :" + currTime; 

            currTime = currTime - 1

    }, 1000 * i);

}

// defines "dowhile" as a function which sets variables currtime and i to 10 and 1 respectively, then executes a do while function to print out specific text while variable i is
//under 12, and the same math sequence is executed to maintain the timer counting down. the math being used is all decrementers and multiplications of the two variables




function dowhile(){

    var currTime = 10;

        var i = 1;

        do{
            setTimeout(function () {

                document.getElementById("countdownTimer").innerHTML = "The time left is :" + currTime;

                    currTime = currTime - 1;

            }, 
                1000 * i);
                i += 1;
        }

    while (i < 12 );
}












//defines "countdown2" as a function using variable "currtime", which is preset at 10, which will be used to do all sorts of math with variable i, which is then used to define 
//which part of the if else statement is going to be used. 

function countdown2() {

        var currTime = 10;

            for (var i = 1; i <= 11; i++) {

                    if (i == 11) {
                        setTimeout( function () {

                            document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";

                        },
                         1000 * i);
                    } else if (i > 6) {

                            setTimeout(function () {

                                document.getElementById("countdownTimer").innerHTML = "Warning; Less than half way to launch, time left = " + currTime;

                                currTime = currTime - 1;

                            }, 1000 * i);

                    } else if( i == 6){

                        setTimeout(function () {

                            document.getElementById("countdownTimer").innerHTML = "We are halfway to launch.";

                            currTime = currTime - 1;

                        }, 1000 * i);
                    } else {

                        setTimeout(function () {

                            document.getElementById("countdownTimer").innerHTML = "The time left is :" + currTime;

                            currTime = currTime - 1;

                    }, 1000 * i);
                    }
            }
}