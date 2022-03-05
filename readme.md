<div align="center">
  <h1>utilmax</h1>
</div>

  [![ci](https://github.com/marsczen/utilmax/actions/workflows/ci.yml/badge.svg)](https://github.com/marsczen/utilmax/actions/workflows/ci.yml)
  [![codecov](https://codecov.io/gh/marsczen/utilmax/branch/master/graph/badge.svg?token=KSI3SMB745)](https://codecov.io/gh/marsczen/utilmax)
  [![npm](https://img.shields.io/github/v/release/marsczen/utilmax.svg)](https://www.npmjs.com/package/utilmax)
  [![commit](https://img.shields.io/github/last-commit/marsczen/utilmax.svg?style=popout)](https://img.shields.io/github/last-commit/marsczen/utilmax.svg?style=popout)


> 🐝 utilmax is a tiny utils library for JavaScript

### Installation:

```bash
$ npm i --save utilmax
```

### Usage

```javascript
import * as utilmax from "utilmax";
const env = utilmax.getEnvironment();
```


> In general, you don't need to introduce all of them, so just add the methods you need, e.g.

```javascript
import { getEnvironment } from "utilmax";
const env = getEnvironment();
```
