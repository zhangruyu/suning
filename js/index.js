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

	// 轮播图
	let imgbox=con.getElementsByClassName("imgbox");
	let end=con.getElementsByClassName("fanye1")[0];
	let pre=con.getElementsByClassName("fanye")[0];
	let btn=con.getElementsByClassName("btn");
	let num=0;

	let t=setInterval(move,2000);
	function move(){
		num++;
		if (num==1){bigbox.style.background="#D02247";}
		if (num==2){bigbox.style.background="#47FFF2";}
		if (num==3){bigbox.style.background="#D4F1EF";}
		if (num==4){bigbox.style.background="#1F2120";}
		if (num==5){bigbox.style.background="#D8D8D8";}
		if (num==6){bigbox.style.background="#FB3570";}
		if (num==7){bigbox.style.background="#FFBEC8";}
		if(num==imgbox.length){
			num=0;
		}
		for(let i=0;i<imgbox.length;i++){
			imgbox[i].style.zIndex=5;
			btn[i].className="btn";
		}
		imgbox[num].style.zIndex=10;
		btn[num].className="btn hot";
	}
	function move1(){
		num--;
		if (num==1){bigbox.style.background="#D02247";}
		if (num==2){bigbox.style.background="#47FFF2";}
		if (num==3){bigbox.style.background="#D4F1EF";}
		if (num==4){bigbox.style.background="#1F2120";}
		if (num==5){bigbox.style.background="#D8D8D8";}
		if (num==6){bigbox.style.background="#FB3570";}
		if (num==7){bigbox.style.background="#FFBEC8";}
		if(num<0){
			num=imgbox.length-1;
		}
		for(let i=0;i<imgbox.length;i++){
			imgbox[i].style.zIndex=5;
			btn[i].className="btn";
		}
		imgbox[num].style.zIndex=10;
		btn[num].className="btn hot";
	}
	bigbox.onmouseenter=function(){
		clearInterval(t);
	}
	bigbox.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	end.onclick=function(){
		move();
	}
	pre.onclick=function(){
		move1();
	}
}