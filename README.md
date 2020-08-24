# Welcome To OTrivia

OTrivia is a trivia website based on the [Open Trivia DB](https://opentdb.com), a database of user-contributed trivia questions that have been revised and backed by references. 

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Credit](#credit)
* [Tribute](#tribute)

## General info
The game has three modes: Chill mode(learning mode), Part of One(practice mode), and Join the Party(fun & challenging mode).

Current events have made it evident that although we are living in the information age, we do not appear to be well informed.

    "As a society, we are now spending too much time, energy, and capital battling wilful ignorance—about 
    climate control, about the genuine effects of social policies, about the extent and impact of 
    governmental programs, about immigrants,about those who are different."
   <em>[- We live in a culture of ignorance](https://newhumanist.org.uk/articles/5245/we-live-in-a-culture-of-ignorance)</em>
    
There has never been a better time to be a scholar; never better resources for an informed citizenry. It is the information we absorb that builds our belief which in turn is the basis of our ethics. With OTrivia we hope to foster a fun learning environment. We want everybody to keep learning, keep questioning and stay curious, while having fun!

## Screenshots
### Entering
<img src="Assets/start.gif" width=250px height=500px>

**Note**
  You will not be able to sign in through Snapchat, since it is in developmental phase, in which I would have to add your username in the snap kit. Hence, type your username, then choose from the pre-selected avatars or upload your own.
  
### Chill Mode
<img src="Assets/Chill.gif" width=250px height=500px>

### Part of One
<img src="Assets/Part1.gif" width=250px height=500px>

### Join the Party
<img src="Assets/Join.gif" width=250px height=500px>

Gif created in [ezgif](https://ezgif.com/) 


## Technologies
* Node/express.js
* EJS
* Restful API
* Bootstrap

## Setup
- Fork and clone the repo onto your local machine, open the folder in a VS code or other IDEs that support Node JS app development.
- Download the dependencies listed in the package.json file using npm installer. 
- Serve the website onto your local host by running "node server.js" in the terminal of your IDE.

## Code Examples

**Using local storage to store objects**
```js
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
  }
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}
```

**Mixing the choices**
```js
    $(function () {

                    var parents = $("#choices");
                    var divs = parents.children();

                    while(divs.length){
                    parents.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
                    }

                    const name = `choicefor${num}`;
                    document.getElementById('choices').setAttribute('id', `chosen${num}`);
               
                    ++num;
                }); 
```

**Programmable Search engine**
```html
 <script async src="https://cse.google.com/cse.js?cx=9e105dffdb443a09d"></script>
 <div class="gcse-search"></div> 
```

## Features
List of features ready and TODOs for future development
* Three different modes and 24 categories
* Personal scoreboard
* Custom search engine
* Mobile Responsive Design
* Retro theme 

To-do list:
* Improve interface
* Group scoreboard

## Status
Project is: in progress

## Website

To start using the OTrivia Game app click the link below and make sure to type your username as well as select an avatar before starting the game. To use you own bitmoji as a avatar you need to sign-in with your snap username and password in order for the bitmoji to show up as your avatar.

Enjoy the game!

https://otriviagame.herokuapp.com/

## Credit

This project was a collaborative effort and the following members worked on this project:

- [mariamawit-a](https://github.com/mariamawit-a)
- [KubanLink](https://github.com/KubanLink)
- [Jwill1551](https://github.com/Jwill1551)

## Tribute
- SEA instructors, peers, and everybody involved 
- Bixel Exchange
- Snap inc. volunteers
