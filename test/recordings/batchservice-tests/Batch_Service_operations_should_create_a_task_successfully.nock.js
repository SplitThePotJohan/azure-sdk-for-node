// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2017-09-01.6.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 02 Oct 2017 21:46:02 GMT',
  etag: '0x8D509DEFA319420',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '60b13163-d6ea-49f1-8c40-23d4f1bb32bb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask',
  date: 'Mon, 02 Oct 2017 21:46:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2017-09-01.6.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 02 Oct 2017 21:46:02 GMT',
  etag: '0x8D509DEFA319420',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '60b13163-d6ea-49f1-8c40-23d4f1bb32bb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask',
  date: 'Mon, 02 Oct 2017 21:46:02 GMT',
  connection: 'close' });
 return result; }]];