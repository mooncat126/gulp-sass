# Gulp + Sass 🍑
This is a project created by Gulp and Sass. 

### Use gulp to minify files
Run following command to compile and minify scss file, <br/>
Minified files would be created as *style.min.css* and *bootstrap.min.css* in `src/stylesheets/css`

```
gulp compileAndMinify
```

Then you can use them in your template.html as follow:
```
<link rel="stylesheet" href="stylesheets/css/bootstrap.min.css" />
<link rel="stylesheet" href="stylesheets/css/style.min.css" />
```

Run following command to compile and minify js file, <br/>
Minified files would be created as *main.min.js* in `src/js/dist`
```
npm run babel
gulp minifyJs
```

Then you can use them in your template.html as follow:
```
<script src="./js/dist/main.min.js"></script>
```

If you want to test in local environment without compiling, you can change it as follow:
```
<script src="./js/dist/main.js"></script>
```

***
# Watch style changing
Run the follow command to watch style changing so that you dont need to compile files by yourself.
```
gulp
```

### Installed
- eslint
- stylelint
- htmlhint
- PHP Intelephense
- prettier

### Vscode Extensions
- eslint
- stylelint
- HTMLHint
- PHP Intelephense
- prettier

### Style Validator
- css
- scss

### Tool
- gulp
- sass(dar-sass) compile
- atch
- css minify
- js minify
- Local Server
- VS code Live server
