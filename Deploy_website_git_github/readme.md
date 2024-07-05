# Deploy a website, GIT and Github

## Recap of JS day4

### JS Async programming
``` 
`Javascript Callbacks`

"I will call back later!"

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished

e.g.:

// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo").innerHTML = posNumbers;

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}


`Asynchronous JavaScript`

"I will finish later!"

Functions running in parallel with other functions are called asynchronous

*FYI,refer `Event Loop`*

A good example is JavaScript setTimeout()

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}


`JavaScript Promises`

"I Promise a Result!"

"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result

A Promise is an Object that links Producing code and Consuming code



Promise Object Properties
A JavaScript Promise object can be:

- Pending
- Fulfilled
- Rejected


myPromise.state	        myPromise.result
"pending"	                undefined
"fulfilled"	                a result value
"rejected"	                an error object

e.g:

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(resolve, reject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    resolve("OK");
  } else {
    reject("Error");
  }
});

// how to consume it ?

myPromise
  .then((value) => {
    myDisplayer(value)
    return 'another-value';
    }
  )
  .then((value) => {
    console.log('Another value', value);
  })
  .catch((error) => {
    myDisplayer(error)
  }
);


`JavaScript Async Await`

"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise


e.g.:

async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();



```
## what is Git
```

Git is a version control system.

Git helps you keep track of code changes.

Git is used to collaborate on code.



git --version => to get git version

git status => to see if it is a part of our repo

git add --all => Now add all files in the current directory to the Staging Environment

git commit -m "some message" => commit command performs a commit, and the -m "message" adds a message.

git commit -a -m "Updated index.html with a new line" => commit it directly

*Warning*: Skipping the Staging Environment is not generally recommended.

Skipping the stage step can sometimes make you include unwanted changes.

git command -help -  See all the available options for the specific command
git help --all -  See all possible commands

git branch hello-world-images =>  we create a new branch
 
git checkout hello-world-images => checkout is the command used to check out a branch

git checkout master => we need to change to the master branch

git merge emergency-fix => we merge the current branch (master) with emergency-fix

git branch -d emergency-fix => master and emergency-fix are essentially the same now, we can delete emergency-fix

git merge origin/master => we can merge our current branch (master) with origin/master

git pull origin <branch-name> => pull is a combination of fetch and merge. It is used to pull all changes from a remote repository into the branch you are working on

`
pull is a combination of 2 different commands:

fetch
merge

`
git log origin/master => to check git log history

git diff origin/master => we can also verify by showing the differences between our local master and origin/master


git push origin => push our changes to our remote origin

`
Git Ignore
When sharing your code with others, there are often files or parts of your project, you do not want to share.

Examples

log files
temporary files
hidden files
personal files
etc.

Git will not track files and folders specified in .gitignore. However, the .gitignore file itself IS tracked by Git.



`
```