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
	backendUrl="https://www.example.com/wp-json/v1/gravityforms"
	formID="1"
	onChange={someFunction} // optional (keep state of vals)
	onSubmitSuccess={someFunction} // optional - calls after form has been submitted successfully
	onError={handlerFunction} // optional - fires on GF error (gform_validation hook)
	styledComponents={{Button, Loading, Input...}} // optional
	populatedFields={{parameterName: "Value"}}
	jumpToConfirmation={false} // optional, default is equal to true
	submitComponent={Component} // optional - pass your <Component/> (like loading, another button...) to render in front of the submit button
	getParams={{}} // optional - pass an Object with your params to send the GF request with query string included
/>
```

Please take into account you have to create your own endpoint in the backend to pass the gravity form data

### Custom component

```javascript
import ComponentName from 'ComponentName';

...

<GravityForm
  ...
  customComponents={{
    3: ComponentName,
  }}
/>
```

### File upload - Dropzone

- To use a dropzone inside your file upload field you have to add a `dropzone` class name in an Appearance tab of the field
- To change the dropzone text pass it as a prop:

```javascript
<GravityForm dropzoneText="Drag here or browse to upload" {...props} />
```

### DatePicker

If Date Input Type is `datepicker` we use a React <a target="_blank" href="https://github.com/Hacker0x01/react-datepicker">DatePicker</a> module. If you want to pass your own props to the component use `gform_pre_render` hook and pass this options using `datepickerOptions` key. Example:

```php
<?php
add_filter( 'gform_pre_render', 'adjust_date_field' );
function adjust_date_field($form){
	foreach( $form['fields'] as &$field )  {
					if ( $field->type == 'date' ) {
						$field['datepickerOptions'] = array(
          		'minDate' => date("Y/m/d"),
							'dateFormat' => 'MM/dd/yyy'
        		);
					}
	}
	return $form;

}
```
