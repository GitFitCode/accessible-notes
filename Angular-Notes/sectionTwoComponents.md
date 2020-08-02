# ANGULAR
 -There are two different types of Angular frameworks that were created.
  1. The first version is referred to as AngularJS and is not used much anymore.
  2. The second version is referred to as Angular2+ (version 2 and Up). Angular 2+ is a complete rewrite of AngularJS and is NOT
     the same. Angular combines static HTML and Dynamic to create a more versatile webpage.
  

#Course Outline {
  1. Getting Started
  2. Basics
  3. Components & Data binding
  4. Routing
  5. Observing
  6. Forms
  7. Pipes
  8. HTTP
  9. Authentication
  10. Optimization
  11. NgModules
  12. Deployment
  13. Animations & Testing
}


#TypeScript {
  -It is a superset of JavaScript. It offers more feature than vanilla Javascript.
  -It DOES NOT compile in the browser when running in angular. It is compiled into Javascript before it is ran in the browser.
}

*SETUP*
  1. Check to make sure you are using bootstrap or materials for angular client.
  2. Always make sure that when you download an npm package it is in the correct directory. Otherwise you will have to search your terminal for the correct file path.

#Components {
  -What is a component in angular?
    Components are key features in angular in angular.
    Each component is separate from one another!
    Each component can be replicated and reused in an Angular application.

  *HOW TO CREATE A NEW COMPONENT* {
    1. Create a new directory (folder) in the project.
      *Name the directory the name of the new component. It will make it easier to organize and mange your projects.
    
    2. Create 3 files in the directory that you created for your new component. It will contain a TypeScript file, HTML file, & a CSS file for styling.

    3. IN the TypeScript file:
      -Create *export class* with {COMPONENT NAME}
      -Create a decorator to enhance the component @ top of the file.
      -Above the @Component we want to import {Component} from '@angular/cli'
        --VS CODE EXTENSION DOES THIS FOR US!
      -Inside the @Component ({We need to pass js object to *Configure* the file})
      -Add selector: 'string' *ANY NAME
      -ADD TemplateUrl: -->Accesses HTML files
        --SET IT EQUAL TO STRING  
      
      *Angular uses modules to bundle components into packages*
      -We have to change App.module in order for Angular to recognize our custom component!
      -Add to declarations and imports at the top of App.module
      -In app.component.html add the file name of your selector you created.
        --i.e <app-server></app-server>
  }
  *Component with CLI* {
    -In local terminal window: ng g c 'name of component'
      *Make sure it is in the right directory!!!!

    -(For Nesting) Add the previous custom component's selector <app-server></app-server>
    -ALWAYS check App.module for the import of the new components
    -ALWAYS have one templateUrl in one file.
  }
}

#Databinding {
  -Databinding is the communication from typescript and your HTML code
  -For data output there are four forms of binding data:
    1. String Interpolation
    2. Property Binding
    3. Event Binding
    4. Two-Way Binding: [(ngModel)]
  
  
  *String Interpolation* {
    -In your component's ts file, head to the export section and code Javascript as if you would in vanilla JS
      --i.e 
        export component {
          serverId = 12;
          serverStatus = 'online';
          if (serverId && serverStatus === true){
            console.log('Woohoo')
          };

    -On the HTML file of the component you add your string interpolation
      --i.e
        <p>The server is is {{serverID}}</p>
        }     
  }

  *Property Binding* {
    -Inside the TS file within the constructor brackets create your code for the business logic you'll need
      *Constructor will appear automatically when created with the CLI. If you did not build it with the CLI then you can create a constructor() {} after the exports section.
    
    -When the business logic is done in the TS file, go to your HTML file and assign that value to a property within the HTML tags.
      --i.e
        <button class="btn btn-primary"
        [disabled] = "allowNewServer">
        *Brackets surrounding the disabled feature is how angular knows we are using property binding.
  }


  *Event Binding* {
    -Create a method in your TS file.
    -Make sure to declare the variable used in the exports section
    -Go to the HTML page just like you did for property binding
    -Use parenthesis to indicate usage of event binding
      --i.e 
        (eventName) = ""
        *you'll set the event = to the method you created
  }


  *Two-Way Binding* {
    -Combine syntax of both property and event binding.
      *[()]
    -Within the indicator you have to use a special directive, ngModel.
      => [(ngModel)]
      *In order to use this directive, you have to add FormsModule to AppModule. Add to the imports at top and in the imports section towards the bottom of the file.

  -Set it = to the import element in the HTML file you are using.
    --i.e 
      <input 
        type="text"
        class="form-control"
        [(ngModel)]="serverName">
  }
}

#DIRECTIVES {
  -What are they?
    --Instructions in the DOM 
    --Components are Directives with a template

  -Directives without a template
    --i.e
      <p appTurnGreen>Green Background</p>
    -Custom directive
    -Add directives w/ attribute selectors
  -After we create our custom directive, we would make sure it has a
    selector: '[appTurnGreen]'
  -It will also have the logic that will have make that directive possible
}


#ngIf {
  -In HTML you add it as an attribute
  -It changes the structure of our DOM. Adds or doesn't add an element
    *DOM: Document Object Model is an application programming interface (API) for valid HTML. It defines the logical structure of documents and the way a document is accessed and manipulated.
    -i.e 
      <p *ngIf ="...">....</p>
}


#StylingDynamically {
  *ngStyle* {
    -Use property binding
    -Set it equal to an object that calls a method of that color
      -i.e <p [ngStyle] = "{background color: getColor()}">
  }

  *ngClass* {
    -ngClass must bind with property binding
    -Set it = to object
      --i.e 
          [ngClass] = "{online: serverStatus === online}"
    -This will set the condition of the style being modified
  }

  *ngFor* {
    -ngFor is similar to a loop
    -Attach it to your component in HTML
      --i.e
          <app-server *ngFor ="let server of servers">
          *servers is a variable defined in that components TS file
    
  }
}