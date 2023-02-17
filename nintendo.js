/* This file is to run code for my 'nintendo' website. It will include functions for 
the pages that have an 'onload' function, and within those will be code for the relevant 
pages. */

// Setting an empty array to store elements in to access between html pages.
let reviewArray = [];

// Creating a function that will run containing code when 'Index' loads.
const loadIndex = () => {
  console.log("index loaded");
};

/* Creating a function that will run containing code when any of the console
pages load. */
const loadConsole = () => {

    /* Pushing the array contents from localStorage to the empty array to avoid 
    'saved' items dissapearing on reload. */
    reviewArray.push(JSON.parse(localStorage.getItem("array")));

  /* This function will enable the user to save items on the page, it will get
    a group of elements and move them to the 'saved' page. */
  const saveForLater = (clickedElement) => {
    // Saving the clickedElement (<button>) as a variable.
    let target = clickedElement.target;

    // Setting the text of the 'saved' button to indicate the item is saved.
    target.textContent = "Saved";

    /* Getting the parentNode until I have all the review elements that I need
        and storing them as a variable. */
    let review = target.parentNode.parentNode;

    // Setting the outerHTML of the review as a variable to push to the array.
    let reviewContents = review.outerHTML;

    // Pushing reviewContents to reviewArray so that I can use it in localStorage
    reviewArray.push(reviewContents);

    // This alert will let the user know how many 'saved' items are in their 'folder'.
    alert("You have " + reviewArray.length + " reviews saved.");

    /* Setting the reviewArray to localStorage so that I can access it
        across other html pages */
    localStorage.setItem("array", JSON.stringify(reviewArray));

    
  };

  // Storing the save button elements as a variable.
  let saveButton = document.getElementsByClassName("save");

  /* Using a for loop to iterate through the button elements and add
    a click event listener to each of them */
  for (i = 0; i < saveButton.length; i++) {
    saveButton[i].addEventListener("click", saveForLater);
  }

  // Creating a function to enable the user to 'like' a review.
  const likeReview = (clickedElement) => {
    // Saving the clickedElement (<button>) as a variable.
    let target = clickedElement.target;

    if (target.textContent == "Like") {
      // Changing the text content of the <button> to indicate it is 'liked'.
      target.textContent = "\u2665Liked\u2665";
    } else {
      target.textContent = "Like";
    }
  };

  // Getting the 'like' button as a variable.
  let likeButton = document.getElementsByClassName("like");

  // Using a loop to add an event listener to each of the elements.
  for (i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener("click", likeReview);
  }

  // This function will allow users to add comments using the existing input box.
  const addComment = () => {
    // Storing input element as a variable.
    let input = document.getElementById("comment");

    // Storing the creation of a <div> to a variable.
    let div = document.createElement("div");

    /* Changing the value of the <div> elements that will be created to
        what is in the <input> element. */
    div.innerHTML = input.value;

    // Setting a class name for the div elements for styling purposes.
    div.className = "comment-boxes";

    // Getting the empty <div> and storing as a variable.
    let userComment = document.getElementById("user-comment");

    /* Appending the empty <div> to include the comments created
        by the user */
    userComment.appendChild(div);

    /* If the input box is not empty when clicked, it will delete the
        contents */
    if (input.value != "") {
      input.value = "";
    }
  };

  let commentButton = document.getElementById("publish-comment");
  commentButton.addEventListener("click", addComment);

};

// This function will run the containing code when the 'contact' page loads.
const loadContact = () => {
  // This function is empty, until I may need to add any functionality.
};

// This function will run the containing code when the 'saved' page loads.
const loadSaved = () => {
  /* Storing the array items from local storage as a variable, to append to
    div elements innerHTML */
  let storedReviews = JSON.parse(localStorage.getItem("array"));

  /* Using a foor loop to iterate through the array from localStorage, and 
    append the elements to newly created div elements. */
  for (i = 0; i < storedReviews.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = storedReviews[i];
    let savedDiv = document.getElementById("saved-reviews");
    savedDiv.appendChild(div);
  }
};
