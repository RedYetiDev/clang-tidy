# `clang-tidy`

This project is a JavaScript wrapper for the `clang-tidy` tool, a linter and
static code analyzer for C/C++ code based on LLVM. It allows easy access to `clang-tidy`
through Node.js, automating platform-specific binary selection and execution.

## Features

- **Cross-Platform Compatibility**: Automatically selects the correct `clang-tidy` binary
based on your operating system (Linux, macOS, Windows) and architecture (x64, arm64).

- **Simple Command-Line Interface**: Use `clang-tidy` directly from your terminal with Node.js
without manually managing binaries.

- **Error Handling**: Provides clear error messages if the tool is not available for your platform.

## Installation

To use this package, first install it as a global dependency:

```bash
npm install -g clang-tidy
```

This makes the `clang-tidy` command available globally in your environment.

## Usage

Once installed, you can use `clang-tidy` as you would normally from the command line:

```bash
clang-tidy ...
```

You can pass any arguments that `clang-tidy` supports. The command will execute using the
appropriate binary for your platform.

## How It Works

The script automatically detects the platform and architecture of your machine, such as:

- `linux_x64`
- `darwin_arm64`
- `win32_x64`

Based on this information, it locates the appropriate `clang-tidy` binary from the `binaries`
directory. If a matching binary isn't found, it throws an error with instructions to file an
issue for unsupported platforms.

## Platform Support

The following platforms are currently supported:

- **Linux (x64)**
- **macOS (x64 & arm64)**
- **Windows (x64)**

If your platform is not supported, the error message will direct you to file an issue on the repository.

## Contributing

If you'd like to add support for a new platform or improve this package, feel free to submit an issue
or a pull request on the [GitHub repository](https://github.com/redyetidev/clang-tidy).

## License

This project is licensed under the MIT License. See the [`LICENSE`](./LICENSE.md) file for more information.