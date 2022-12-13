"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import { router } from "./routes/routes";
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT;
// app.use("/",router)
// app.get("/test", (req: Request, resp: Response):void => {
//   resp.json({ data: "This is a test page"});
// });
app.listen(PORT, () => {
    console.log(`Server Is Running On ${PORT}`);
});
