import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'

const args = process.argv.slice(2)
const valueFor = (name) => {
  const index = args.indexOf(name)
  return index >= 0 ? args[index + 1] : undefined
}

const baseline = valueFor('--baseline')
const slug = valueFor('--slug')

if (!baseline) {
  console.error('Usage: node scripts/validate-content-scope.mjs --baseline <commit> --slug <slug>')
  process.exit(2)
}

const tracked = execFileSync('git', ['diff', '--name-only', '--diff-filter=ACMRTUXB', baseline], { encoding: 'utf8' })
  .split(/\r?\n/).filter(Boolean)
const untracked = execFileSync('git', ['ls-files', '--others', '--exclude-standard'], { encoding: 'utf8' })
  .split(/\r?\n/).filter(Boolean)
const changed = [...new Set([...tracked, ...untracked])]
const allowed = (file) => {
  if (!slug) return file.startsWith('content/')
  const boundaries = [
    `content/${slug}/`,
    `public/${slug}/`,
    `content/projects/${slug}.json`,
    `public/projects/${slug}/`,
  ]
  return boundaries.some((boundary) => file === boundary || file.startsWith(boundary))
}
const violations = changed.filter((file) => !allowed(file))

if (violations.length) {
  console.error('Content-task scope violation. Protected or unrelated files changed:')
  violations.forEach((file) => console.error(`- ${file}`))
  process.exit(1)
}

if (slug) {
  const contentPaths = [`content/${slug}`, `content/projects/${slug}.json`]
  if (!contentPaths.some((path) => existsSync(path) || changed.some((file) => file === path || file.startsWith(`${path}/`)))) {
    console.error(`Expected content boundary was not found for slug: ${slug}`)
    process.exit(1)
  }
}

console.log(`Content-task scope valid: ${changed.length} permitted file(s).`)
