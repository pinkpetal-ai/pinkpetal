interface MemoryEntry {
  input: string;
  response: string;
  timestamp: number;
}

export class Memory {
  private memories: MemoryEntry[] = [];
  private maxMemories: number = 100;

  public store(input: string, response: string): void {
    this.memories.push({
      input,
      response,
      timestamp: Date.now()
    });

    if (this.memories.length > this.maxMemories) {
      this.memories.shift();
    }
  }

  public getRelevantContext(input: string): { role: string; content: string }[] {
    const relevantMemories = this.memories
      .filter(memory => this.isRelevant(memory, input))
      .slice(-5);

    return relevantMemories.flatMap(memory => [
      { role: 'user', content: memory.input },
      { role: 'assistant', content: memory.response }
    ]);
  }

  private isRelevant(memory: MemoryEntry, input: string): boolean {
    // Simple relevance check based on common words
    const inputWords = new Set(input.toLowerCase().split(' '));
    const memoryWords = new Set(memory.input.toLowerCase().split(' '));
    
    let commonWords = 0;
    for (const word of inputWords) {
      if (memoryWords.has(word)) commonWords++;
    }

    return commonWords >= 2;
  }
} 