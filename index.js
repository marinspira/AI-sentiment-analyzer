import dotenv from 'dotenv';

dotenv.config();

// Get the sentence from command line arguments
const sentence = process.argv.slice(2).join(" ");

if (!sentence) {
    console.error("Please provide a sentence as a command line argument.");
    process.exit(1);
}

async function analyzeSentiment(text) {
    const prompt = `What is the sentiment of this sentence? "${text}". Just say: Positive, Negative, or Neutral. Any word more`;

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.OPEN_ROUTER_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "deepseek/deepseek-r1-0528:free",
            messages: [{ role: "user", content: prompt }]
        })
    });

    if (!res.ok) {
        console.error("Failed to analyze sentiment:", res.status, await res.text());
        process.exit(1);
    }

    const data = await res.json();
    const sentiment = data.choices?.[0]?.message?.content?.trim() || "Unknown";

    console.log("Sentiment:", sentiment);
}

analyzeSentiment(sentence);