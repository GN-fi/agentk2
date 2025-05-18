import { Server } from "socket.io";
import * as Y from "yjs";

const io = new Server(3001, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});

const doc = new Y.Doc();
io.on("connection", (socket) => {
	socket.on("sync", (data) => {
		Y.applyUpdate(doc, data);
		io.emit("update", Y.encodeStateAsUpdate(doc));
	});
});

console.log("Socket.IO server running on port 3001");
