### Gurukula Automation  

### Key Technologies
* Protractor - As gurukula is an angular app, protractor was the best choice
* Jasmine -  Default test framework comes out of the box from in protractor
* Typescript - Transpiler for javascript to add static features

### Scenarios Automated

* Login to app with admin credentials.
* Create a new branch.
* Search & verify the created branch.
* Delete the branch.
* Create a new staff.
* Search & verify the created staff.
* Delete the staff.

### To Get Started

#### Pre-requisites

1. Java Installed in the system

2. NodeJS installed globally in the system.
https://nodejs.org/en/download/

3. Chrome browser installed.

#### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
npm install 
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

#### Run Gurukula App

The `gurukula-0.0.1-SNAPSHOT.war` is uploaded within the project in **app** folder and integrated with npm scripts.
Run the following command to start the local app server -

```
npm start
```

#### Run Test Scripts

* First step is to fire up the selenium server which could be done in many ways,  **webdriver-manager** proves very handy for this.The below command should download the **chrome & gecko driver** binaries locally for you!

```
npm run webdriver-update
``` 

* Then you should start your selenium server!
```
npm run webdriver-start
```

* Now just run the test command which launches the Chrome Browser and runs the scripts.
```
npm test
```
#### Reports

Default **html** and **screenshots** would be saved in the `target` folder.

