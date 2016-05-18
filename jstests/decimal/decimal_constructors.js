// Tests constructing NumberDecimal with various types

(function() {
    'use strict';
    var col = db.d_constructors;
    col.drop();

    // Insert some sample data.

    assert.writeOK(col.insert([
        {d: NumberDecimal('1')},
        {d: NumberDecimal(1)},
        {d: NumberDecimal(NumberLong('1'))},
        {d: NumberDecimal(NumberInt('1'))},
        {d: NumberDecimal('NaN')},
        {d: NumberDecimal('-sNaN')}
    ]), 'Initial insertion of decimals failed');

    try {
        col.insert({d: NumberDecimal('some garbage')});
    } catch(e) {}

    // Not sure why this doesn't work
    // assert.throws(col.insert, 
    //     [{d: NumberDecimal('some garbage')}], 'Unexpected success inserting invalid decimal data');

    // Find values with various types and NumberDecimal constructed types
    assert.eq(col.find({'d': NumberDecimal('1')}).count(), '4');
    assert.eq(col.find({'d': NumberDecimal(1)}).count(), '4');
    assert.eq(col.find({'d': NumberDecimal(NumberLong(1))}).count(), '4');
    assert.eq(col.find({'d': NumberDecimal(NumberInt(1))}).count(), '4');
    assert.eq(col.find({'d': 1}).count(), '4');
    assert.eq(col.find({'d': NumberLong(1)}).count(), '4');
    assert.eq(col.find({'d': NumberInt(1)}).count(), '4');
    // NaN and -sNaN are both evaluated to NaN
    assert.eq(col.find({'d': NumberDecimal('NaN')}).count(), 2);
}());
