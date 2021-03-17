const http =require("http")


const hostname = process.env.hostname || '127.0.0.1'
const port = process.env.port || 3001




let Subjects = ["Java","WebApps","ADB","Project Management","DV","GDP"]

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Context-Type','text/plain')
    res.write(Subjects[Math.floor(Math.random()*Subjects.length)])
    res.end()
})
server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
  })