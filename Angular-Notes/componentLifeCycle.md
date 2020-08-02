# Component LifeCycle

1. ngOnChanges: Called after a bound input property changes. Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.

2. ngOnInit: Called once the component is initialized. Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.

3. ngDoCheck: Called during every change detection is ran. Detect and act upon changes that Angular can't or won't detect on its own.
  *Always is executed when any check is made in the app*

4. ngAfterContentInit: Called after content (ng-context) has been projected into view. Respond after Angular projects external content into the component's view / the view that a directive is in.

5. ngAfterContentChecked: Called every time the projected content has been checked. Respond after Angular checks the content projected into the directive/component.

6. ngAfterViewInit: Called after the component view and child has been initialized. Respond after Angular initializes the component's views and child views / the view that a directive is in.

7. ngAfterViewChecked: Called every time the view adn child has been checked. Respond after Angular checks the component's views and child views / the view that a directive is in.

8. ngOnDestroy: Called once the component is about to be destroyed. Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks.