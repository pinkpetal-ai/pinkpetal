export interface Capability {
  execute(params: any): Promise<any>;
}

export class WebSearchCapability implements Capability {
  async execute(params: { query: string }): Promise<any> {
    // Implement web search functionality
    throw new Error('Not implemented');
  }
}

export class FileSystemCapability implements Capability {
  async execute(params: { path: string; operation: 'read' | 'write'; content?: string }): Promise<any> {
    // Implement file system operations
    throw new Error('Not implemented');
  }
} 