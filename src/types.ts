/* eslint-disable no-unused-vars */
export type TokenType = 'UNDERSCORE' | 'STAR' | 'NEWLINE' | 'TEXT' | 'EOF'
export type NodeType = 'BOLD' | 'TEXT' | 'EMPHASIS'

export interface Token {
  value: string;
  type: TokenType;
}

export interface Node {
  type: NodeType;
  value: string;
  consumed: number;
}

export interface ParagraphNode {
  setences: Node[]
  consumed: number
}

export interface BodyNode {
  paragraphs : Node[]
  consumed: number
}

export type ScannerFunction = (plainMarkdown: string) => Token | null
export type ParserFunction = (tokens: Token[]) => Node | ParagraphNode | BodyNode | null
