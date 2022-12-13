import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connects from "./config/db";
import  Userrouter  from "./router/users";
const app = express();
app.use(express.json())
dotenv.config();
const PORT = process.env.PORT || 5000;


app.use("/users", Userrouter);

// app.get("/test", (req: Request, resp: Response): void => {
//   resp.json({ data: "This is a test page" });
// });

app.listen(PORT, (): void => {
  console.log(`Server Is Running On ${PORT}`);
});
connects();
