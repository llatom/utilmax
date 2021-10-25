<div align="center">
	<img src="https://raw.githubusercontent.com/cderek/utilmax/master/assets/logo.png" width="600px" alt="just logo img">
  <h1>utilmax</h1>
  <p>a library that provides useful utilities functions for TS/JS, pack with esbuild.</p>
</div>

## Features

- future-proofed - Written in TypeScript, supports Tree Shaking, ECMAScript Modules
- [Documented](https://cderek.github.io/utilmax/index.html)

### Installation:

```bash
$ npm install utilmax  --D
```

### Usage

```javascript
// 完整引入
import * as utilmax from "utilmax";
const env = utilmax.getEnvironment();
```

**推荐使用**

很多时候并不需要完整引入所有函数，所以只引入需要使用的方法即可。

```javascript
import { getEnvironment } from "utilmax";
const env = getEnvironment();
```
