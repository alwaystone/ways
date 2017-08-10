$(function(){
	$('#userRoleResourceGrid').datagrid({  
		iconCls:'icon-ok',  
		pageSize:10,  
		pageList:[10,15,20],
		pagePosition: 'bottom',
		nowrap:true,  
		striped:true,  
		collapsible:true,  
		toolbar:"#easyui_toolbar",  
		//url: "/ways/userController/getUserList",
		//url:'/ways/userController/getUserList', //搜索前,触发此action请求所有用户信息  
		loadMsg:'数据加载中......',  
		fitColumns:true,//允许表格自动缩放,以适应父容器  
		sortOrder:'asc',  
		remoteSort:false,  
		height:"100%",
	 	columns : [ [ 
	 		{field:'userCode',title:'编号',width:100},
			{field:'name',title:'姓名',width:100},
			{field:'berthday',title:'生日',width:100},
			{field:'phone',title:'电话',width:100},
			{field:'address',title:'地址',width:100},
			{field:'deptName',title:'所属部门',width:100},
			{field:'opt',title:'操作',width:100,
				formatter:function(value,rec){
					return '<a href="#" class="easyui-linkbutton" plain="true" icon="icon-add">查看</a>&nbsp;&nbsp;'+
					'<a href="#" class="easyui-linkbutton" plain="true" icon="icon-add">编辑</a>&nbsp;&nbsp;'+
					'<a href="#" class="easyui-linkbutton" plain="true" icon="icon-add">删除</a>';
				}
			}
		] ],  
	    pagination : true,  
	    rownumbers : true  
	}); 
	
	function loadData(){
		///$('#userRoleResourceGrid').datagrid('/ways/userController/getUserList');
		$.ajax({
            type: "post",
            url: "/ways/userController/getUserList",
            data: {},
            dataType: "json",
            success: function(data){
            	$('#userRoleResourceGrid').datagrid('loadData',data);   
             }
        });
	}
	loadData() ;
})