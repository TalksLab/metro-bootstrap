# Tiles

## Examples

<div>
  <div class="row">
    <div class="col-sm-6 col-md-3">
      <div class="thumbnail tile tile-medium tile-teal">
        <a href="#">
          <h1>Hello</h1>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="thumbnail tile-medium tile">
        <a href="#">
          <img src="images/twittertile.png">
          <h2>Tweet</h2>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-md-6">
      <div class="thumbnail tile tile-wide tile-orange">
        <a href="#">
          <h1 class="tile-text">I'm the 2!</h1>
        </a>
      </div>
    </div>
  </div>
</div>

## Colors

<div class="bs-example">
  <div class="row">
    <div class="col-sm-6 col-md-3">
      <div class="thumbnail tile tile-medium tile-blue">
        <a href="#">
          <h1>blue</h1>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="thumbnail tile tile-medium tile-green">
        <a href="#">
          <h1>green</h1>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="thumbnail tile tile-medium tile-red">
        <a href="#">
          <h1>red</h1>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="thumbnail tile tile-medium tile-yellow">
        <a href="#">
          <h1>yellow</h1>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="thumbnail tile tile-medium tile-pink">
        <a href="#">
          <h1>pink</h1>
        </a>
      </div>
    </div>
    <!-- Additional tiles go here following the same structure -->
  </div>
</div>

## Using Font Awesome in Tiles

You could use images in your tiles or use the conveniently included FontAwesome icons. Include the Font Awesome CSS file:

```html
<link href="images/font-awesome.css" rel="stylesheet">
```

Now include the icon of your choice (Link to [Cheatsheet](http://fontawesome.io/cheatsheet/) as a `<i></i>`. Add `class="fa-links"` to your links to have the icons appear white.

<div class="bs-example">
  <div class="row">
    <div class="col-sm-6 col-md-3">
      <div class="thumbnail tile tile-medium tile-green">
        <a href="#" class="fa-links">
          <h1>Home</h1>
          <i class="fa fa-3x fa-home"></i>
        </a>
      </div>
    </div>
  </div>
</div>