# Summary
A web app that displays key information about different breed cats to help new or future cat owners or simply satisfy the interest of the curious.

# Tools
HTML,SASS <br>
React-Bootstrap https://react-bootstrap.github.io/ <br>
React <br>
Axios library https://github.com/axios/axios

# How does it work?
On initial load the app fetches all cat breeds information <br>
via a GET request to "The Cat API" (thecatapi.com) <br>
and displays breed names in the dropdown menu. <br>
<br>
When the user select a breed the app is rerendered <br>
and sends another GET request to the API with the unique breed id. <br>
It then displays all the information on a card component.
