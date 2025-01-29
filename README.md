# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > Your answer here // 
   
   Inside the Kids.js module, a document.addEventListener listens for the specified 'click' event. When a click happens anywhere on screen it executes the arrow function with an argument of onClick. The function retrieves the data stored in the selected ordered list by using onClick.target.dataset and stores it in a variable called clickedData. It then checks using a if statement if the clickedData is a child by checking if clickedData.type is strictly equal to the string 'child', and if clickedData.type is strictly equal to 'child' it executes a window alert with the template literal `${clickedData.name} wish is ${clickedData.wish}`.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Your answer here //
   
    The `findCelebrityMatch()` accepts only a single child as a parameter and returns the matching celebrity. To match each child with their celebrity, you need to iterate over an array of the children and invoke the function for each child.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > Your answer here //
   
   The name of the celebrities sport is stored in a data attribute called data-sport, when the element is clicked the data attributes are retrieved and stored in the clickedData variable using onClick.target.dataset. They are then interpolated inside of the template literal using clickedData.sport.

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Your answer here //

   In main.js we import the Pairing function from the Pairings.js module, the Celebrities function from the CelebrityList.js module, and the Kids function from the Kids.js module. Document.querySelector("#container") then selects the main container in index.html and stores a reference to the variable mainContainer. ApplicationHTML is then declared and it stores an html template literal that invokes the imported functions to generate the html strings for their respective sections. ApplicationHTML is then inserted into the main container using mainContainer.innerHTML
