---
title: "Template Merge"
type: docs
weight: 30
---

## **HTML Template Merge Specification**
### **Summary**
This document describes the feature of HTML template population with input data. It provides an example-based description of template markup elements and rules of source data to template mapping.
### **General description**
Aspose.HTML Cloud provides a capability to use HTML document as a template to populate it with some external data. Source data can be in various formats, such as XML, JSON etc. (Current implementation supports XML and JSON).

Examples below show how source data may appear:

#### **Example 1: Simple XML Source Data Set**

```html

<?xml version="1.0" encoding="utf-8" ?>

<Data>

     <Title>Test</Title>

     <Name>John</Name>

     <Surname>Smith</Surname>

     <Address>

           <Number>200</Number>

           <Street>Austin rd.</Street>

           <City>Dallas</City>

     </Address>

</Data>

```

#### **Example 1.1: Simple JSON Source Data Set**

```html

{

    "Title": "Test",

    "Name": "John",

    "Surname": "Smith",

    "Address": {

        "Number": "200", "Street": "Austin rd.", "City": "Dallas"  

    }

}

```

HTML template should contain special descriptors that define where the source data will be inserted into HTML layout and where to take data values being inserted. In other words, template should provide source data mapping information.

Below is a simple example of HTML template that gives some intuitive explanation how the source data will populate the template fields:

#### **Example 2: Simple HTML Template**

```html

<html>

     <head>

          <title>{{Title}}</title>

          <meta charset="utf-8" />

     </head>

     <body>

          <div>

               <p>Name: {{Name}} {{Surname}}</p>

               <p>Address: {{Address.Number}}, {{Address.Street}}, {{Address.City}}</p>

          </div>

      </body>

</html>

```
### **Data context**
The data mapping is based on the *data context* notion. Data context is a data element in a source data set that is considered as a base element to define relative position of a mapped data element.

It is assumed that source data set is hierarchically organized, and each mapped element is a *leaf* element, i.e. it contains only value and no child elements. So each such element can be defined by its name that show its position relatively to the current data context. For instance, look at Example 1. If current data context is a root element, the data values will be mapped as ***Title***, ***Name***, ***Address.Number***, ***Address.Street*** and so on, as it is shown in Example 2.

When an HTML template processing starts, current data context is set up to the **top-level (root) data element**. Data context can be set to some other element, and its child elements will be mapped relatively to new data context (see below for details). 
### **Template markup**
HTML template is a regular HTML file that contains some special markers that specify the input data mapping to the HTML page markup. These markers use double curled bracket notation. During the template processing, the template markers will be replaced with respective data values following the rules described below.

Current implementation supports 2 types of template markers:

- Single field marker
- Repeatable section marker

The list of template markers can be extended in future implementations.
#### **Single field marker**
**Format**: {{simple_field_name}} or {{composed_field_name}}

**Location**: usual place is in HTML element text content; also it can be put into some attribute value.

**Purpose**: placeholder of simple data element value.

{{simple_field_name}} maps a data element that is a direct child of current data context. 

##### **Example 3: Single Field Marker**

```html

<title>{{Title}}</title>

<p>Name: {{Name}} {{Surname}}</p>

```

{{composed_field_name}} maps a data element that is an indirect child of current data context. In other words, composed name reflects a path from the data context to the mapped element.

##### **Example 4: Single Field Marker - Composed Name**

