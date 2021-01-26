#!/usr/bin/env node
import brainEvenGame from '../src/games/even.js';
import sayHello from '../src/cli.js';

const playerName = sayHello();
brainEvenGame(playerName);
