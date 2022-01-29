# Changelog

> generated with [@semantic-release/changelog](https://github.com/semantic-release/changelog)



## [1.0.2](https://github.com/stackr23/react-stack/compare/v1.0.1...v1.0.2) (2022-01-29)


### :beetle: Bug Fixes

* **husky:** migrate to latest version ([#6](https://github.com/stackr23/react-stack/issues/6)) ([b3c5da5](https://github.com/stackr23/react-stack/commit/b3c5da595baed76f60b8f9eeb9b530fed36cc02f))


### :wrench: Configs

* add BABEL config ([d0b3964](https://github.com/stackr23/react-stack/commit/d0b3964eaf1011fc54f278fb8b2f75f306dda766))
* **ci:** add `HUSKY=0` to env vars ([d5f6452](https://github.com/stackr23/react-stack/commit/d5f6452bd5db19ea0f032a5688e0bb1ee2b5eb5f))
* **husky:** use `npx` in prepare script ([8fa53eb](https://github.com/stackr23/react-stack/commit/8fa53eb4cc528d04bcd4380c965392e57d371652))
* **npm:** add `npm run build` to test script ([2d8c33c](https://github.com/stackr23/react-stack/commit/2d8c33ce2f63726a5436c21c29a67546f5d50737))
* remove vsCode settings ([f1f752d](https://github.com/stackr23/react-stack/commit/f1f752d6816dabf7d9f897064803cb735d87b3ef))
* **TS:** `"allowJs": true` ([87d43f9](https://github.com/stackr23/react-stack/commit/87d43f90b3bda75ffff46fd29d33eb4aa315bd63))
* **TS:** fix typing resolvements ([7ba7b21](https://github.com/stackr23/react-stack/commit/7ba7b2115d2b65bfc40bfb6cff4aadb36e891193))
* **vsCode:** add debug config for chrome ([8f8cb0b](https://github.com/stackr23/react-stack/commit/8f8cb0bb4541af327c784e35831eb544662ea026))


### :package: Dependencies

* add `react` ([1f79ac0](https://github.com/stackr23/react-stack/commit/1f79ac0f737c1be13dc48bf39f3928adbf7332ef))
* add babel-plugins ([c885f67](https://github.com/stackr23/react-stack/commit/c885f6738e86ba5143ab479ee6ae0a7fb9678c25))
* upgrade `@stackr23/config-eslint` to latest ([109bc28](https://github.com/stackr23/react-stack/commit/109bc2839972929ff691e7bdc6f081c9abad2a27))
* upgrade `@stackr23/webpack` for react v17 ([236e482](https://github.com/stackr23/react-stack/commit/236e482ea0c9667095f075dfe550d1b7442a739a))


### :building_construction: Refactoring

* change `App` component to TSX ([e4ec21b](https://github.com/stackr23/react-stack/commit/e4ec21bf93002066970a9fd2382c067715452bd1))


### :memo: Documentations

* **README:** add some content ([2c4d0f2](https://github.com/stackr23/react-stack/commit/2c4d0f28e82129b56586f5eec2ae3afe246e05af))

## [1.0.1](https://github.com/stackr23/react-stack/compare/v1.0.0...v1.0.1) (2021-09-06)

### :construction_worker: Continuous Integration

- **gh-actions:** finish `semantic-release` workflow ([9c5e511](https://github.com/stackr23/react-stack/commit/9c5e511df123e5f9ad441c5bda35e2db2ac6f44b))
- **release:** install `@stackr23/conventional-changelog-config` ([5db2bbd](https://github.com/stackr23/react-stack/commit/5db2bbd064ffcc3ee2e60e1f775eacce67f9cd52))

# 1.0.0 (2021-09-06)

### :sparkles: Features

- **ci:** basic implementation of github actions (karma test)
- add webpack and basic entry files ([93bfbc5](https://github.com/stackr23/react-stack/commit/93bfbc556623d2209c5e87da28a1273eeb542833))

### :wrench: Configs

- add `semantic-release` settings ([6cc5469](https://github.com/stackr23/react-stack/commit/6cc5469afd3a9d6fa86c0357cfe35478f3b81f9a))
- **CI:** add `npm run lint` to default test job ([0dc4c89](https://github.com/stackr23/react-stack/commit/0dc4c89dfd032ffd033ef660b0ea4d0667310cf8))
- **CI:** add release job for main branch (testrun) ([#4](https://github.com/stackr23/react-stack/issues/4)) ([e85b420](https://github.com/stackr23/react-stack/commit/e85b4206085a55331978e05eda5c7f21ef2a1f56))
- **eslint:** allow JSX in `.ts?` files ([9fe26d5](https://github.com/stackr23/react-stack/commit/9fe26d5a02e66eaf3d1434fd78e9eccf45c6f6f3))
- **eslint:** use import-resolver for typescript ([fa50e76](https://github.com/stackr23/react-stack/commit/fa50e7682f132a7e3d1f9460ab3fad40c5ea3621))
- **gitignore:** ignore cache folders ([ff0d789](https://github.com/stackr23/react-stack/commit/ff0d789fe97d1cdf7734d83fdd674bb4acf1845e))
- **mrm:** `mrm --preset @stackr23/mrm init` ([dac6355](https://github.com/stackr23/react-stack/commit/dac6355a73f531bdbfeeeab5ed51e7559b770f2c))
- **npm:** add `publishConfig` + `private` flag ([07bd404](https://github.com/stackr23/react-stack/commit/07bd404097f05b6492f8ba4419d80d5044dae89e))
- **typescript:** add options for TS compiler ([defad23](https://github.com/stackr23/react-stack/commit/defad236e1d0546f6a03e5690cc3e4fa2e5dfc98))
- **vsCode:** add lint/format settings ([4066f62](https://github.com/stackr23/react-stack/commit/4066f6283d491c3de497987e38c559bfdc737709))
- **vsCode:** prevent prettier to format TS files ([e16b45c](https://github.com/stackr23/react-stack/commit/e16b45c99df9a285776d6342d39d0db4083131cc))
- add `tsconfig.json` ([41a70cf](https://github.com/stackr23/react-stack/commit/41a70cf8eef483c1eec712cf8166cd0411b5b753))
- npm init ([46248cd](https://github.com/stackr23/react-stack/commit/46248cd43a1d3c7e34875d12f4a761fed191dba3))

### :memo: Documentations

- add CHANGELOG for v1.0.0 ([c821951](https://github.com/stackr23/react-stack/commit/c821951492b45d8215116985dc57d9eef7c9d8f5))
