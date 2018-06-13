response.writeHead(200);
response.end('success');

response.writeHead(404);
response.end('Not found');

response.writeHead(302, {Location: `/?id=${title}`}); // redirection
response.end();
