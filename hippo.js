#!/usr/bin/node
const request = require('request');
const keyValues = {
  "api_key":
  "email":
  "password":
  "scope": "checker"
};
const project_id = 273; /* 572 not out, 273 out */
let auth = '';

function dictToURI(dict) {
  var str = [];
  for(var p in dict){
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(dict[p]));
  }
  return str.join("&");
}

const url = 'https://intranet.hbtn.io/users/auth_token.json?' + dictToURI(keyValues);

const get_auth_token = function () {
  request.post(url, { json: true }, function (error, response, body) {
    if (error) throw error;
    auth = body.auth_token;
    console.log(auth);
    get_project();
  });
};

const requestLoop = setInterval( function () {
  get_auth_token();
}, 43000000); /* 43 million ms is a little less than 12 hours */

get_auth_token();

const get_project = function () {
  const url_project = 'https://intranet.hbtn.io/projects/' + project_id + '.json?auth_token=' + auth;
  console.log(url_project);
  request(url_project, { json: true }, function (error, response, body) {
    if (error) throw error;
    console.log(keyValues.email);
    for (const task of body.tasks) {
      if (task.checker_available) {
	console.log('checker is available');
	send_email();
	return process.exit();
      }
    }
    console.log('checker is not available');
  });
};

const requestLoopProject = setInterval( function () {
  get_project();
}, 60000); /* 60000 ms is one minute */

const send_email = function () {
  const nodemailer = require('nodemailer');
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'joancruz95@gmail.com',
      pass: 'jcSANFRAN..95'
    }
  });
  const message = {
    from: 'joancruz95@gmail.com', // Sender address
    to: keyValues.email,  // List of recipients
    subject: 'The checker is out!', // Subject line
    html: '<p>The checker is out!</p>'
  };
  transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
  exports.message=message;
};
