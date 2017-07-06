var Rebase = require('re-base');
var firebase = require('firebase');
var app = firebase.initializeApp({
  apiKey: "AIzaSyBTiGB3o_EzPxEIEBcDkaZVpWRgfdNQYOM",
  authDomain: "mozo-c1716.firebaseapp.com",
  databaseURL: "https://mozo-c1716.firebaseio.com",
  projectId: "mozo-c1716",
  storageBucket: "mozo-c1716.appspot.com",
  messagingSenderId: "1094461273343"
});
var base = Rebase.createClass(app.database());

export default base;
