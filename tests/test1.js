describe('My first unit test', function(t) {

    t.ok(TodoMVC.view.Wrapper, 'Found Wrapper');
    
    var txt,
        view,
        store;
    
    t.beforeEach(function(t) {
        
        view = Ext.create('TodoMVC.view.Wrapper');            
        Ext.Viewport.add(view);
        
        txt = Ext.first('textfield');
        txt.setValue('Test');
        store = view.getViewModel().getStore('todomvc');
        store.removeAll();
        
    });

    t.it('Added item', function (t) {
        
        t.expect(txt.getValue()).toEqual('Test');
        txt.focus();
        
        t.chain({
            type: '[ENTER]'
        });
        
        t.waitForEvent(store, 'add', function() {
            t.expect(store.getCount()).toEqual(1);
        });
        
    });
    
});
