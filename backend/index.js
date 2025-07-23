
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ChatOpenAI } = require('@langchain/openai');
const { TavilySearchResults } = require('@langchain/community/tools/tavily_search');
const { Calculator } = require('@langchain/community/tools/calculator');
const { createOpenAIFunctionsAgent, AgentExecutor } = require('langchain/agents');
const { pull } = require('langchain/hub');
const { AIMessage, HumanMessage } = require('@langchain/core/messages');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const model = new ChatOpenAI({});
const searchTool = new TavilySearchResults();
const calculatorTool = new Calculator();
const tools = [searchTool, calculatorTool];

let prompt;
const setupAgent = async () => {
  prompt = await pull('hwchase17/openai-functions-agent');
};

const agent = createOpenAIFunctionsAgent({
  llm: model,
  tools,
  prompt,
});

const agentExecutor = new AgentExecutor({
  agent,
  tools,
});

const chatHistory = [];

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const result = await agentExecutor.invoke({
      input: message,
      chat_history: chatHistory,
    });

    chatHistory.push(new HumanMessage(message));
    chatHistory.push(new AIMessage(result.output));

    res.json({ reply: result.output, intermediateSteps: result.intermediateSteps });
  } catch (error) {
    console.error('Error processing chat message:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

setupAgent().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
