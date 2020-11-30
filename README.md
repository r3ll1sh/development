##README##

I use the following files for my site's functionality:

App.js initializes the list of cities, and passes it to List.jsx. It does not contain any important functionality in itself. 

List.jsx handles most of the listing logic. Its state structure keeps track of the current sorts and filters applied, as well as the items currently in the cart. It passes these parameters to ListItem to render the cards. It also contains functions to handle user actions, including clicking a filter or sort button or adding/removing an item from the cart. Most of the HTML for the site is in this class.

ListItem.jsx handles the rendering of each card, using the parameters passed to it by List. It also checks whether a card is filtered out to decide whether to render it or not, rather than this being handled in List.  

I use React Bootstrap for the site's visuals. Specifically, I use Cards and CardDecks to organize the city's cards.
