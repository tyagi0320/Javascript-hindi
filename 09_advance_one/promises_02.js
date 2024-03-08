//UNDERSTANDING FETCH() WORKING

//response=fetch('something'):

//When we use fetch() two events takes place.
//1.Reservation of datascpaces for variables/memory.
// a.onFulfilled[]=={similar to resolve of promise}
// b.onRejection[]=={similar to reject of promise}
//2.Handling of browser/node APIs.
//You get a network request from here
// a.If data goes on network request and gets some respone: request goes to onFullfilled[]{or resolve}
// b.If data do not go on network request and response is stuck: request goes to onRejection[]{or reject}
