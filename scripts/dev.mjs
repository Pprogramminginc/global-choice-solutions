import { spawn } from 'node:child_process'

const processes = [
  {
    name: 'server',
    color: '\x1b[36m',
    command: 'node',
    args: ['--watch', 'server/index.js'],
  },
  {
    name: 'client',
    color: '\x1b[35m',
    command: 'npx',
    args: ['vite'],
  },
]

const reset = '\x1b[0m'
const children = []

const log = (name, color, chunk) => {
  const text = chunk.toString()
  const lines = text.split('\n')

  for (const line of lines) {
    if (!line) {
      continue
    }

    process.stdout.write(`${color}[${name}]${reset} ${line}\n`)
  }
}

for (const processConfig of processes) {
  const child = spawn(processConfig.command, processConfig.args, {
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: true,
  })

  child.stdout.on('data', (chunk) =>
    log(processConfig.name, processConfig.color, chunk),
  )
  child.stderr.on('data', (chunk) =>
    log(processConfig.name, processConfig.color, chunk),
  )
  child.on('exit', (code) => {
    if (code !== null) {
      process.stdout.write(
        `${processConfig.color}[${processConfig.name}]${reset} exited with code ${code}\n`,
      )
    }
  })

  children.push(child)
}

const shutdown = (signal) => {
  for (const child of children) {
    if (!child.killed) {
      child.kill(signal)
    }
  }
}

process.on('SIGINT', () => {
  shutdown('SIGINT')
  process.exit(0)
})

process.on('SIGTERM', () => {
  shutdown('SIGTERM')
  process.exit(0)
})
