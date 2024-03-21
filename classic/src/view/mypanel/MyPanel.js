Ext.define('MyApp.view.mypanel.MyPanel', {
	extend: 'Ext.panel.Panel',
    xtype: 'mypanel',
	
    title: 'My Panel',
    width: '100%',
    html: '<p>Panel is a container that has specific functionality and structural components that make it the perfect building block for application-oriented user interfaces.</p><p>Panels are, by virtue of their inheritance from Ext.container.Container, capable of being configured with a layout, and containing child Components.</p><p>When either specifying child cfg-items of a Panel, or dynamically adding Components to a Panel, remember to consider how you wish the Panel to arrange those child elements, and whether those child elements need to be sized using one of Ext\'s built-in layout schemes. By default, Panels use the Ext.layout.container.Auto scheme. This simply renders child components, appending them one after the other inside the Container, and does not apply any sizing at all.</p>',
});

