const functions = require("firebase-functions");
// const { expressServer } = require('./src/server');
const { expressServer } = require("./__sapper__/build/server/server");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.ssr = functions.https.onRequest(expressServer);
