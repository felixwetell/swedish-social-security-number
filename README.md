# Swedish Social Security Number

![](https://img.shields.io/npm/v/swedish-social-security-number?style=flat-square)
![](https://img.shields.io/bundlephobia/min/swedish-social-security-number?color=green&style=flat-square)
![](https://img.shields.io/npm/l/swedish-social-security-number?color=red&style=flat-square)

## Description
This is a NPM package to help you verify Swedish social security numbers, oherwise called SSN, with ease. Lightweight package without any useless extra functionality. 

## Installing
To get the latest version run this command in your project:
`npm i swedish-social-security-number`

## Usage
```
var swedishSocialSecurityNumber = require("swedish-social-security-number");
```
See [test.js](https://github.com/felixwetell/swedish-social-security-number/blob/main/tests/test.js) for more examples

## Example

```
import Ssn from 'swedish-social-security-number';

Ssn.verifySsn('9710286098');
//=> true
```

## Functions
**verifySsn (string)**
This method is used to check if a Swedish social security number (SSN). Only accepts SSN's aas string in short format.

**verifySex (string)**
Verifies if the SSN is for a male or a female. Only accepts SSN's aas string in short format.
