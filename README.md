# Podcaster

A simple project for listening to podcasts.

## How to run the project

As requested, two modes for running the application are provided: a non minified one (what we call *development mode*) and a minified one (*production mode*).

### Pre-requirements

First off, we will need to hace git installed in our computer (if you don't have it, you can get it [here](https://git-scm.com/)), and then clone this repo by running the following command in your desired terminal:

```
git clone https://github.com/Gonza116/podcaster.git
```

Then, we need to install the project dependences. To do so, we need a package manager such as [npm](https://nodejs.org/en/download) or [yarn](https://yarnpkg.com/getting-started/install). Once we have one of them installed, open a terminal in the directory where you cloned this repo and run 

```
npm install
```

or

```
yarn
```

to install the project dependencies. Now you are good to go. :)

### Running development mode

Simply open a terminal in the directory where you cloned this repo and run:

```
npm run dev
```

or

```
yarn dev
```

Your default browser should open but, if it doesn't, simply navigate to [localhost:3000](http://localhost:3000/).

### Running production mode

Simply open a terminal in the directory where you cloned this repo and run:


```
yarn prod
```

Your default browser should open but, if it doesn't, simply navigate to [localhost:5000](http://localhost:5000/). This script assumes that you have yarn installed and checks if you have serve installed. If you don't, it will install it for you, since it's needed to run a local server from which the production build of this project will be served.

If you don't have yarn installed, or you don't want to install it, you can run this production mode manually. To do so, we first need to build the project:

```
npm run build
```

And then open a local server to run it:

```
serve -l 5000 -s build
```

(Note: you can change the `-l 5000` to the port in which you want to serve the project, or delete it to use the default port).

If you don't have serve installed, you can install it this way:

```
 npm install --global serve
```
