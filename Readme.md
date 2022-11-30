# SESSION - 3 (React Best Practices)

This repo is the solution to the task assigned in Session - 3

## Task
Create react app without using npx command

## Solution
Following Steps are performed

1. Created package.json file using command:
    ```
    npm init
    ```
    <br />

2. Installed Web pack dependencies
    ```
    npm i --save-dev webpack webpack-cli webpack-dev-server
    ```
    <b>Web Pack</b> helps bundle entire code into final build
    <br />

3. Install Babel Dependencies
    ```
    npm i --save-dev babel-loader @babel/preset-env @babel/core 
    @babel/plugin-transform-runtime 
    @babel/preset-react 
    @babel/eslint-parser 
    @babel/runtime
    @babel/cli
    ```
    <b>Babel</b> is a transpiler that converts latest js code into ES5 to make it compatible on all browsers
    <br />

4. Install react and react dom
    ```
    npm i react react-dom
    ```
    <br />

5. Created public and src directory
<br />

6. Created index.html with a div with id:root in public directory
<br />

7. Created App.js with a component App in src directory
<br />

8. Created index.js file in src directory, imported App and rendered it in 'root' div in index.html file
<br />

9. Created web pack configuration
<br />

10. Created .babelrc file and added presets and plugins in it
<br />

11. Added scripts in package.json to start project
<br />