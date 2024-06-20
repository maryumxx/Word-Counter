#! /usr/bin/env node 
import inquirer from "inquirer";
const answer: { sentence : string } = await inquirer.prompt (
    [
        {
            name : 'sentence',
            type: 'input',
            message: 'Enter a sentence'
        }
    ]
)
 let wordCount = answer.sentence.trim().split(" ")
 let count = wordCount.length
 console.log(`Word count: ${count}`);
 