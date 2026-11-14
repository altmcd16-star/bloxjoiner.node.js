const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        name: "Roblox Join API",
        status: "online",
        version: "1.0.0"
    });
});


app.post("/join", (req, res) => {
    const placeId = req.body.placeId || "142823291";

    if (!/^\d+$/.test(String(placeId))) {
        return res.status(400).json({
            error: "Invalid Place ID"
        });
    }

    res.json({
        success: true,
        placeId,
        launchUrl: `roblox://placeId=${placeId}`,
        gameUrl: `https://www.roblox.com/games/${placeId}`
    });
});

