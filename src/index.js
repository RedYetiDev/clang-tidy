#!/usr/bin/env node
const { platform, arch } = require('os');
const { existsSync } = require('fs');
const { resolve } = require('path');
const { spawn } = require('child_process');

const PLATFORM = platform();
const ARCH = arch();
const BINARY_NAME = 'clang-tidy';

function getBinaryPath() {
  const binaryPaths = [
    `${PLATFORM}_${ARCH}/${BINARY_NAME}`,
    PLATFORM === 'win32' ? `win32/${BINARY_NAME}.exe` : null,
    (PLATFORM === 'darwin' && ARCH === 'arm64') ? `darwin_x64/${BINARY_NAME}` : null
  ].filter(Boolean).map(binary => resolve(__dirname, '..', 'binaries', binary));

  for (const binaryPath of binaryPaths) if (existsSync(binaryPath)) return binaryPath;

  throw new Error(
    `No executable found for ${PLATFORM}_${ARCH}.\n` +
    `If you'd like to see support for this platform, file an issue at https://github.com/redyetidev/clang-tidy`
  );
}

try {
  spawn(getBinaryPath(), process.argv.slice(2), { stdio: 'inherit' }).on('close', process.exit);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}