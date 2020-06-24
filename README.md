# Fibonacci stories

Find fibonacci number by sequence number from 0 to 10 000

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

What things you need to install the software and how to install them

```
git >=2.21.0, npm >= 6.11.3, node >= 12.11.1, mysql >= 5.7.16
```

### Installing

Follow the instructions:

1. Check that Git version manager is installed:

```
$ git --version # >= 2.21.0
```

You can install git following this tutorial:

https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

2. Clone the repository to your computer:

```
$ git clone git@github.com:Ibadichan/fibonacci-stories.git
$ cd fibonacci-stories
```

3. Check that npm and node js are installed:

```
$ npm -v # >= 6.11.3
$ node -v # >= 12.11.1
```

You can install npm and node js following this tutorial:

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

4. Check that mysql is installed:

```
$ mysql -V # >= 5.7.16
```

You can install and configure mysql following this tutorial:

https://www.sitepoint.com/how-to-install-mysql/

5. Install project dependencies:

```
$ npm install
```

6. Also you need to setup env variables.

- In project root find a file named ".sample-env" and copy it's content.
- Create in project root file named ".env" and paste content from ".sample-env".
- If you have changed mysql "root" user password, then you must add it to .env file.
  For example: DB_USER_PASSWORD=123

Try to start web server:

```
$ npm run start
```

Go to http://localhost:8080/ .
