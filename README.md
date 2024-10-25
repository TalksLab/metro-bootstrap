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

