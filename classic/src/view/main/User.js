/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.User', {
    extend: 'Ext.grid.Panel',
    xtype: 'userlist',

    requires: [
        'MyApp.store.User'
    ],

    title: 'User',

    store: {
        type: 'user'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
