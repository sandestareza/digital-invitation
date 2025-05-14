import { useState } from 'react';

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset state after 2s
    } catch (err) {
      console.error('Failed to copy: ', err);
      setCopied(false);
    }
  };

  return { copied, copy };
}
