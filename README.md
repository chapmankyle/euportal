<p align="center"><img src="https://user-images.githubusercontent.com/43512442/64060991-89634380-cbd4-11e9-9178-d418ba41a13b.png" width="630" height="200" alt="Epi-Use Logo"></img></p>
<h1 align="center">Epi-Use Portal</h1>

Epi-Use website template that allows businesses to create their own shopping website.

## Getting Started
You need to have [Node.js](https://nodejs.org/) installed in order to compile from the source code.

### Installation :page_facing_up:
To check if you have **Node.js** installed, run the following command in your preffered terminal:
```node
node -v
```
The expected output should be `v11.10.1` or more recent.

### Execution :computer:
Clone this repository and navigate to the `euportal` directory:
```bash
# clone repo
git clone https://github.com/chapmankyle/euportal.git

# navigate to euportal directory
cd euportal/
```
Now just run the following commands in the terminal:
```bash
# build and install dependencies
./build.sh

# starts the website
./run.sh
```
If any problems occur, such as `Permission denied`, type the following in the terminal:
```bash
# change access permissions
chmod 700 ./build.sh
chmod 700 ./run.sh
```
