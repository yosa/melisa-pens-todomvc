/**
 * inspirate by http://evancz.github.io/elm-todomvc
 * source code in https://github.com/yosa/melisa-pens-todomvc
 */

Ext.manifest = {
	melisa: {
		server: window.location.href.indexOf('codepen') === -1 ? 
            /* necesary routes */
            window.location.protocol + '//' + window.location.host + '/' + window.location.pathname :
            'https://yosa.github.io/melisa-pens-todomvc/'
	}
};

Ext.application({
    name: 'TodoMVC',
    
    paths: {
        'TodoMVC': Ext.manifest.melisa.server + 'js/app'
    },
    
    requires: [
        'TodoMVC.view.Wrapper',
        'TodoMVC.view.WrapperModel',
        'TodoMVC.model.Todo',
        'TodoMVC.controller.Controller'
    ],
    
    defaultToken: '/',
    mainView: 'TodoMVC.view.Wrapper'
    
});
