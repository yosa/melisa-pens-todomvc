describe('Test Completed filter', function(t) {
    
    var view,
        store,
        button;
    
    t.beforeEach(function(t) {
        
        view = Ext.create('TodoMVC.view.Wrapper');            
        Ext.Viewport.add(view);
        store = view.getViewModel().getStore('todomvc');
        store.removeAll();
        button = view.down('button[text=Completed]');
        
    });

    t.it('show list completed', function(t) {
        
        t.chain(
            function(next) {
                t.click(view.down('button[text=Completed]'), next);
            },
            function(next) {
                t.click(view.down('textfield'), next);
            },
            {
                type: 'Text[ENTER]'
            },
            function(next) {
                
                t.expect(store.getCount()).toEqual(0);
                next();
                
            },
            function(next) {
                
                t.expect(view.getController().lookup('lblTotal').getData()).toEqual({
                    total: 1
                });
                next();
                
            }
        );

    });
    
});
