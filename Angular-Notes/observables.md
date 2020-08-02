# Angular Observables

## Define Angular Observers

* The handler for receiving the observable notifications implements the Observer interface. It is an object that defines the callback methods to handle the three types of notifications that an observable can send

* Next- Required. The handler for each delivered value called zero or more times after execution starts

* Error- Optional. The handler for error notification. The error halts the execution is the observable instance

* Complete- Optional. The handler for an execution-complete notification. The delayed values can continue to be delivered to a next handler after execution is complete

* Subscribing: An important note here is that the Observables instance begins publishing the values only when someone subscribes to it. You can subscribe to the observables by calling the subscribe() method of the instance and passing an observer object to receiving the notifications

## Technical Term Explanation

* Observable are just that — things you wish to observe and take action on. Angular uses the Observer pattern which simply means — Observable objects are registered, and other objects observe (in Angular using the subscribe method) them and take action when the observable object is acted on in some way. They are similar to promises, but with some differences. Promises execute once and then are done. Observable continue to be observed after the event occurs. Observables can be cancelled even in runtime while promises cannot

* Observables are used within angular itself, including Angular's event system and it's http client service. To use observable, Angular uses a third party library called Reactive Extensions aka RxJS

* Observables provide support for passing messages between publishers and subscribers in your application. Observables offer significant benefits over other techniques for event handling, asynchronous programming, and handling multiple values

* Observable are declarative — that is, you define a function for publishing values, but it is not executed until a consumer subscribes to it. The subscribed consumer then receives notifications until the function completes, or until they unsubscribe

## Subscription

* As a publisher, you create an Observable instance that defines a subscriber function. This is the function that is executed when a consumer calls the subscribe method. The subscriber function defines hot to obtain or generate values or messages to be published

* Subscribe is a method of Observable class. Subscribe is used to invoke Observable to execute and then it emits the result. If we have an Observable variable that fetches data over an HTTP then actual hit to server takes place only when we subscribe to Observable using subscribe method or async pipe

* A Subscription is the link between an observable and an observer. A subscription object is returned when we invoke the subscribe() method on an Observable. The subscription object has two important methods: unsubscribe() and add(). The unsubscribe() method will remove an observer from the collection of observers in the observable, along with any children subscription objects. And, we can add child subscriptions to an existing subscription using the add() method

## What is an Observer

* An Observer receives a Notification from an Observable and is managed by a Subscription. An observer will react to the next, error, and complete notifications

* In Angular we are often the consumer, or observer, of an asynchronous event or value that emitted by an observable in the framework. Common use cases of this in Angular are HTTP requests and routing parameters

## Observable Example 1

import { Component } from '@angular/cli'
import { Observable, Observer, Subscription, fromEvent } from 'rxjs'
import { Map } from 'rxjs'

* The imports are grabbing one element at a time, not the whole library.

### Subject

  export class AppComponent {
    observable: Observable<string>;
    observer: Observer<string>;
    subscription: Subscription;

    ngOnInit() {
      this.observable = new Observable((observer: Observer<string>) => {
        this.observer = observer;
      });
    }
  }

* The above code snippet shows the initialization of an Observable that returns an Observer.

* After creating a new Observable we need to subscribe to it as well in order to use it!
