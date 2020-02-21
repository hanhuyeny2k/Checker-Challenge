#!/usr/bin/node
const request = require('request');

function dictToURI(dict) {
  var str = [];
  for(var p in dict){
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(dict[p]));
  }
  return str.join("&");
}

const keyValues = {
    'email': '803@holbertonschool.com',
    'password': 'Guilmeister21',
    'api_key': '86da6549e2fa51059a356886f4001804',
    'scope': 'checker'
};

const url = 'https://intranet.hbtn.io/users/auth_token.json?' + dictToURI(keyValues);


console.log(url);
request.post(url, { json: true }, function (error, response, body) {
  if (error) throw error;
  console.log(body);
});

/*
const requestLoop = setInterval(function(){

}, 43000000); /* 43m ms is a little less than 12 hours
*/


/*
curl -XPOST https://intranet.hbtn.io/users/auth_token.json -H "Content-Type: application/json" -d '{"api_key": "1234567890", "email": "guillaume@holbertonschool.com", "password": "HolbertonForever", "scope": "checker"}'
*/
