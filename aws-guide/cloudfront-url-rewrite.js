// CloudFront Function (viewer request) for the website distribution.
// The static export writes /about as about.html, but S3 only matches exact keys,
// so /about and /about/ are rewritten to /about.html. Paths with a file
// extension (/_next/..., /robots.txt, /about.html) and / pass through unchanged.
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri === '/') {
    return request;
  }
  if (uri.endsWith('/')) {
    uri = uri.slice(0, -1);
  }
  var lastSegment = uri.substring(uri.lastIndexOf('/') + 1);
  if (lastSegment.indexOf('.') === -1) {
    request.uri = uri + '.html';
  }
  return request;
}
