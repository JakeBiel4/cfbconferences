"use strict";

const java = require('java');
java.classpath.push('com/DataField.class');
java.classpath.push('com/FieldData.class');
java.classpath.push('com/TableHeader.class');
java.classpath.push('com/DataObject.class');
java.classpath.push('com/DataTable.class');
java.classpath.push('com/Table.class');
const DataField = java.import('com.DataField');
const FieldData = java.import('com.FieldData');
const TableHeader = java.import('com.TableHeader');
const DataObject = java.import('com.DataObject');
const DataTable = java.import('com.DataTable');
const Table = java.import('com.Table');

const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());

app.get('/api/conf', (req, res) => {
    let conf = req.body.conf;
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});