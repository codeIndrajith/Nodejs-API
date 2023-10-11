const http = require("http");

const todos = [
    {
        id : 1,
        name : "kasun",
    },
    {
        id : 2,
        name : "kamal",
    },
    {
        id : 3,
        name : "sadun",
    }
]

const server = http.createServer((req , res) => {
    // res.statusCode = 404
    // res.setHeader('content-type' , 'application/json')
    // res.setHeader('X-Powered-By' , 'Node.js')
    // res.writeHead(404 , {
    //     'content-type' : 'application/json',
    //     'X-powered-By' : 'Node.js'
    // })

    // console.log(req.headers.authorization)

    const {method , url } = req; 
    let body = [];

    req.on('data' , chunk => {
        body.push(chunk);
    }).on('end' , () => {
        body = Buffer.concat(body).toString();
        // console.log(body);

        let status = 404;
        const response = {
            success : false,
            data : null,
            error : null
        }

        if(method === 'GET' && url === '/todos') {
            status = 200;
            response.success = true;
            response.data = todos;
        } else if(method === 'POST' && url === '/todos') {
            const {id , name} = JSON.parse(body);

            if(!id || !name) {
                status = 400;
                response.error = "please enter details"
            }
            else {
                todos.push({id , name});
                status = 200;
                response.success = true;
                response.data = todos;
            }
            
        }

        res.writeHead(status , {
            'content-type' : 'application/json',
            'X-powered-By' : 'Node.js'
        })

        res.end(JSON.stringify(response));

    })
 

    // res.end(JSON.stringify({
    //     success : false,
    //     data : null,
    //     error : 'not found'
    // }));
    
})


const PORT = 5000;
server.listen(PORT , () => {
    console.log(`server running on port ${PORT}`);
})

