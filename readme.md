<div align="center">
  <h1>utilmax</h1>
</div>
<p>
  <img alt="Version" src="https://img.shields.io/github/v/release/cderek/utilmax.svg" />
  
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/cderek/utilmax.svg?style=popout" />
</p>

> 通用js方法库

### Installation:

```bash
$ npm install utilmax  --D
```

### Usage

```javascript
import * as utilmax from "utilmax";
const env = utilmax.getEnvironment();
```


> 通常情况并不需要全量引入，所以仅添加需要的方法即可，如下：

```javascript
import { getEnvironment } from "utilmax";
const env = getEnvironment();
```