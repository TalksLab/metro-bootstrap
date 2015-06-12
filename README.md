metro-bootstrap
===============

Simple bootstrap from Twitter with Metro style.
TalksLab production by [Guilherme Ferreira](http://twitter.com/gsferreira) (http://gsferreira.com), [Nelson Reis](http://twitter.com/nelsonreis) (http://nelsonreis.net/) and [Rui Neves](http://twitter.com/ruimlneves).




Demo
----

For a live preview of the theme, see [http://talkslab.github.com/metro-bootstrap](http://talkslab.github.com/metro-bootstrap).




Repository structure
----

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
	docs/
	└── (metro-bootstrap GitHub Pages)


We provide compiled CSS (`metro-bootstrap.css`) in the dist folder, as well as compiled and minified CSS (`metro-bootstrap.min.css`). 

Installing Dependencies
----

We manage dependencies using Bower.
Run `bower install` to download the required dependencies.

If don't have Grunt installed, execute the following steps from the command line:

1. Make sure you have node.js installed.
2. Install bower with `npm install -g bower`.

Compiling CSS
----

We compile metro-bootstrap using [Grunt](http://gruntjs.com/). 
Run `grunt build` to compile the CSS into `/dist`. 

If don't have Grunt installed, execute the following steps from the command line:

1. Make sure you have node.js installed.
2. Install `grunt-cli` globally with `npm install -g grunt-cli`.
3. Go to the `metro-bootstrap` directory, then run `npm install`. npm will look at package.json and automatically install the necessary dependencies.



License
----

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/TalksLab/metro-bootstrap/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

