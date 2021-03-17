const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table>')
        res.write('<tr><th>LOCATION</th><th>HOURS REQUIRED</th><th>COST</th></tr><tr><td>Disney Land</td><td>5 Hours</td><td>$200</td></tr><tr><td>Miami</td><td>5 Hours</td><td>$300</td></tr><tr><td>Liberty Statue</td><td>3 Hours</td><td>$100</td></tr><tr><td>Las Vegas</td><td>6 Hours</td><td>$500</td></tr>')
        res.write('</table>')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})