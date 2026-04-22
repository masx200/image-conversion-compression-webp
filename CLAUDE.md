# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Node.js CLI tool (`@masx200/image-conversion-compression-webp`) that batch-converts and compresses images to WebP format. Written in TypeScript, published as an ES module package. Requires system-level **GraphicsMagick** and **libwebp** (cwebp) installed on the host machine.

## Build & Run Commands

- **Install dependencies**: `yarn install`
- **Build**: `yarn build` (runs `tsc`, outputs to `dist/`)
- **Format**: `yarn format` (prettier on `*.json`, `*.md`, `**/*.js`, `**/*.ts`)
- **Run CLI**: `yarn start` (runs `node --experimental-modules --experimental-json-modules ./dist/cli.js`)
- **No test suite exists**

## Architecture

### Processing Pipeline

```
CLI args (cli.ts)
  → start() (index.ts)
    → recursive file discovery (findfiles.ts / 递归查找文件.ts)
    → batch processing in chunks of 500 (index.ts handleconvert)
      → per-file: resizeimage.ts
        → detect if already webp (异步限流-is-webp.ts) → rename extension if needed
        → get image dimensions (异步限流-获取图像大小.ts)
        → resize & write (resize-write.ts)
          → if image exceeds maxpixels: GraphicsMagick resize → cwebp convert
          → else: direct cwebp convert
```

### Concurrency Control

All async operations (image size detection, GM resize, webp conversion, webp detection) are wrapped with rate limiters using `@masx200/async-task-current-limiter`. Two separate limiter instances exist:

- **图片处理限流.ts**: Main processing limiter (default 8 concurrent), configurable via `--concurrent` CLI arg
- **文件读取队列.ts**: File read queue limiter (separate from processing)

Each rate-limited wrapper lives in `src/异步限流-*.ts` files, created via `wrap-async-function.ts` which calls the limiter's `asyncwrap` method.

### Key Modules

| Module | Purpose |
|--------|---------|
| `cli.ts` | CLI entry point, arg validation, help display |
| `index.ts` | Orchestrator: file discovery, batch processing, progress tracking |
| `resizeimage.ts` | Per-file logic: webp detection, dimension reading, output path construction |
| `resize-write.ts` | Actual conversion: conditional GM resize + cwebp encoding |
| `image-config.ts` | Default config (extensions, maxpixels, concurrency) |
| `IMAGECONFIG.ts` | Config type interface |
| `parse-args.ts` / `parsed-cli-options.ts` | CLI argument parsing (`--key=value` format) |
| `getBin.ts` | Locates cwebp binary |
| `execpromise.ts` | Promisified `child_process.execFile` |

### CLI Parameters

- `--input` (required): Input image directory
- `--output` (required): Output image directory
- `--maxpixels` (optional, default 8000000): Max output image pixel count; images exceeding this get resized
- `--concurrent` (optional, default 8): Max concurrent processing tasks
- `--inputextentions` (optional, comma-separated): Input file extensions to process (default: jpg,png,jpeg,bmp,gif,heic)

## Code Style Notes

- Mixed Chinese/English identifiers (e.g., `异步限流`, `图片处理限流`, `递归查找文件`). Maintain consistency with surrounding code.
- ES module syntax throughout (`import`/`export`, `type: "module"` in package.json)
- Prettier with tab width 4
- TypeScript strict mode with `noUnusedLocals`, `noImplicitReturns`
- No comments in production code (tsconfig has `removeComments: true`)
