

import fs from 'fs';
import path from 'path';

/**
 * Simple helper to safely read markdown files
 * @param filePath Path to the markdown file relative to the markdown directory
 * @returns The content of the markdown file as a string
 */
export function getMarkdownContent(filePath: string): string {
  try {
    const fullPath = path.join(process.cwd(), 'markdown', `${filePath}.md`);
    return fs.readFileSync(fullPath, 'utf8');
  } catch (error) {
    console.error(`Error reading markdown file: ${filePath}`, error);
    return '# File Not Found\n\nThe requested document could not be found.';
  }
}

/**
 * Simple helper to list markdown files in a directory
 * @param dirPath Path to the directory relative to the markdown directory
 * @returns Array of file names without the .md extension
 */
export function listMarkdownFiles(dirPath: string): string[] {
  try {
    const fullPath = path.join(process.cwd(), 'markdown', dirPath);
    const files = fs.readdirSync(fullPath);
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''));
  } catch (error) {
    console.error(`Error listing markdown files in directory: ${dirPath}`, error);
    return [];
  }
} 