# metro-bootstrap

Simple bootstrap from Twitter with Metro style.



## Maintainers Wanted

Unfortunately, the former maintainers no longer have the time and/or resources to work on this project. This means that bugs will not be fixed and features will not be added unless someone else does so.

If you're interested in fixing up metro-bootstrap, please reply to this [GitHub issue (#65)](https://github.com/TalksLab/metro-bootstrap/issues/65).

## Demo

For a live preview of the theme, see [http://talkslab.github.com/metro-bootstrap](http://talkslab.github.com/metro-bootstrap).

## Repository structure

In the repository you will find the following directories:

    app/
    ├── fonts/
    │   └── (FontAwesome files)
    └── less/
        └── (metro-bootstrap less files)
    dist/
    ├── fonts/
    │   └── font-awesome/
    │   │   └── (FontAwesome files)
    └── css/
        ├── metro-bootstrap.css
        └── metro-bootstrap.min.css

We provide compiled CSS (`metro-bootstrap.css`) in the dist folder, as well as compiled and minified CSS (`metro-bootstrap.min.css`).

## Installation

You can install and use `metro-bootstrap` in your project using npm:

```bash
npm install @talkslab/metro-bootstrap
```

### Alternatively, you can also use either a **Git clone** or a **CDN**.

### 1. Using Git Clone

To clone the repository and include `metro-bootstrap`:

```bash
git clone https://github.com/TalksLab/metro-bootstrap.git
```

After cloning, you can directly link the CSS files located in the `dist/css/` directory in your HTML:

```html
<link rel="stylesheet" href="path/to/metro-bootstrap/dist/css/metro-bootstrap.min.css">
```

### 2. Using a CDN

You can include the `metro-bootstrap` CSS directly from a CDN for ease of use. Add the following line in your HTML `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/TalksLab/metro-bootstrap@master/dist/css/metro-bootstrap.min.css">
```

This will pull the latest compiled and minified CSS directly from the repository.

## Installing Dependencies

We manage dependencies using npm. 

1. Make sure you have Node.js installed.
2. Go to the `metro-bootstrap` directory, then run:

   ```bash
   npm install
   ```

This will install the necessary dependencies as specified in the `package.json` file.

## Compiling CSS

We compile `metro-bootstrap` using Gulp. To do so, follow these steps:

1. If you don't have Gulp installed globally, you can install it by running:

   ```bash
   npm install -g gulp-cli
   ```

2. To compile the CSS into the `dist` folder, run:

   ```bash
   gulp
   ```

This command will clean the `dist` directory, compile the LESS files, and copy the fonts.

## License

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

