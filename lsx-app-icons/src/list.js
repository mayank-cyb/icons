export default function createIconList(prefix, generateResults) {
  const stringBuilder = ['export const classNames = ['];

  Object.keys(generateResults.assetsIn).forEach((fileName) => {
    stringBuilder.push(`  '${prefix}-${fileName}',`);
  })
  
  stringBuilder.push('];', '');
  
  return stringBuilder.join('\n');
};