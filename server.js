// The address of the server connected to the network is:
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383

const express = require ('express')
const app = express()
const PORT = 8383


// Endpoint -> HTTP VERBS (method) && Routes(or Paths)
// The method informs the nature of request and the route is a further subdirectory(basically we direct the request to the body of code to respond appropritately, and these locations or routes are called endpoints)

let data = {
    name: ["james"]
}

// Middleware
app.use(express.json()) // This expects json data as an input


// Type 1 : Website endpoints (these andpoints are for sending back html and they typically come when a user enters a url in a boweser)
app.get('/', (req, res)=>{
    // this is endpoint number 1: Homapage
    console.log("I hit an endpoint", req.method)
    res.send(`
        <body>
            <p> ${JSON.stringify(data)}</p>
            <a href= "/dashboard"> Dashboard </a>
        </body>
    `)
})

app.get('/dashboard', (req, res)=>{
    // this is the endpoint number 2: Dashboard
    console.log(`ohh.... Now I hit the dashboard endpoint`, req.method);
    res.send(`
        <h1> dashboard </h1>
        <a href= "/"> Homepage </a>
        `)
})

// Type 2 : API Endpoints (non visual: where the magic happens)

// Crud -> METHOD: Create-> POST, Read -> GET, Update-> PUT, Delete-> DELETE
app.get('/api/data', (req, res)=>{
    console.log('This one is for data endpoint');
    res.send(data)
})

app.post('/api/data', (req, res)=> {
    // someone wants to create a user (for example when they click a sign up button)
    // the user clicks the sign up button after enterning their credentials, and their browser is wired up to send out a network request to the server to handle that action
    const newEntry = req.body

})



app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))