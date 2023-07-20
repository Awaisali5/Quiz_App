// making the question array in javaScript 

const questions =[
    {
        'ques': "What is the Capital of Pakistan?",
        'a' : "Islambad",
        'b': 'Lahore',
        'c': "Karachi",
        'd': "Multan",
        'right':"op1"

    },

    {
        'ques': "What is most famous Programming Langauge ?",
        'a' : "Java",
        'b': 'JavaSscript',
        'c': "Python",
        'd': "C++",
        'right':"op2"

    },


    {
        'ques': "how many months in the year?",
        'a' : "10",
        'b': '20',
        'c': "12",
        'd': "24",
        'right':"op3"

    }

]

// question load function 

let index =0;
  // to get the question in variable 
  const QuestionBox = document.getElementById("question");

  // to get all the options 
 const inputOptions= document.querySelectorAll(".options"); 


//  to get results 
let totals = questions.length;

// right and wrong

let right =0 ,
 wrong =0; 

const QuestionLoad =() => {

if(index === totals){
    return End_Quiz();

}
reset();

  


    const data=questions[index];
    // console.log(data)

    QuestionBox.innerText=` ${index+1} )${data.ques}`;

    inputOptions[0].nextElementSibling.innerText=data.a;
    inputOptions[1].nextElementSibling.innerText=data.b;

    inputOptions[2].nextElementSibling.innerText=data.c;

    inputOptions[3].nextElementSibling.innerText=data.d;




}

// submitted quiz function 

const submit_Quiz =() => {
    
    const data =questions[index];
    const ans=getAnswer();


    // to check the answer 
    // console.log(ans,data.right);

    if(ans == data.right){
        right++;

    }else{
        wrong++;
    }
    index++
    QuestionLoad();
    return;
}


// Getting the Answer function to get the selected value 
const getAnswer =() => {

    let Answer;
    inputOptions.forEach((input) => {
        if(input.checked){
           Answer=input.id; 
        }
    });
    return Answer;
}

//reset function

const reset =() => {

    inputOptions.forEach(
        (input)=> {
            input.checked = false;
        }
    )
}


// end quiz function 

const End_Quiz =() =>{
    document.getElementById("box").innerHTML= `
    <h3 style=color:green> Thank you for submitted the quiz </h3>
    <h2> ${right} / ${totals} are Correct Answers`
}


// initalization of function 
QuestionLoad();