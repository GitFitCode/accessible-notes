# Creating Communication with Components

*Using the @Input Decorator* {
  
  -Inside the Typescript file of your custom component. Within the export section you create a property and set its type.
    (The type can be set to any value including a model you created.)
  
  -How do we make this accessible to the parent component of our application?
   --We use that @Input decorator to establish this connection. Make sure to add () after the decorator to initialize it.
  --Make sure to import it from angular core.

   ---i.e @Input() element: Element = [];
   <!-- we have our property element assigned to Type Element of our model. We then set it equal to an array -->
   -This allows access to elements in custom components for property binding.

   *What if we wanted to be specific about what data we wanted to pass to our parent component?*
   -You can assign an alias to your @Input() decorator.
   -Pass the name of your data that you are binding inside the parenthesis of @Input
   ---i.e @Input('elementData')
}