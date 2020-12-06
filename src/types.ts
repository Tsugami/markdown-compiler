/* eslint-disable no-unused-vars */
export type TokenType = 'UNDERSCORE' | 'STAR' | 'NEWLINE' | 'TEXT' | 'EOF'
export type NodeType = 'BOLD' | 'TEXT' | 'EMPHASIS'
export type Nodes = Node | ParagraphNode | BodyNode

export interface Token {
  value: string;
  type: TokenType;
}

export interface Node {
  type: NodeType;
  value: string;
  consumed: number;
}

export interface BodyNode {
  paragraphs : Nodes[]
  consumed: number
}

export interface ParagraphNode {
  setences: Nodes[]
  consumed: number
}

export type ScannerFunction = (plainMarkdown: string) => Token | null
export type ParserFunction = (tokens: Token[]) => Nodes | null
