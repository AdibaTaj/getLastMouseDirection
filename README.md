# getLastMouseDirection
A Javascript Helper Library to get the last mouse direction

## Usage
```js
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <script   src="https://code.jquery.com/jquery-2.2.4.min.js"   integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="   crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/ui/jquery-ui-git.js"></script>
  <script src="https://rawgit.com/AdibaTaj/getLastMouseDirection/master/dist.js"></script>
</head>
<body>
<div id='foo'>
  Hello< World
</div>
</body>
<script>
$('#foo').on('mouseenter', function(){
  var lastDirection = getLastMouseDirection(); // returns the last mouse direction
});
</script>
</html>
```
