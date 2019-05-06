import React from "react";
import { render } from "react-dom";
import 'bootstrap';
var ReactForms = require('react-forms')
var Schema = ReactForms.schema.Schema
var Property = ReactForms.schema.Property
var Form, List = ReactForms.Form

function Person(props) {
  props = props || {}
  return (
    <Schema name={props.name} label={props.label}>
      <Property name="first" label="First name" />
      <Property name="last" label="Last name" />
    </Schema>
  )
}

var family = (
  <Schema>
    <Person name="mother" label="Mother" />
    <Person name="father" label="Father" />
    <List name="children" label="Children">
      <Person />
    </List>
  </Schema>
)

render(
  <Form schema={family} />,
  document.getElementById('example'))
