FIZZBUZZ in JS 

Fizzbuzz written in JS (unit + feature test done with acceptance test traning package)

____________________________________

Prerequisites

- npm
_____________________________________

Built With

- Javascript
- Test ran with Chai and Mocha, CSS done with Tailwind package  

_____________________________________
Questions:

Question 1. In your README to the best of your knowledge please explain what the following lines of code do?
``` let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js'); eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`) ``` 
Answer:




Question 2. In your README to the best of your knowledge please explain why we are placing the
let fizzBuzz = new FizzBuzz
outside the it block?

Answer:
Because then fizzBuzz variable would not be not accessible to the other tests hence we would need to rewrite the same line for every it block in the code.


Question 3. In your README to the best of your knowledge please explain the difference between using === and == in JS?

Answer:
In JS == looks for the variable value based upon content whereas === evaluates both content and data type so 
5 == “5” // returns true, because the string is converted into number and then the two values are compared instead 
5 === “5” // returns false because the data type differs (the first value is an integer and the second a string)

Question 4. In your README to the best of your knowledge please explain why we are moving (number % 5 === 0) to the top?
Answer: The position of that line is irrelevant, the only line of code that matters is the (number % 5 === 0 && number % 3 === 0)  because if we don’t place it at the top, the function will never be able to identify a fizzbuzz since the code get written top to buttom so eg. Number 15 will return either fizz or buzz depending on how we wrote the code but never fizzbuzz because the loop would stop before reaching the ‘fizzbuzz’ part. 

Question 5. In your README to the best of your knowledge please explain the difference between feature and unit test
Answer:
Unit test is meant to test a specific method or functionality within a class whereas feature test checks that all of the methods combined together with the dependencies will work. 

Question 6. In your README to the best of your knowledge please explain what expectations in the context of testing are
Answer: 
Expectations are the equivalent of “it” statement in unit testing. Expectations are there to tell the program what the expected result is supposed to be and it will then be compared to the actual result and the test will either pass or fail based on the result. 

Question 7. In your README to the best of your knowledge please write a line to line explanation of what is happening in this code
Answer:
<script src="src/js/fizz-buzz.js"> </script>     
     <script>         
	document.addEventListener('DOMContentLoaded', () => {             
	let button = document.getElementById('button')             
	let displayDiv = document.getElementById('display_answer')                 button.addEventListener('click', () =>{                 
                 		let value = document.getElementById('value').value                 
		let fizzBuzz = new FizzBuzz                 
		let result = fizzBuzz.check(value)                 
		displayDiv.innerHTML = result;             
})         
})     
</script>
line 1: We are linking through a script tag the file we are working on with the javascript file fizz-buzz.js 

line 3: we are calling on all the event listener to start functionalities to our  webpage for the user to use it when the page loads. 
line 4:  we are assigning the variable button to the event listener 
line 5: we are assigning the variable displayDiv to the event listener so that we will have a display where to insert answers
line 6: the button becomes interactive when clicked on 
line 7: this line allows the program to get the value inserted by the user and stores it as a value
line 8: we are creating a new instance of the object fizzBuzz
line 9: we are asking to show the result got from the fizzBuzz function when the value has been inserted and store them in a variable called result




Question 8. In your README to the best of your knowledge please explain what a CDN (Content Delivery Network) is?
Answer: 
In order to deliver data faster to users websites use CDN that are spread around the globe. Once the user wants to open for example the facebook logo instead of having to ping their main server they can get it in a faster way through the closer CDN to their location. 

