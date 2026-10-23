const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DIR = __dirname;

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.pdf': 'application/pdf',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);

  if (urlPath === '/') urlPath = '/index.html';

  // Prevent directory traversal
  const filePath = path.join(DIR, urlPath);
  if (!filePath.startsWith(DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log('404: ' + urlPath);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found: ' + urlPath);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': mime,
      'Content-Length': data.length,
      'Cache-Control': 'no-cache',
    });
    res.end(data);
    console.log('200: ' + urlPath + ' (' + data.length + ' bytes)');
  });
});

server.listen(PORT, () => {
  console.log('========================================');
  console.log('  Kidanemariam Portfolio Server Running');
  console.log('  Open: http://localhost:' + PORT);
  console.log('========================================');
});
