Handlebars.registerHelper('mailbuilder-bju-paragraph', function(data) {
	var returnValue = data;
	var returnValue = returnValue.replace(/\n/g, '<br />');
	var returnValue = returnValue.replace(/<(\/?)(script)(\s*\/?)>/gi, '&lt;$1$2$3&gt;');
	var returnValue = returnValue.replace(/\[(.+)\]\(((http|https|mailto|#).+)\)/gi, '<a href="$2" style="color: #00b5ef;">$1</a>');
	var returnValue = returnValue.replace(/\*\*\*([^\s\*].+[^\s\*])\*\*\*/, '<b><i>$1</i></b>');
	var returnValue = returnValue.replace(/\*\*([^\s\*].+[^\s\*])\*\*/, '<b>$1</b>');
	var returnValue = returnValue.replace(/\*([^\s\*].+[^\s\*])\*/, '<i>$1</i>');
	return returnValue;
});

Handlebars.registerHelper('mailbuilder-bju-heading', function(data) {
	var returnValue = data;
	var returnValue = returnValue.replace(/<(\/?)(script)(\s*\/?)>/gi, '&lt;$1$2$3&gt;');
	var returnValue = returnValue.replace(/\[(.+)\]\(((http|https|mailto|#).+)\)/gi, '<a href="$2" style="color: #00b5ef;">$1</a>');
	var returnValue = returnValue.replace(/\*\*\*([^\s\*].+[^\s\*])\*\*\*/, '<b><i>$1</i></b>');
	var returnValue = returnValue.replace(/\*\*([^\s\*].+[^\s\*])\*\*/, '<b>$1</b>');
	var returnValue = returnValue.replace(/\*([^\s\*].+[^\s\*])\*/, '<i>$1</i>');
	return returnValue;
});

Handlebars.registerHelper('mailbuilder-bju-list', function(data) {
	var returnValue = data;
	var returnValue = returnValue.replace(/^(?!\*\s)/gm, '<br />'); // line breaks that don't begin with a new list item
	var returnValue = returnValue.replace(/<(\/?)(script)(\s*\/?)>/gi, '&lt;$1$2$3&gt;');
	var returnValue = returnValue.replace(/\[(.+)\]\(((http|https|mailto|#).+)\)/gi, '<a href="$2" style="color: #00b5ef;">$1</a>');
	var returnValue = returnValue.replace(/\*\*\*([^\s\*].+[^\s\*])\*\*\*/, '<b><i>$1</i></b>');
	var returnValue = returnValue.replace(/\*\*([^\s\*].+[^\s\*])\*\*/, '<b>$1</b>');
	var returnValue = returnValue.replace(/\*([^\s\*].+[^\s\*])\*/, '<i>$1</i>');

	var returnValue = returnValue.replace(/^\*\s/gm, '<li>').replace(/$\n\*\s/gm, '</li>').replace('/$/g', '</li>'); // basic list item markdown
	return returnValue;
});