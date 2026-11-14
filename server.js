
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
    const { placeId } = req.body;

    if (!placeId || !/^\d+$/.test(String(placeId))) {
        return res.status(400).json({
            error: "Invalid Roblox Place ID"
        });
    }

    const launchUrl =
        `roblox://placeId=${placeId}`;

    const webUrl =
        `https://www.roblox.com/games/${placeId}`;

    res.json({
        success: true,
        placeId,
        launchUrl,
        gameUrl: webUrl,
        message: "Game launch link generated"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
