// routes/tiktok.js
const express = require("express");
const axios = require("axios");
const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

// Step 4.1: Redirect user to TikTok for authorization
router.get("/auth", (req, res) => {
  const authUrl = `https://open.tiktokapis.com/v2/auth/authorize/?client_key=${CLIENT_ID}&response_type=code&scope=user.info.basic,video.list&redirect_uri=${REDIRECT_URI}`;
  res.redirect(authUrl);
});

// Step 4.2: Handle the callback and exchange authorization code for access token
router.get("/callback", async (req, res) => {
  const { code } = req.query;
  try {
    const response = await axios.post(
      "https://open.tiktokapis.com/v2/oauth/token/",
      null,
      {
        params: {
          client_key: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code: code,
          grant_type: "authorization_code",
          redirect_uri: REDIRECT_URI,
        },
      }
    );

    const { access_token, open_id } = response.data.data;
    res.json({ access_token, open_id });
  } catch (error) {
    res.status(500).json({ error: error.response.data });
  }
});

// Step 4.3: Fetch user profile information
router.get("/profile", async (req, res) => {
  const { access_token } = req.query;
  try {
    const response = await axios.get(
      "https://open.tiktokapis.com/v2/user/info/",
      {
        params: { fields: "open_id,union_id,avatar_url,display_name" },
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response.data });
  }
});

// Step 4.4: Fetch user's recent videos
router.post("/videos", async (req, res) => {
  const { access_token } = req.body;
  try {
    const response = await axios.post(
      "https://open.tiktokapis.com/v2/video/list/",
      {
        params: {
          fields:
            "id,title,video_description,duration,cover_image_url,embed_link",
        },
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        data: {
          max_count: 20,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response.data });
  }
});

module.exports = router;
