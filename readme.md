<div align="center">
  <h1>utilmax</h1>
</div>
<p>
  <img alt="Version" src="https://img.shields.io/github/v/release/marsczen/utilmax.svg" />
  [![build](https://github.com/marsczen/utilmax/actions/workflows/ci.yml/badge.svg)](https://github.com/marsczen/utilmax/actions/workflows/ci.yml)
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/marsczen/utilmax.svg?style=popout" />
</p>

> 通用js方法库

### Installation:

```bash
$ npm i --save utilmax
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