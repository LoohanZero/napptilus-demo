# The Oompas' Selector

This is an app that is able to display all the workers in the Willy Wonka factory and it allows their users to filter the Oompas by firstname, lastname or profession. If you click/press enter in any Oompa, the user will be able to see the Oompa's details.

## Installation Instructions

```bash
npx create-react-app
npm i eslint
npm i dompurify

```

This app is created with React JS and Vanilla Javascript.

## Home Image

![Home Image](/src/imgs/Home.png)

## Details Image

![Home Image](/src/imgs/Details.png)

> "This view should show the list of Oompa Loompas that are available at the endpoint https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=1 where the page query param can be used to select the page to be retrieved. The list must have an endless scroll, so that each page of Oompa Loompas is loaded as the user scrolls down."

I made this possible by getting the info from the API with an asyncronous function in a useEffect hook that will execute when the page mounts, adding a scroll eventListener to the window and taking it off when it unmounts. Another useEffect hook will trigger a handleScroll function that checks everytime the user scrolls down how far from the bottom they are and when it gets to the limit set up, it will trigger a change in the state of the variable "isBottom". This change in the state will do several things: it will trigger the useEffect make a search on the api with that new number. Then it will add the data received to the previous "oompas" variable (if there's an array of them, else it will add it to an empty array). Then, it will set the variable "isBottom" to false because the user is no longer in the bottom of the page as new cards were displayed in the rerender. And finally it will add 1 to the page and save it as a state for the future scroll down.

I first made one useEffect for both but then realized it wasn't triggering the listeners for the scroll everytime so it wasn't going to work. That's why I separated them.

> "The user can filter the list that has already received by profession and name (first and last name). No call is required in order to filter the list of Oompa Loompas, the filter will only take into account the already downloaded list. Filtering must have an immediate effect, so the items on the list will change as the user types characters on the filter."

I first decided to do it in the Search component but realized I would need to make a context to search for the information required. As this is a small App I decided not to do it and move the logic from the Search component to the Home one and send the information Search component required as props.
I created a filterOompas function that will trigger before the map function in the Home. It will first filter the Oompas according to the input information received on the search input and it displays at the same time the information available according to it.

> "It must be taken into account that some episodes description include HTML and it should be shown interpreted (not escaped)."

I did it with the "dangerouslySetInnerHTML" attribute but, as it says it's very dangerous (it's the first time I've ever used it) I've decided to implement a security library to avoid security implications. It is dompurify.

> "Once the detail is obtained for the first time from the external service, it must be stored in the client so that it is only requested if more than one day has passed since the last time it was requested."

I stored in the localStorage. The useEffect function has an if condition that checks if the localStorage has the information required, if it does, then the info from the localStorage is displayed. Then it checks if this info is 24hs or more old and if it is, it removes the info from the localStorage. If the localStorage is empty, it triggers the search from the API and retrieves new information.

I first decided to do it all directly on the home but it ended up being rather disorganized. So I moved the check the scroll logic to a hook and imported the functions and variables I needed to the home and then decided to do the same with the localStorage logic. So the code would be more readable and less crowded.

## María Luján Sanchez Cracco

Github: https://github.com/LoohanZero/ <br />
Linkedin: https://es.linkedin.com/in/lujansanchez

## Licence

Napptilus Tech Labs: http://napptilus.com/

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# napptilus-demo
