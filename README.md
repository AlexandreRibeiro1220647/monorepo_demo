# monorepo_demo
This project was build to experience the use of Nx monorepos

The worspace was initially built as an angular project using the command:
  - Create a New Nx Workspace
    
    **npx create-nx-workspace@latest my-workspace --preset=angular-monorepo**

Afterwards it was used the following commands to create a Node.js backend:
  - Install the Node.js plugin:
    
    **npm install @nx/node --save-dev**
    
  - Generate a new Node.js application:
    
    **npx nx generate @nx/node:application api**

In order to run this workspace do:
  - Serve the Angular frontend:
    
    **npx nx serve angular-app**
  - Serve the Node.js backend:
    
    **npx nx serve api**
