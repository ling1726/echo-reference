# How to package with JavaScript 101

## Motivation

Javascript packaging is not easy and the support materials are not easy to find compared to how to use packages.
This is a shame, because creating packages:

- Promotes good architecture
- Promotes gradual adoption when making big changes
- Enables the success of others
- Increases your visibility for your career

## Contents

This lesson (and the commit history) show step by step how to create a simple JavaScript package to introduce the
core concepts of what a package is and the core concepts of:

* Main entrypoint
* Exports
* Semantic versioning
* Tagging

### Part 1: Setting up a package

Run the `npm init` command to setup a package by creating a `package.json` file.

### Part 2: Initial requirements

Publish a package that lets users call an `echo` function to output their string value in the following format:

```
echo: <user value>
``` 

### Part 2: Increasing the number of echoes

Update the `echo` function so that user values are echoed 5 times.

### Part 3: User configuration

Update the `echo` function so that the following are configurable

* The number echoes
* The default `echo:` prefix

## Homework

Create a package that will make it easier for users to use the [animchan](https://animechan.vercel.app/) API.
This package should be able to get:

* All anime names starting with a letter (e.g. all anime names starting with 'b')
* All anime characters for an anime (e.g. All characters in 'One punch man')

