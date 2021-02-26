//Testquery
var invocation = new XMLHttpRequest();

invocation.open('GET', 'https://mdmj-staging.uni-muenster.de/41594/download?format=odm&form-lang=en', false);
invocation.withCredentials = true;
//invocation.onreadystatechange = handler;
invocation.send();