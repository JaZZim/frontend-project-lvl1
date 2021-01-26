#!/usr/bin/env node
import brainEvenGame from '../src/games/even.js';
import sayHelloAndGetUserName from '../src/cli.js';

const playerName = sayHelloAndGetUserName()
brainEvenGame(playerName);
