// bridge.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const axios = require('axios'); // You will need to install this later

const app = express();
app.use(express.json());

// 1. Endpoint: Get current file content from Antigravity project
app.get('/get-file/:filename', (req, res) => {
    const filename = req.params.filename;
    try {
        // Reads the file relative to where this script is running
        const content = fs.readFileSync(path.join(__dirname, filename), 'utf8');
        res.json({ success: true, content });
    } catch (e) {
        console.error("Error reading file:", e);
        res.status(404).json({ error: "File not found" });
    }
});

// 2. Endpoint: Send code to LM Studio and save result back to file
app.post('/edit-file/:filename', async (req, res) => {
    const filename = req.params.filename;
    const { prompt } = req.body; // The user's request (e.g., "Add a comment")

    try {
        // A. Get the current code
        const getRes = await axios.get(`http://localhost:1234/get-file/${filename}`);
        
        if (!getRes.data.success) throw new Error("File not found");

        const currentCode = getRes.data.content;

        // B. Ask LM Studio (Headless Server) to edit it
        // Note: The URL depends on how you configured the headless server in LM Studio settings.
        // Usually, if "Enable Local LLM Service" is on, it listens on port 1234.
        
        const response = await axios.post('http://localhost:1234/v1/chat/completions', {
            model: "your-model-name", // CHANGE THIS to the name of your loaded model in LM Studio
            messages: [
                { 
                    role: "system", 
                    content: "You are an expert C++ developer. The user wants you to edit a file. Return ONLY the new code inside a markdown block like ```cpp ... ```. Do not add explanations." 
                },
                { 
                    role: "user", 
                    content: `Current Code:\n${currentCode}\n\nUser Request: ${prompt}` 
                }
            ]
        });

        const aiResponse = response.data.choices[0].message.content;

        // C. Save the new code back to the file
        fs.writeFileSync(path.join(__dirname, filename), aiResponse);

        res.json({ success: true, message: "File updated successfully" });

    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to edit file" });
    }
});

const port = 8082; // Run on a different port than Antigravity's 8080
app.listen(port, () => {
    console.log(`🚀 Bridge running at http://localhost:${port}`);
});
