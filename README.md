placecage
===========

Simple CLI node utility that downloads files from [placecage.com](http://placecage.com).

Installation
------------

Installing is quite simple

```
npm install -g placecage
```

If you want to reuse the file fetching logic, you can also install placecage as a dependency of your own module

```
npm install --save placecage
```

Usage
-----

Placekitten is pretty easy to use.

```
placecage [-d path/to/download/folder] width[/height] [...]
```

Here are some concrete usage examples

```bash
placecage 200/100 # Download a 200x100 image
placecage 100/300 200 # Download a 100x300 image and a 200x200 image
placecage -d cage 800/600 # Download a 800x600 image into the cage folder
```

In order for the -d (a.k.a. --directory) flag to work, the folder must already exist.
Otherwise placecage will just return an error.
