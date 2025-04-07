# Just Eat Takeaway Restaurant Data Project

**Project status**: In progress  
**Deployed link**: [https://chughes13.github.io/JET-restaurant-data/](https://chughes13.github.io/JET-restaurant-data/)



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
Lofi wireframes to be added.

#### Desktop
Lofi wireframes to be added.

[Back to top](#)

***

## Features
This project was planned out using agile principles. I used the MoSCoW prioritisation method to determine which features were most important and a "must have" in order to meet the user's needs and achieve a MVP in this initial sprint.
INSERT MOWCOW IMAGE here and link/credit 
https://www.bitesizelearning.co.uk/resources/moscow-prioritisation-model

### Existing Features
- Search by postcode form.
- Fetches and displays restaurant data from the Just Eat API.
- Displays: Restaurant logo, restaurant name, cuisine type/s, rating and address.
- Responsive layout for mobile, tablet and desktop.
- Error handling for invalid postcodes or no results found.

### Features Left to Implement
Using the MoSCoW method, it was determined that these features weren't essential to create a MVP but are more "should-have" and "could-have". Due to time constraintents these features were left out, but they would make great additions to the application in the future.

- **Sorting**: Sort results by rating or name.
- **Pagination**: To show more than just the first 10 restaurants.
- **Filters**: The ability to filter restaurants based on cuisine or rating.
- **Loading indicator**: A simple animation that lets the user know the search is in progress.
- **Map integration** To show the locations of the restaurants on a map (better for user).
- **Back to top button**: Quality of life feature. Saves having to scroll - a small issue, but annoying nontheless.

[Back to top](#)

***

## Testing and Debugging

Testing was done throughout, both manually (by myself and outside testers) and using validators (see below).

### Manual Testing
Manual testing was performed throughout using console.log and console.error.

| Test | Expected Result | Actual Result	| Pass/Fail |
| ------ | ------------------- |----------------- |------------ |
|  Input valid postcode into the search bar (BS3 4AE) |  List of first 10 restaurants shown as individual cards |  Works as expected  |  Pass  |
|  Input invalid postcode into the search bar (BS3 4AE) |  Error message appears below search bar prompting the user to enter a valid postcode  |  Works as expected  |  Pass  |
|  Leave the search bar empty and then hit search button  |  Error message appears below search bar prompting the user to enter a valid postcode  |  Works as expected  |  Pass  |
|  Resize window to test layout responsiveness (mobile vs tablet vs desktop) |  List of first 10 restaurants shown as individual cards |  Works as expected  |  Pass  |
|  Ensure restaurant data is correctly displayed  |  Each restaurant's data (name, cuisine, rating, address) will be shown as a card in that order with the correct details | Works as expected  |  Pass  |


### Validator Testing

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

[Back to top](#)

***


## Setup and Running the Application

1. Clone the repository:
git clone https://github.com/CHughes13/JET-restaurant-data.git

2. Go into the project directory and open `index.html` in your browser.

3. Ensure you have access to the Just Eat API demo server to fetch live data.


[Back to top](#)

***

## Deployment
This project is deployed via GitHub Pages:

[https://chughes13.github.io/JET-restaurant-data/](https://chughes13.github.io/JET-restaurant-data/)


***


## Credits
__Resources Used and Consulted__ 
- [Just Eat Takeaway API and API Documentation](https://uk.api.just-eat.io/docs)
- [Just Eat Color scheme Pie](https://pie.design/foundations/colour/tokens/alias/light/)
- [Brand box](https://brand-box.marketing.just-eat.com/)
- [Medium ](https://medium.com/jetux) for articles on Just Eat UX
- [MDN web docs](https://developer.mozilla.org/) for helpful guides on all things coding.
- [W3Schools](https://www.w3schools.com/) for helpful guides on all things coding.
- [Stack Overflow](https://stackoverflow.com/) for troubleshooting and understanding coding concepts.
- [ChatGPT](https://openai.com/chatgpt/) used throughout for coding advice, troubleshooting and inspiration.
- [Blackbox AI](https://www.blackbox.ai/) used throughout for coding advice, troubleshooting and inspiration.
- Angela Yu's [The Complete 2024 Web Development Bootcamp course on Udemy](https://www.udemy.com/course/the-complete-web-development-bootcamp)
- [Bro Code](https://www.youtube.com/@BroCodez)'s helpful YouTube tutorials and explanations.
- [JSON Visualiser](https://jsonviewer.stack.hu/)
-[Postman](https://web.postman.co/)

__Media__  
- [Font Awesome](https://fontawesome.com/) for the social media icons in the footer and magnifying glass in search bar.
- Restaurant logos and favicons courtesy of the [Just Eat](https://www.just-eat.com) website.

__Special Thanks To__ 
- The Just Eat team for this wonderful opportunity.
- Code Institute's Coding Bootcamp.
- Christopher, Sebastian and Ian for all their technical support, advice and testing.

[Back to top](#)

