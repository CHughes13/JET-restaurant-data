# Just Eat Takeaway Restaurant Data Project

**Project status**: In progress  
**Deployed link**: [https://chughes13.github.io/JET-restaurant-data/](https://chughes13.github.io/JET-restaurant-data/)

![jet-project-deployed-start-screen](https://github.com/user-attachments/assets/ba058984-c0eb-4769-8127-f3e3ecc262e3)


***

## Contents
- [Introduction](#introduction)
- [Assumptions / Unclear](#assumptions--unclear)
- [Technologies Used](#technologies-used)
- [UX/UI](#uxui)
  - [Site Goals](#site-goals)
  - [User Stories](#user-stories)
  - [Wireframes](#wireframes)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Features Left to Implement](#features-left-to-implement)
- [Testing and Debugging](#testing-and-debugging)
- [Setup and Running the Application](#setup-and-running-the-application)
- [Deployment](#deployment)
- [Credits](#credits)

[Back to top](#)

*** 

## Introduction
The aim of this project is to create a responsive web application that allows users to search for local restaurants by postcode using the Just Eat Takeaway API. Results will display key information about the restauant in a clean, user-friendly layout. Results must include, at minimum:
- Restaurant name
- Type of cuisines
- Rating (as a number)
- Address

This web application was built by Christina Hughes - [GitHub](https://github.com/CHughes13), [LinkedIn](https://www.linkedin.com/in/chughes13/)

[Back to top](#)

*** 

## Assumptions / Unclear
While Just Eat Takeaway provided a project brief, these are the following points that I found unclear and made my own assumptions about:

- Users search for restaurants by postcode.
- I assumed an API key would be provided — if not, mock data would be used.
- Features like pagination or advanced filtering were considered out of scope for MVP due to time constraints.


[Back to top](#)

***

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- [Balsamiq](https://balsamiq.com/) (for wireframes)


[Back to top](#)

***

## UX/UI
### Site Goals
- Allow users to search for restaurants by postcode (10 to be shown).
- Display key restaurant data: name, cuisines, rating and address.
- Provide a clean, responsive and accessible layout.
- Prioritise mobile-first design...
- ... with a good user experience on tablet and desktop too.


[Back to top](#)

***    
  
### User Stories
The project brief did not specify a specfic user (customer, delivery driver, restaurant, in-house Just Eat team, etc.) so I opted to go with a customer as the user.

__As a user:__
- I want to search for restaurants near me using a postcode.
- I want to see useful information about each restaurant quickly. / I don't want to be overwhelmed by too much irrelevant information.
- I want to be able to sort/filter the data that appears so I can find exactly what I want, quickly.
- I want fast loading times.
- I want the website to work well on both mobile and desktop.

  [Back to top](#)

***  

## Wireframes

Created using Balsamiq, here are the initial lofi wireframes for the project. These provide a visual outline of the planned layout and proposed functionality.

#### Mobile
Lofi wireframes for mobile devices. From left to right: start screen, screen displaying results as cards, error feedback for the user.
![lofi-wireframe-mobile](https://github.com/user-attachments/assets/3f3235d3-5f5d-4ece-a397-d0dcd7b5cbb7)

#### Desktop
Lofi wireframes for desktop. From left to right: start screen, screen displaying results as cards, error feedback for the user.

Start screen
![lofi-wireframe-desktop-start-screen](https://github.com/user-attachments/assets/75d1436e-d4bd-4ef9-9fbd-68fc89251387)


Screen displaying results as cards
![lofi-wireframe-desktop-1-display-screen](https://github.com/user-attachments/assets/7e90d7a6-55aa-4e5a-9d20-81b88ebc2dce)


Error feedback for the user
![lofi-wireframe-desktop-error-feedback](https://github.com/user-attachments/assets/ae58533a-f827-4559-b4b4-b42a1544a5b8)


[Back to top](#)

***

## Features
This project was planned out using agile principles. I used the MoSCoW prioritisation method to determine which features were most important and a "must have" in order to meet the user's needs and achieve a MVP in this initial sprint.

MoSCoW Method Diagram courtesy of [Bitesize Learning](https://www.bitesizelearning.co.uk/resources/moscow-prioritisation-model)
![moscow-method-diagram](https://github.com/user-attachments/assets/1de1b53d-69a4-44b9-83d0-52d6650d9523)


### Existing Features
- Search by postcode form.
![jet-project-deployed-start-screen](https://github.com/user-attachments/assets/d3a65a81-572b-4502-b20d-2b12260ede77)


- Fetches and displays restaurant data from the Just Eat API.
- Displays: Restaurant logo, restaurant name, cuisine type/s, rating and address.
![jet-project-deployed-results-display](https://github.com/user-attachments/assets/0a60f266-a514-4eae-8bc1-d55f6e4b2832)


- Responsive layout for mobile, tablet and desktop (NOTE: Ideally the cards on tablet and mobile would change to display 2 or 3 cards across one row using display: flex).
![responsive-layout-mobile](https://github.com/user-attachments/assets/4fcdf6a0-83b6-4534-9f11-741bc0fdf589)
![responsive-layout-desktop](https://github.com/user-attachments/assets/fa7214cd-fe63-420f-8f71-c2ff469461ac)


- Error handling for invalid postcodes or no results found (Note: Was working, but now isn't. Added to "Known Bugs" section below)


### Features Left to Implement
Using the MoSCoW method, it was determined that these features either weren't essential to create a MVP and/or due to time constraints these features were left out, but they would make great additions to the application in the future.

- **Sorting**: Sort results by rating or name.
- **Pagination**: To show more than just the first 10 restaurants.
- **Filters**: The ability to filter restaurants based on cuisine or rating.
- **Loading indicator**: A simple animation that lets the user know the search is in progress.
- **Map integration** To show the locations of the restaurants on a map (better for user).
- **Back to top button**: Quality of life feature. Saves having to scroll.

[Back to top](#)

***

## Testing and Debugging

Testing was done throughout, both manually (by myself and outside testers) and using validators (see below).

### Manual Testing
Manual testing was performed throughout using console.log and console.error, as well as web dev tools in Google Chrome.
![testing-dev-tools-console](https://github.com/user-attachments/assets/61f1dd8b-beda-411c-bb7e-20bc527ce2f9)



| Test | Expected Result | Actual Result	| Pass/Fail |
| ------ | ------------------- |----------------- |------------ |
|  Input valid postcode into the search bar (BS3 4AE) |  List of first 10 restaurants shown as individual cards |  Works as expected  |  Pass  |
|  Input invalid postcode into the search bar (123123) |  Error message appears below search bar prompting the user to enter a valid postcode  |  Was working as expected. Now has a "TypeError: Cannot read properties of undefined (reading 'logoUrl)    |  Fail  |
|  Leave the search bar empty and then hit search button  |  Error message appears below search bar prompting the user to enter a valid postcode  |  Was working as expected. Now has a "TypeError: Cannot read properties of undefined (reading 'logoUrl)  |  Fail  |
|  Resize window to test layout responsiveness (mobile vs tablet vs desktop) |  List of first 10 restaurants shown as individual cards |  Works as expected  |  Pass  |
|  Ensure restaurant data is correctly displayed  |  Each restaurant's data (name, cuisine, rating, address) will be shown as a card in that order with the correct details | Works as expected  |  Pass  |



### Validator Testing - TBA

- HTML
  - Passed through the official [W3C validator](https://validator.w3.org/): some errors
Insert screenshots here 

- CSS
  - Passed through the [Jigsaw validator](https://jigsaw.w3.org/css-validator/) successfully:
Insert screenshot here 

- JavaScript
Insert screenshots here 

- Website Optimization and Accessibility tested using Lighthouse via Chrome DevTools:
  - __Desktop__  
Insert desktop screenshot here
  
  - __Mobile__  
Insert mobile screenshot here

[Back to top](#)

***

### Bugs Fixed

| Bug | Fix |
|-----|-----|
| API call returning CORS error and data not displaying after fetch | Requested access to API demo server |
| Favicons not showing up on deployed site | Corrected file paths from absolute to relative |


### Known Bugs
| Known Bug | Potential Fix |
|-----|-----|
| (1) Error message to prompt user to enter a valid postcode. Was working as expected. Now has a "TypeError: Cannot read properties of undefined (reading 'logoUrl)    |  TBA  |
| (2) Any search after the first appears after the first search - first search doesn't clear and cards just keep adding to the bottom    |  Need to clear previous search results completely  |
| (3) Style issue on cards where numbers of ordered list appear when they shouldn't |Target and apply CSS: list-style-type: none;|
| (4) Restaurant data - cuisines includes more then just food types, but also deals and offers as well | Need to make sure that when code loops through it doesn't include these particular terms/knows to ignore them |


Bug (1) and (2)
![Screenshot 2025-04-08 020332](https://github.com/user-attachments/assets/8915fca9-5d33-433a-9e88-4a35c6ca988d)


Bugs (3) and (4)
![responsive-layout-mobile](https://github.com/user-attachments/assets/266698c3-2614-4b36-9c24-7eda2219b68c)


[Back to top](#)

***


## Setup and Running the Application

1. Clone the repository:
git clone https://github.com/CHughes13/JET-restaurant-data.git

2. Go into the project directory and open `index.html` in your browser.

3. Ensure you have access to the Just Eat API demo server to fetch live data. I used a free public proxy server (limited use) to avoid CORS issues. Please note that the demo server here only offers permission for a limited time, so you will have to manually go in and click the button on their website to enable access.
```
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiUrl = `https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`;

```
[Back to top](#)

***

## Deployment
This project is deployed via GitHub Pages:

[https://chughes13.github.io/JET-restaurant-data/](https://chughes13.github.io/JET-restaurant-data/)


***


## Credits
__Resources Used and Consulted__ 
- [Just Eat Takeaway API and API Documentation](https://uk.api.just-eat.io/docs)
- [Just Eat PIE Design System](https://pie.design/)
- [Brand box](https://brand-box.marketing.just-eat.com/)
- [Medium ](https://medium.com/jetux) for articles on Just Eat UX
- [MDN web docs](https://developer.mozilla.org/) for helpful guides on all things coding.
- [W3Schools](https://www.w3schools.com/) for helpful guides on all things coding.
- [Stack Overflow](https://stackoverflow.com/) for troubleshooting and understanding coding concepts.
- [ChatGPT](https://openai.com/chatgpt/) used throughout for coding advice, troubleshooting and inspiration.
- [Blackbox AI](https://www.blackbox.ai/) used throughout for coding advice, troubleshooting and inspiration.
- Angela Yu's [The Complete 2024 Web Development Bootcamp course on Udemy](https://www.udemy.com/course/the-complete-web-development-bootcamp)
- [Bro Code](https://www.youtube.com/@BroCodez)'s helpful YouTube tutorials and explanations.
- [Postman](https://web.postman.co/) to test API.
- [JSON Visualiser](https://jsonviewer.stack.hu/) to display JSON in a nice, clean format.


__Media__  
- [Font Awesome](https://fontawesome.com/) for the social media icons in the footer and magnifying glass in search bar.
- Restaurant logos and favicons courtesy of the [Just Eat](https://www.just-eat.com) website.
- MoSCoW Method Diagram courtesy of [Bitesize Learning](https://www.bitesizelearning.co.uk/resources/moscow-prioritisation-model).

__Special Thanks To__ 
- The Just Eat team for this wonderful opportunity.
- Code Institute's Coding Bootcamp.
- Chris, Seb and Ian for all their technical support, advice and testing.

[Back to top](#)

