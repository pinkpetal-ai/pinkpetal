# 🌸 PinkPetal

A powerful and flexible AI agent framework for Node.js applications that makes it easy to create, manage, and interact with AI agents.

## 🌟 Features

- 🧠 **Smart Memory System**: Maintains conversation context and relevant information
- 🔌 **Extensible Capabilities**: Add custom functionalities through a plugin-like system
- 🤖 **OpenAI Integration**: Seamless integration with GPT models
- 📦 **TypeScript Ready**: Full TypeScript support with type definitions
- 🛡️ **Type Safe**: Built with type safety in mind
- 🚀 **Easy to Use**: Simple API for quick implementation

## 📦 Installation

```bash
npm install pinkpetal
```

## 🚀 Quick Start

```typescript
import { PinkPetalAgent } from 'pinkpetal';

// Initialize with your OpenAI API key
const agent = new PinkPetalAgent('your-openai-api-key');

// Start chatting with your agent
async function chat() {
  const response = await agent.think('Tell me about artificial intelligence');
  console.log(response);
}

chat();
```

## 💡 Usage Examples

### Adding Custom Capabilities

```typescript
import { PinkPetalAgent, WebSearchCapability } from 'pinkpetal';

const agent = new PinkPetalAgent('your-api-key');

// Add web search capability
agent.addCapability('web-search', new WebSearchCapability());

// Use the capability
async function searchWeb() {
  const result = await agent.execute('web-search', {
    query: 'latest AI developments'
  });
  console.log(result);
}
```

### Using the Memory System

```typescript
const agent = new PinkPetalAgent('your-api-key');

async function conversationWithMemory() {
  // The agent will remember this information
  await agent.think('My name is Alice');
  
  // The agent can recall previous information
  const response = await agent.think('What\'s my name?');
  console.log(response); // Will remember that your name is Alice
}
```

## 📚 API Reference

### PinkPetalAgent

The main class for creating and managing AI agents.

#### Constructor

```typescript
new PinkPetalAgent(apiKey: string)
```

#### Methods

| Method | Description |
|--------|-------------|
| `think(input: string): Promise<string>` | Process input and generate a response |
| `addCapability(name: string, capability: Capability)` | Add a new capability |
| `execute(action: string, params: any): Promise<any>` | Execute a capability |

### Capability Interface

```typescript
interface Capability {
  execute(params: any): Promise<any>;
}
```

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/yourusername/pinkpetal.git

# Install dependencies
cd pinkpetal
npm install

# Build the project
npm run build

# Run tests
npm test

# Run linter
npm run lint
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built with TypeScript for better developer experience
- Powered by OpenAI's GPT models
- Inspired by the need for flexible and powerful AI agents in modern applications


## 📧 Support

If you have any questions or need help, please open an issue.