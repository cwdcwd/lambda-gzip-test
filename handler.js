'use strict';

const awsServerlessExpress = require('aws-serverless-express')
const app = require('./app')

const binaryMimeTypes = [] // ['gzip', 'application/gzip']
const server = awsServerlessExpress.createServer(app, () => { console.log('server is up and listening')}, binaryMimeTypes)

exports.handler = (event, context) => {
  console.log('inbound event', event);
  awsServerlessExpress.proxy(server, event, context);
}
