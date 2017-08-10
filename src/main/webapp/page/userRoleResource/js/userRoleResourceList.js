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
		//url: getRootPath()+"/userController/getUserList",
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
	
	loadData()
}) 
	function loadData(){
		///$('#userRoleResourceGrid').datagrid('/ways/userController/getUserList');
		$.ajax({
            type: "post",
            url: getRootPath()+"/userController/getUserList",
            data: {},
            dataType: "json",
            success: function(data){
            	$('#userRoleResourceGrid').datagrid('loadData',data);   
             }
        });
	}
	function newUser(){
		$('#addUserDialog').dialog({
			title: 'My Dialog',
		    width: 400,
		    height: 300,
		    closed: false,
		    cache: false,
		    href: getRootPath()+'/page/userRoleResource/addUser.html',
		    modal: true
		});
	}
	function destroyUser(){
		var row = $('#dg').datagrid('getSelected');
		if (row){
			$.messager.confirm('Confirm','Are you sure you want to destroy this user?',function(r){
				if (r){
					$.post('destroy_user.php',{id:row.id},function(result){
						if (result.success){
							$('#dg').datagrid('reload');	// reload the user data
						} else {
							$.messager.show({	// show error message
								title: 'Error',
								msg: result.errorMsg
							});
						}
					},'json');
				}
			});
		}
	}

