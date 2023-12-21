import { rm } from 'node:fs/promises';

await Promise.all([
  rm('./build', { recursive: true}),
  rm('./dist', { recursive: true}),
]);