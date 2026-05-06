import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(scriptDir, '../node_modules/@sonicjs-cms/core/dist')

const slugNeedle = 'let slug = data.slug || data.title;'
const titleNeedle = 'data.title || "Untitled"'

const slugReplacement = [
  'const contentTitle = data.title || data.heading || collection.display_name || collection.name || "Untitled";',
  '    let slug = data.slug || contentTitle;'
].join('\n')

const titleReplacement = 'contentTitle'

function patchFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8')

  if (!source.includes(slugNeedle) || !source.includes(titleNeedle)) {
    return false
  }

  const next = source
    .replace(slugNeedle, slugReplacement)
    .replace(titleNeedle, titleReplacement)

  if (next === source) {
    return false
  }

  fs.writeFileSync(filePath, next)
  return true
}

if (!fs.existsSync(distDir)) {
  console.warn(`[patch-sonicjs-core] Dist directory not found: ${distDir}`)
  process.exit(0)
}

const files = fs
  .readdirSync(distDir)
  .filter((file) => file.endsWith('.js') || file.endsWith('.cjs'))
  .map((file) => path.join(distDir, file))

let patchedCount = 0

for (const file of files) {
  if (patchFile(file)) {
    patchedCount += 1
    console.log(`[patch-sonicjs-core] Patched ${path.basename(file)}`)
  }
}

if (patchedCount === 0) {
  console.log('[patch-sonicjs-core] No patch needed')
}
