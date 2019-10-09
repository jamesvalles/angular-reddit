# NgBook: Angular Reddit

The github file for this project is located at: https://github.com/jamesvalles/angular-reddit.git

Part I see pdf I wrote a total of 9 user stories. For the coding portion, I added the property to the article model called role. 
I instantiated the newly added field and set the role field to either user or administrator. 
BBC and Fullstack have the role set to 'administrator'. 
I added a button element and even used semantic ui to create the flag icon. 
The button only appears if role is set to administrator. I used an ngif directive. 

Extra credit: 
I added a click event to the flag button which calls a service I created called flag-article. The flag article passes the article to the app component, where the value is downvoted to the lowest value and pushes the article to the bottom of the screen when flag is pressed. 

I completed dg build and submitted to D2L. Thank you. This was a fun assignment. 