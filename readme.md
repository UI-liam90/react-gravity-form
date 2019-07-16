# React Gravityform

[![Version](https://img.shields.io/npm/v/react-gravity-form.svg)](https://www.npmjs.com/package/react-gravity-form)

This module includes a react component for dropping Gravity Forms from your Wordpress site into your react applications.

## Installation

```
$ npm install --save react-gravity-form
```

## Usage

### The GravityForm Component

Import component:

```javascript
import GravityForm from "react-gravity-form";
```

Include the component anywhere inside your own components:

```javascript
<GravityForm
	backendURL="https://www.example.com"
	formID="1"
	styledComponents={{Button, Input...}} // optional
/>
```
