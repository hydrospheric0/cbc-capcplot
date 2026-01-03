import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(process.cwd());
const DIST = path.join(ROOT, 'dist');

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function rmrf(p) {
  if (!(await exists(p))) return;
  await fs.rm(p, { recursive: true, force: true });
}

async function mkdirp(p) {
  await fs.mkdir(p, { recursive: true });
}

async function copyFile(src, dst) {
  await mkdirp(path.dirname(dst));
  await fs.copyFile(src, dst);
}

async function copyDir(srcDir, dstDir) {
  await mkdirp(dstDir);
  const entries = await fs.readdir(srcDir, { withFileTypes: true });
  for (const ent of entries) {
    const src = path.join(srcDir, ent.name);
    const dst = path.join(dstDir, ent.name);
    if (ent.isDirectory()) {
      await copyDir(src, dst);
    } else if (ent.isFile()) {
      await copyFile(src, dst);
    }
  }
}

async function main() {
  const indexHtml = path.join(ROOT, 'index.html');
  if (!(await exists(indexHtml))) throw new Error('Missing index.html in repo root');

  await rmrf(DIST);
  await mkdirp(DIST);

  await copyFile(indexHtml, path.join(DIST, 'index.html'));

  const dataDir = path.join(ROOT, 'data');
  if (await exists(dataDir)) {
    const dstDataDir = path.join(DIST, 'data');
    await mkdirp(dstDataDir);
    const entries = await fs.readdir(dataDir, { withFileTypes: true });
    for (const ent of entries) {
      if (ent.name === 'archive') continue;
      const src = path.join(dataDir, ent.name);
      const dst = path.join(dstDataDir, ent.name);
      if (ent.isDirectory()) await copyDir(src, dst);
      else if (ent.isFile()) await copyFile(src, dst);
    }
  }

  console.log('Built static site to dist/');
}

await main();
