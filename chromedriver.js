#!/usr/bin/env node

const ChildProcess = require('child_process')
const path = require('path')

const command = path.join(__dirname, 'bin', 'chromedriver')
const args = process.argv.slice(2)
const options = {
  cwd: process.cwd(),
  env: process.env,
  stdio: 'inherit'
}

const chromeDriverProcess = ChildProcess.spawn(command, args, options)

const killChromeDriver = () => {
  try {
    chromeDriverProcess.kill()
  } catch (ignored) {}
}

process.on('exit', killChromeDriver)
process.on('SIGTERM', killChromeDriver)
