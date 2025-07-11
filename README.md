# AI Sentiment Analyzer

Analyze the sentiment of sentences using AI through the OpenRouter API. This lightweight Node.js tool analyze the sentiment of any sentence you provide as **Positive**, **Negative**, or **Neutral** using the LLM DeepSeek.

---

## Features

- Takes a sentence as a command line argument
- Sends the sentence to OpenRouter’s `deepseek-r1-0528:free` model for sentiment analysis
- Returns the sentiment as Positive, Negative, or Neutral

---

## Requirements
- Node.js v18 or higher (for native fetch support)
- An OpenRouter API key

---

## Setup

### 1. Clone the Repo

```bash
git clone https://github.com/marinspira/AI-sentiment-analyzer.git
cd ai-sentiment-analyzer
```

### 2. Install Dependencies
`npm install`

### 3. Create a .env File
Get your API key from [https://openrouter.ai/keys] and create a .env file in the root directory:

`OPEN_ROUTER_KEY=your_openrouter_api_key`

### 4. Run the index.js file with your sentence as an argument:
```bash
node index.js "Your sentence here"
```

## Sample Output
Sentiment: Positive

## Notes
- Make sure your sentence is enclosed in quotes if it contains spaces.
- If the API request fails, an error message will be printed.