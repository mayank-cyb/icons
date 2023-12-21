import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { generateFonts, FontAssetType, OtherAssetType } from 'fantasticon';
import createIconList from './list.js';

const lsxSource = './src/lsx';
const lsxDest = './build/lsx';
const lsxPrefix = 'lsx-icon';

// If recursive is set to true, mkdir won't reject if the folder already exists.
await mkdir(lsxDest, { recursive: true });
await copyFile('./src/index.js', './build/index.js');

const results = await generateFonts({
  name: 'lsx-icons',
  inputDir: lsxSource,
  outputDir: lsxDest,
  fontTypes: [
    FontAssetType.TTF,
    FontAssetType.WOFF,
    FontAssetType.WOFF2,
  ],
  assetTypes: [
    OtherAssetType.CSS,
    OtherAssetType.HTML,
  ],
  formatOptions: {},
  templates: {},
  pathOptions: {},
  codepoints: {},
  fontHeight: 360,
  round: undefined,
  descent: undefined,
  normalize: false,
  selector: null,
  tag: 'i',
  prefix: lsxPrefix,
});
await writeFile(`${lsxDest}/names.js`, createIconList(lsxPrefix, results));