# AI Portfolio Agent

This project is a web-based AI Chat Agent designed to showcase a modern, interactive AI application. It features a React frontend and a Node.js backend powered by LangChain, utilizing OpenAI for language models and integrating tools like web search (Tavily) and a calculator.

## Features

-   **Interactive Chat Interface:** A clean and intuitive user interface built with React and Bootstrap.
-   **LangChain Integration:** The backend leverages LangChain.js to create and manage the AI agent.
-   **OpenAI Powered:** Uses OpenAI's language models for intelligent responses.
-   **Tool Usage:** The agent is equipped with:
    -   **Web Search:** Powered by Tavily, allowing the agent to answer questions requiring up-to-date information.
    -   **Calculator:** Enables the agent to perform mathematical calculations.

## Project Structure

```
ai-portfolio-agent/
├── backend/             # Node.js (Express, LangChain) backend
│   ├── node_modules/
│   ├── .env             # Environment variables (API keys)
│   ├── .gitignore
│   ├── index.js         # Main backend application file
│   ├── package.json
│   └── package-lock.json
├── frontend/            # React (Create React App) frontend
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
├── .gitignore           # Root .gitignore for the entire project
└── README.md            # Project documentation
```

## Setup and Installation

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm (Node Package Manager)

### 1. Clone the Repository (if applicable)

```bash
git clone git@github.com:LEGBEDJE/ai-portfolio-agent.git
cd ai-portfolio-agent
```

### 2. Backend Setup

Navigate to the `backend` directory and install dependencies:

```bash
cd backend
npm install
```

#### API Keys

Create a `.env` file in the `backend` directory with your API keys:

```
OPENAI_API_KEY=your_openai_api_key_here
TAVILY_API_KEY=your_tavily_api_key_here
```

-   **OpenAI API Key:** Obtain from [OpenAI Platform](https://platform.openai.com/).
-   **Tavily API Key:** Obtain from [Tavily AI](https://tavily.com/).

### 3. Frontend Setup

Navigate to the `frontend` directory and install dependencies:

```bash
cd ../frontend
npm install
```

## Running the Application

### 1. Start the Backend Server

From the `backend` directory:

```bash
cd backend
node index.js
```

The server will start on `http://localhost:5000`.

### 2. Start the Frontend Development Server

From the `frontend` directory:

```bash
cd frontend
npm start
```

This will open the application in your browser at `http://localhost:3000`.

## Usage

Once both servers are running, you can interact with the AI agent through the web interface. Try asking questions that require:

-   **General knowledge:** "What is the capital of France?"
-   **Web search:** "What is the current weather in London?" or "Who won the last Olympic gold medal in 100m sprint?"
-   **Calculations:** "What is 123 * 456?" or "Calculate (100 + 20) / 4."
