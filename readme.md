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
	onChange={someFunction} // optional
	onSubmitSuccess={someFunction} // optional - calls after form has been submitted successfully
	styledComponents={{Button, Loading, Input...}} // optional
	populatedFields={{parameterName: "Value"}}
	jumpToConfirmation={false} // optional, default is equal to true
/>
```

Please take into account you have to create your own endpoint in the backend to pass the gravity form data

### Custom component

If you want to inject your custom component inside a Gravity form you have to create any field you want in your form and replace the type of this field within `gform_pre_render` hook

```php
<?php
add_filter( 'gform_pre_render', 'replace_field_type' );
function replace_field_type($form){
	foreach( $form['fields'] as &$field )  {
					//NOTE: replace 3 with your field id
					$field_id = 3;
					if ( $field->id != $field_id ) {
							continue;
					}
					$field->type="custom"
	}
	return $form;
}
```

Now you have to pass your custom component instead of the current field on frontend:

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
