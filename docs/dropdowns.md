## Dropdowns

Toggleable, contextual menu for displaying lists of links. Made interactive with the [Bootstrap's dropdown JavaScript plugin](http://getbootstrap.com/javascript/#dropdowns).

### Example

Wrap the dropdown's trigger and the dropdown menu within `.dropdown`, or another element that declares `position: relative;`. Then add the menu's HTML.

```html
<div class="dropdown clearfix">
  <a id="dropdownMenu1" href="#" role="button" class="sr-only dropdown-toggle" data-toggle="dropdown">
    Dropdown <b class="caret"></b>
  </a>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
    <li role="presentation" class="divider"></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
  </ul>
</div>
```

### Alignment Options

Add `.pull-right` to a `.dropdown-menu` to right-align the dropdown menu.

```html
<ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dLabel">
  ...
</ul>
```

### Headers

Add a header to label sections of actions in any dropdown menu.

```html
<div class="dropdown clearfix">
  <a id="dropdownMenu2" href="#" role="button" class="sr-only dropdown-toggle" data-toggle="dropdown">
    Dropdown <b class="caret"></b>
  </a>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2">
    <li role="presentation" class="dropdown-header">Dropdown header</li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
    <li role="presentation" class="divider"></li>
    <li role="presentation" class="dropdown-header">Dropdown header</li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
  </ul>
</div>
```

### Disabled Menu Items

Add `.disabled` to an `<li>` in the dropdown to disable the link.

```html
<div class="dropdown clearfix">
  <a id="dropdownMenu3" href="#" role="button" class="sr-only dropdown-toggle" data-toggle="dropdown">
    Dropdown <b class="caret"></b>
  </a>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu3">
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Regular link</a></li>
    <li role="presentation" class="disabled"><a role="menuitem" tabindex="-1" href="#">Disabled link</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another link</a></li>
  </ul>
</div>
```