var Address = (function(){
	var Data = 
		{name:'江西', List:[           
								{name:'南昌市', 
								List:['市辖区','东湖区','西湖区','青云谱区','湾里区','青山湖区','南昌县','新建县','安义县','进贤县']},          
								{name:'景德镇市', 
								List:['市辖区','昌江区','珠山区','浮梁县','乐平市']},             
								{name:'萍乡市', 
								List:['市辖区','安源区','湘东区','莲花县','上栗县','芦溪县']},            
						
		]}

	function genSelect(object){	
		var selNode = document.createElement('select');
		selNode.setAttribute('id',idname);
		if(object.List==''||object.List.length<1)return selNode;
		for(var i=0;i<object.List.length;i++){	
			var childNode = document.createElement('option');
			if(typeof object.List[i]==='object'){
				childNode.text = object.List[i].name;
			}else{
				childNode.text = object.List[i]
			}
			
			selNode.add(childNode,null);
		}
		return selNode
	}

	var selects = document.getElementsByTagName('select');
	for(var i=0;i<selects.length;i++){
		selects[i].addEventListener('onChange',function(){
			var selectedIndex = select[i].selectedIndex;
			var selectedText = select[i].options[selectedIndex].text;
			var node = genSelect(selectText);
		})
	}

	
	var node = genSelect(Data);
	document.body.appendChild(node);

})()




