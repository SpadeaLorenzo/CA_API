const express = require("express")
const router = express.Router();
const Data = require("../models/data");

//creating data set 
router.post("/register", async (req,res) =>{
    try {
        const datas = new Data({
            humidity: req.body.humidity,
            sound: req.body.sound,
            brightness: req.body.brightness,
            c02: req.body.c02,
            temperature: req.body.temperature,
            name : req.body.name,
        });

        const data = await datas.save();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json("Internal error " + err);
    }
});

//deleting datas if admin
router.delete("/:id", getDatasFromFishino , async  (req, res) =>{
    try{
        await res.d.remove();
        res.json({
            message: "Deleted datas from fishino"
        });
    }catch(err){
        return res.status(500).json({
            message: message.error
        });
    }
});


async function getDatasFromFishino(req , res , next){
    let d
    try {
        d = await Data.findById(req.param.id);
        if(Data == null){
            return res.status("404").json({message: "Cannot find fishino"})
        }
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
    res.d = d;
    next();
}

module.exports = router;