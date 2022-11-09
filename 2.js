
//. Write a code that for a given grade from 0 to 100 will print:
//1. The letter grade of the user (Using if/else).
//2. Using the calculated grade letter, check if the grade is passing or failing (Using switch).


function findGradeLetter(grade){
    if(grade>=97 && grade<=100){
        console.log("Your grade is "+grade+" which corresponds to A+");;
    }
    else if(grade>=93 && grade <=96){
        console.log("Your grade is "+grade+" which corresponds to A")
    }
    else if(grade>=90 && grade <=92){
        console.log("Your grade is "+grade+" which corresponds to A-")
    }
    else if(grade>=87 && grade <=89){
        console.log("Your grade is "+grade+" which corresponds to B+")
    }
    else if(grade>=83 && grade <=86){
        console.log("Your grade is "+grade+" which corresponds to B")
    }
    else if(grade>=80 && grade <=82){
        console.log("Your grade is "+grade+" which corresponds to B-")
    }
    else if(grade>=77 && grade <=79){
        console.log("Your grade is "+grade+" which corresponds to C+")
    }
    else if(grade>=73 && grade <=76){
        console.log("Your grade is "+grade+" which corresponds to C")
    }
    else if(grade>=70 && grade <=72){
        console.log("Your grade is "+grade+" which corresponds to C-")
    }
    else if(grade>=67 && grade <=69){
        console.log("Your grade is "+grade+" which corresponds to D+")
    }
    else if(grade>=63 && grade <=66){
        console.log("Your grade is "+grade+" which corresponds to D")
    }
    else if(grade>=60 && grade <=62){
        console.log("Your grade is "+grade+" which corresponds to D-")
    }
    else if(grade>=0 && grade <=60){
        console.log("Your grade is "+grade+" which corresponds to F")
    }

}
findGradeLetter(35)

function findGrade(grade){
    switch(grade){
        case "A+":
            console.log("You passed");
            break;
        case "A":
            console.log("You passed");
            break;
        case "A-":
            console.log("You passed");
            break;
        case "B+":
            console.log("You passed");
            break;
        case "B":
            console.log("You passed");
            break;
        case "B-":
            console.log("You passed");
            break;
        case "C+":
            console.log("You passed");
            break;
        case "C":
            console.log("You passed");
            break;
        case "C-":
            console.log("You passed");
            break;
        default:
            console.log("You failed");

    }
}
findGrade(findGradeLetter)