# Models & Debugging

*What is a ng Model* {

  -An angular model is a typescript file that you can export to be reused in different components throughout the application.

  -ES6 classes allow you to (optionally) build out functionality around your models and also doesn't require you to be locked into a TypeScript specific feature.

  -Due to ES6 functionality, ES6 classes are used most of the time for creating models
}

*How to Create a Model?* {
  -Inside your application create a new directory with the appropriate name of the shared model.

  -Within that directory create a model.ts file. (ex: modelName.model.ts)

  -Add *export class* before model name. Make sure to list your parameters as public, so they can be used throughout the application

      -i.e {
        export class Recipe {
          public name: string;
          public description: string;
          public imagePath: string;


        constructor (name:string, desc: string, imagePath: string) {
          this.name = name;
          this.description = desc;
          this.imagePath = imagePath;
          }
        }
      }
}

Make sure to import the model into the typescript file of the component that you are trying to use!!!

*Debugging* {
  What is debugging?
    -Debugging in code is essentially trying to find the problem that is causing an error message in the console or terminal.
  
  How can we debug?
    -We can use the terminal and read the error messages, use sourceMaps in the browser, and even download Augury chrome extension.

  Reading *error messages* in the terminal
    -When a compilation error occurs there there will be an error message detailed in the terminal describing what line of code it is on.
    -It will tell you what line of code is making the error. If the error is not caused in that specific line. Check that code block for
    the error. The error will be close by to the line mentioned in the error code.

  Using SourceMaps
    -Open your browser to the page that has your application on it. (i.e localhost:4200)
    -Open your developer tools if you are using chrome and go to sources.
    -Inside sources you'll see all your bundles, but you want to go to your main.
    -From there you can search for your code responsible for the error in real time
    IT IS ONLY POSSIBLE TO USE THIS IN DEVELOPER MODE!

  Using Augury
    -Augury is a chrome extension that is downloadable in the chrome store
    -When you go to your developer tools after installation, you'll see it listed as one of your tools.
    -Simply select augury and it should open up within the window.
    -It will display all your components that are used in the application. So you can take your time and navigate through each of them and find your error message that way.
}