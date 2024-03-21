Ext.define('MyApp.store.User', {
    extend: 'Ext.data.Store',

    alias: 'store.user',

    model: 'MyApp.model.User',

    data: { items: [
        { name: 'Jeremy', email: "jeremy@silverstream.my", phone: "555-111-1111" },
        { name: 'Jeff',     email: "jeff@silverstream.my",  phone: "555-222-2222" },
        { name: 'Chen',   email: "chen@silverstream.my",    phone: "555-333-3333" },
        { name: 'Amir',     email: "amir@silverstream.my",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
