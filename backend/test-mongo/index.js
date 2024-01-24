const express = require("express");
const http = require("http");
const cors = require("cors");
const morgan = require("morgan");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = 4500;

const app = express();
const server = http.createServer(app);
app.use([morgan("dev"), cors(), express.json()]);

const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

async function run() {
	try {
		await client.connect();
		console.log(`Database Connected Successfully! ✔`);

		const movies = client.db("test-mongodb").collection("movies");

		app.post("/movies", async (req, res) => {
			const result = await movies.insertOne(req.body);
			res.status(201).json(result);
		});

		app.get("/movies", async (req, res) => {
			const allMovies = await movies.find().toArray();
			res.status(200).json({ data: allMovies });
		});

		app.patch("/movies/:id", async (req, res) => {
            const { id } = req.params;
            const filter = { _id: new ObjectId(id) };
        
            const updatedDoc = {
                $set: {
                    title: req.body.title,
                },
            };
        
            const updatedMovie = await movies.findOneAndUpdate(filter, updatedDoc, {
                returnDocument: "after",
            });
        
            res.status(200).json(updatedMovie);
        });

        app.delete("/movies/:id", async (req, res) => {
            const { id } = req.params;
            const filter = { _id: new ObjectId(id) };
            const result = await movies.deleteOne(filter)
            res.status(200).json(result)
        });


	} finally {
		// await client.close();
	}
}

run().catch(console.dir);

app.get("/health", (_req, res) => {
	res.status(200).json({
		message: "OK",
	});
});

app.get("/", (_req, res) => {
	res.status(200).json({
		msg: "Home app route",
	});
});

server.listen(port, () => {
	console.log(`App is running on port ${port}`);
});
