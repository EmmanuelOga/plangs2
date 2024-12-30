## Simple HTTPD server that serves files with .html extension by default
## Usage: python3 httpd.py
## Open browser and navigate to http://localhost:8000
## Used to test the final output of the static site.

import http.server
import socketserver


# Serve files with .html extension by default
class CustomRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/":
            self.path = "/index.html"
        elif self.path.find(".") == -1 and not self.path.endswith(".html"):
            self.path = f"{self.path}.html"
        return super().do_GET()


PORT = 8000
with socketserver.TCPServer(("", PORT), CustomRequestHandler) as httpd:
    print(f"Serving on port {PORT}")
    httpd.serve_forever()