```html

<p>Address: {{Address.Number}}, {{Address.Street}}, {{Address.City}}</p>

<img src="{{Person.ImageUrl}}" />

```
#### **Repeatable section marker**
**Format**: {{#**foreach** element_name}}.

element_name can appear like simple or composed field name (see above); it means that specified data element is a direct of indirect child of current data context respectively.

**Location**: it is placed as value of special attribute **data_merge** that can be added to some HTML elements; for example:

##### **Example 5: Repeatable Section**

```html

<div data_merge="{{#foreach Person}}">

.....

</div>

```

In current implementation only following HTML elements can contain repeatable section marker: DIV, OL, UL, TABLE.

**Purpose**: it marks HTML element as repeatable, i.e. when the marked element is processed, it will be inserted into result document as many times as many data elements specified by **element_name** parameter are present in the current data context. Within a repeatable section, each #foreach-specified data element becomes a current data context, and the inner template elements of the marked as repeatable HTML element map child data elements of new data context.

Repeatable sections can be nested, i.e. HTML element marked as repeatable can contain other repeatable element, and so on.

It can be explained by examples. Let the source data set contains a list of <Person> elements, with child elements. They will be mapped as ***Persons.Person***, relatively to the root element.

##### **Example 6: Data Set with Repeated Elements**

```html

<?xml version="1.0" encoding="utf-8" ?>

<Data>

      <Title>Test</Title>

      <Persons>

            <Person>

                  <Name>John</Name>

                  <Surname>Smith</Surname>

                  <Address>

                         <Number>200</Number>

                         <Street>Austin rd.</Street>

                         <City>Dallas</City>

                   </Address>

                   <Phone1>345-345-34-55</Phone1>

                   <Phone2>345-555-09-09</Phone2>

            </Person>

            <Person>

                   <Name>Jack</Name>

                   <Surname>Fox</Surname>

                   <Address>

                         <Number>25</Number>

                         <Street>Broadway</Street>

                         <City>New York</City>

                   </Address>

                   <Phone1>081-544-12-15</Phone1>

             </Person>

             <Person>

                   <Name>Sherlock</Name>

                   <Surname>Holmes</Surname>

                   <Address>

                         <Number>65</Number>

                         <Street>Baker str.</Street>

                         <City>London</City>

                    </Address>

                    <Phone1>012-5344-334</Phone1>

            </Person>

      </Persons>

</Data>

```

##### **Example 6.1: JSON**

```html

{

"Title": "Test JSON",

"Persons" : {

   'Person':[

       {

           'Name':'John',

           'Surname':'Smith',

           'Address': {

                'Number':'200',

                'Street':'Austin rd.',

                'City':'Dallas'

           },

           'Phone1':'345-345-34-55',

           'Phone2':'345-555-09-09'

       },

       {

           'Name':'Jack',

           'Surname':'Fox',

           'Address': {

                'Number':'25',

                'Street':'Broadway',

                'City':'New York'

           },

           'Phone1':'081-544-12-15'

       },

       {

           'Name':'Sherlock',

           'Surname':'Holmes',

           'Address': {

                'Number':'65',

                'Street':'Baker str.',

                'City':'London'

           },

           'Phone1':'012-5344-334'

       }

    ]

    }

}          

```

One of possible templates that can be merged with data set above appears as below; here a repeatable section is DIV element:

##### **Example 7: Template with Repeatable Section as DIV**

```html

<html>

<head>

     <title>{{Title}}</title>

     <meta charset="utf-8" />

</head>

<body>

     <div data_merge="{{#foreach Persons.Person}}">

          <p>Name: {{Name}} {{Surname}}</p>

          <p>Address: {{Address.Number}}, {{Address.Street}}, {{Address.City}}</p>

          <br/>

     </div>

</body>

</html>

```

As you can see, ***Title*** element is mapped relatively to its current data context, i.e. root element, and will populate its field marker once.

***Persons.Person*** element also is mapped relatively to the root element, but it will populate into the DIV element that will be repeated 3 times.

***Name***, ***Surname***, ***Address.Number***, ***Address.Street***, ***Address.City*** elements are mapped relatively to their data context ***Persons.Person*** and will populate respective template placeholders in each repeated DIV.

***Phone1***, ***Phone2*** elements are not mapped to template.

A result of merging of this template with data from Example 6 will be as follows:

##### **Example 8: Result of the Template Merge**

```html

<html>

     <head>

           <title>Test</title>

           <meta charset="utf-8" />

      </head>

      <body>

            <div>

                  <p>Name: John Smith</p>

                  <p>Address: 200, Austin rd., Dallas</p>

                  <br/>

            </div>

            <div>

                  <p>Name: Jack Fox</p>

                  <p>Address: 25, Broadway, New York</p>

                  <br/>

            </div>

            <div>

                  <p>Name: Sherlock Holmes</p>

                  <p>Address: 65, Baker str., London</p>

                  <br/>

            </div>

      </body>

</html>         

```

Another example of template; here a repeatable section is TABLE element.

More correctly, processing of #foreach-marked TABLE differs from DIV: the whole TABLE element isn't repeated, only TR in the table body (regardless of whether TBODY tag is present explicitly or not - anyway it will be added by Aspose.HTML.Net engine):

##### **Example 9: Template with Repeatable Section**

```html

<html>

<head>

    <title>{{Title}}</title>

    <meta charset="utf-8" />

</head>

<body>

    <br>

    <table data_merge="{{#foreach Persons.Person}}">

        <caption>TABLE 1</caption>

        <tr>

            <th>Name</th>

            <th>Surname</th>

            <th>City</th>

            <th>Street</th>

            <th>Number</th>

            <th>Phone 1</th>

            <th>Phone 2</th>

        </tr>

        <tr>

            <td>{{Name}}</td>

            <td>{{Surname}}</td>

            <td>{{Address.City}}</td>

            <td>{{Address.Street}}</td>

            <td>{{Address.Number}}</td>

            <td>{{Phone1}}</td>

            <td>{{Phone2}}</td>

         </tr>

    </table>

    <br>

</body>

</html>        

```

Similar logic is applied for #foreach-marked OL and UL elements. In both cases, a single template LI element with inner template markers must be set; this LI element will be duplicated and populated for each repeating data element.
