#How to complete Microsoft AD OAuth v2 authentication with a Node.js API

This repository is quickstart on integrating AD OAuth v2 authentication flow, utilising REST interface, to access information stored in the Microsoft Graph. 


## Pre-requisites 
* [Node.js](https://nodejs.org/en/) is required to run the app and to install dependencies.
* [Office 365 Developer Account](https://developer.microsoft.com/en-us/office/dev-program)

## Configure this Sample
1. Follow the first two steps as listed below based on the [instructions here](https://developer.microsoft.com/en-us/graph/docs/concepts/auth_v2_service):
    * [Register your app](https://developer.microsoft.com/en-us/graph/docs/concepts/auth_v2_service#1-register-your-app).
    * [Configure permissions for Microsoft Graph on your app](https://developer.microsoft.com/en-us/graph/docs/concepts/auth_v2_service#2-configure-permissions-for-microsoft-graph).


1. Add Web platform under Platforms on the app registration page, as per the screenshot below. Don't forget to save your changes at the end of the page.
![Platforms](./assets/platform.png)

1. **Get administrator consent** - inorder to access information without a user being involved, you need to get permissions from the admin user. Make the below REST GET request to get admin access on a dev/test O365 tenant. Alternatively you can replace the values and paste the below URL into a browser address bar too.

````
// Line breaks are for legibility only.
//state is just a added variable for continunity in case you have multiple requests orginiating from the same app.
//redirect_uri can be anything you like as long as it matches the value from the previous step.

GET https://login.microsoftonline.com/{tenant}/adminconsent
?client_id={get Application Id from App Registration page from Step #1}
&state=12345
&redirect_uri=https://bing.com

````


1. 
