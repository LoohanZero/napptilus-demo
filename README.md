# The Oompas' Selector

This is an app that is able to display all the workers in the Willy Wonka factory and it allows their users to filter the Oompas by firstname, lastname or profession. If you click/press enter in any Oompa, the user will be able to see the Oompa's details.

## Installation Instructions

```bash
Clonar el repositorio
npm i
npm start
```

This app is created with React JS, Vanilla Javascript and CSS.

## Home Image

![Home Image](/src/imgs/Home.png)

## Details Image

![Home Image](/src/imgs/Details.png)

## Organization

I decided to make a primitive component for each JSX tag as primitive components and save them in the primitive folder. Then I could the information needed by the functional components as props. By individualizing them I was able to reuse them as different components (see Heading or Container) or separate the logic from the JSX component itself.
I've also decided to separate the styles files from the Javascript files so everything is separated and easily displayed. Both folders have exactly the same name files so they could be easy to find.

## Instructions explanation

> "This view should show the list of Oompa Loompas that are available at the endpoint https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=1 where the page query param can be used to select the page to be retrieved. The list must have an endless scroll, so that each page of Oompa Loompas is loaded as the user scrolls down."

I made this possible by getting the info from the API with an asyncronous function in a useEffect hook that will execute when the page mounts, adding a scroll eventListener to the window and taking it off when it unmounts. Another useEffect hook will trigger a handleScroll function that checks everytime the user scrolls down how far from the bottom they are and when it gets to the limit set up, it will trigger a change in the state of the variable "isBottom". This change in the state will do several things: it will trigger the useEffect make a search on the api with that new number. Then it will add the data received to the previous "oompas" variable (if there's an array of them, else it will add it to an empty array). Then, it will set the variable "isBottom" to false because the user is no longer in the bottom of the page as new cards were displayed in the rerender. And finally it will add 1 to the page and save it as a state and in the local storage for the future scroll down.

I first made one useEffect for both but then realized it wasn't triggering the listeners for the scroll everytime so it wasn't going to work. That's why I separated them.

> "The user can filter the list that has already received by profession and name (first and last name). No call is required in order to filter the list of Oompa Loompas, the filter will only take into account the already downloaded list. Filtering must have an immediate effect, so the items on the list will change as the user types characters on the filter."

I first decided to do it in the Search component but realized I would need to make a context to search for the information required. As this is a small App I decided not to do it and move the logic from the Search component to the Home one and send the information Search component required as props.
I created a filterOompas function that will trigger before the map function in the Home. It will first filter the Oompas according to the input information received on the search input and it displays at the same time the information available according to it.

> "It must be taken into account that some episodes description include HTML and it should be shown interpreted (not escaped)."

I did it with the "dangerouslySetInnerHTML" attribute but, as it said it's very dangerous (it's the first time I've ever used it) I finally decided to implement a security library to avoid security implications. It was dompurify. Then it gave me problems when I tried to install new packages so I uninstalled it and installed Interweave. Interweave is a library that allows React to access pure HTML without using "dangerouslySetInnerHTML".

> "Once the detail is obtained for the first time from the external service, it must be stored in the client so that it is only requested if more than one day has passed since the last time it was requested."

I stored in the localStorage. The useEffect function has an if condition that checks if the localStorage has the information required, if it does, then the info from the localStorage is displayed. Then it checks if this info is 24hs or more old and if it is, it removes the info from the localStorage. If the localStorage is empty, it triggers the search from the API and retrieves new information.
I organized the info in an object with two properties: oompa and oompas. Oompa is for the individual Oompa checked by the user. It saves the data's expiration date in one property and the oompa's description in an object's array. To save the individual Oompa first I needed to check if there was any info in the "data" property. If there wasn't, I needed to create the empty array to add the individual Oompa's description and the ID. When you retrieve the information from the API, the ID is not included so I had to save it in the Oompa's object to be able to identify it. Then if a second Oompa is being stored, I could check the ID to make sure it's not the same Oompa as I don't want it stored more than once.
Ooompas' property is saved from the Home page. It's stored as well in an object with three different properties: the expiration date, the future page the API should retrieve given the case the user comes back in less than 24 hours and the object's array retrieved by the fetch. This function makes sure to not overwrite the previous information so every new page is saved along with the previous ones.

I first decided to do it all directly on the home page but it ended up being rather disorganized. So I moved the scroll logic to a hook and imported the functions and variables I needed to the home and then decided to do the same with the localStorage logic. So the code would be more readable and less crowded.

## Styles

The styles were made in CSS. I made an index file for the global styles and then a module for each different functional component.

## Extras

I decided to add a spinner for the loading of the images with react-spinners and @emotion/core to override the default CSS it has. I've also added an Error Page in case there's any. As well as a ScrollToTop component that scrolls the oompa's details page to the top because when you scrolled down to the last oompas in the home and chose one, the page was showed from the bottom.
Finally I've added a \_redirects file in the public folder for deployment.

## María Luján Sanchez Cracco

Github: https://github.com/LoohanZero/ <br />
Linkedin: https://es.linkedin.com/in/lujansanchez

## Licence

Napptilus Tech Labs: http://napptilus.com/
