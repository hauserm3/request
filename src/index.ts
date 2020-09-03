import https, { RequestOptions } from 'https';
import api from './configs/api.json';
import file from './configs/file.json';
import { Writer } from './writer';

const writer = new Writer(file);

const options: RequestOptions = {
  method: 'GET',
  hostname: api.hostname,
  path: `${api.path}?api_key=${api.api_key}`,
};

const req = https.request(options, (res) => {
  console.log('request to:', `https://${options.hostname}${options.path}`);
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  let body = '';

  res.on('data', (chunk) => {
    body += chunk;
  });

  res.on('end', () => {
    writer.writeToFile(body);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();

