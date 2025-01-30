import { OpenAI } from 'openai';
import { Memory } from './memory';
import { Capability } from './capability';

export class PinkPetalAgent {
  private model: OpenAI;
  private memory: Memory;
  private capabilities: Map<string, Capability>;

  constructor(apiKey: string) {
    this.model = new OpenAI({ apiKey });
    this.memory = new Memory();
    this.capabilities = new Map();
  }

  public async think(input: string): Promise<string> {
    const context = this.memory.getRelevantContext(input);
    
    const response = await this.model.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: 'You are a helpful AI assistant.' },
        ...context,
        { role: 'user', content: input }
      ]
    });

    const reply = response.choices[0].message.content || '';
    this.memory.store(input, reply);
    return reply;
  }

  public addCapability(name: string, capability: Capability) {
    this.capabilities.set(name, capability);
  }

  public async execute(action: string, params: any): Promise<any> {
    const capability = this.capabilities.get(action);
    if (!capability) {
      throw new Error(`Capability ${action} not found`);
    }
    return capability.execute(params);
  }
} 