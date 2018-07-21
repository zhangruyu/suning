window.onload=function(){
	//侧导航
	let bigbox=document.getElementsByClassName("bigbox")[0];
	let con=bigbox.getElementsByClassName("con")[0];
	let left=con.getElementsByClassName("left")[0];
	let box=left.getElementsByClassName("box");
	for(let i=0;i<box.length;i++){
		let boxright=box[i].getElementsByClassName("boxright")[0];
		box[i].onmouseenter=function(){
			for(let j=0;j<box.length;j++){
				let boxright1=box[j].getElementsByClassName("boxright")[0];
				boxright1.style.display="none";
			}
			boxright.style.display="block";
		}
		box[i].onmouseleave=function(){
			boxright.style.display="none";
		}
	}
}