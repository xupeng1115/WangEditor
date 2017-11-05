$(function (){
    var E = window.wangEditor;
    var editor1 = new E("#editor1");
    editor1.customConfig.uploadImgShowBase64 = true;
    editor1.customConfig.menus=[
    	'fontfamily',
        'fontsize',
    	'head',
        'bold',
        'italic',
        'underline'
    ]
    editor1.create();
    var editor2 = new E("#editor2");
    editor2.customConfig.uploadImgShowBase64 = true;
    editor2.create();
    
    
    // 禁用编辑功能
	editor1.$textElem.attr('contenteditable',true);
	
	// 开启编辑功能
	editor2.$textElem.attr('contenteditable', true);
	
	//设置编辑器内容
	editor1.txt.html('<p>用JS设置的内容</p>');
	editor2.txt.html('<p>用JS设置的内容</p>');
	
	
	//创建编辑器后，追加内容
	editor1.txt.append('<p>追加的内容</p>');
	
	//清空内容
	editor2.txt.clear();
	editor2.txt.append('<p>清除后追加的内容</p>');
	
	
	
	document.getElementById("btn1").addEventListener('click',function(){
		console.log(editor2.txt.html());
	},false)
	document.getElementById("btn2").addEventListener('click',function(){
		console.log(editor2.txt.text());
	},false)
});
