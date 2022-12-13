import express, { Request, Response } from "express";

import Usercontroller from "../controllers/users";
const router = express.Router();

router.post("/usercreate", Usercontroller.createUser);

router.get("/:id", Usercontroller.readAuthor);

router.get("/readalluser", Usercontroller.readAllAuthor);

router.put("/:id", Usercontroller.updateUser);

router.delete("/:id",Usercontroller.deleteUser);

//  router.post("/users", homeDetail);

// router.get("/getdata", (req: Request, resp: Response) => {
//   resp.json({ data: "getdata page" });
// });

export default router;
