var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    const {url} = req;
    if(url === '/welcome'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Demo</title></head>')
        res.write('<body> <p> Welcome to Dominos! </p></body>')
        res.write('</html>')
    }
    else if(url === '/contact'){
        res.setHeader('content-Type', 'application/json')
        res.write('{')
        res.write('phone:18602100000')
        res.write('email: guestcaredominos@jublfood.com')
        res.write('}')
    }
    // else{

    // }
  
}

httpServer.listen(8081);

module.exports = httpServer;
