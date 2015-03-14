#!/bin/bash

git checkout gh-pages

git add assets/* index.html

git commit -m "Deploy to gh-pages"

git push --force origin gh-pages

git checkout master
