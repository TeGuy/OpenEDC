//Testquery
var invocation = new XMLHttpRequest();

invocation.open('GET', repository.getDownloadUrl(parameter), false);
invocation.withCredentials = true;
//invocation.onreadystatechange = handler;
invocation.send();