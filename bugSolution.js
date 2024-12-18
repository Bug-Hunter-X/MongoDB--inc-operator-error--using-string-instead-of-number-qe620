```javascript
// Correct use of $inc operator in MongoDB update
db.collection('myCollection').updateOne({fieldName: 'value'}, {$inc: {counter: 1}});
```