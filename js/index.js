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
		if (num==0){bigbox.style.background="#F19CC5";}
		for(let i=0;i<imgbox.length;i++){
			imgbox[i].style.zIndex=5;
			btn[i].className="btn";
		}
		imgbox[num].style.zIndex=10;
		btn[num].className="btn hot";
	}
	function move1(){
		num--;
		if (num==0){bigbox.style.background="#F19CC5";}
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

	for (let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			if (i==0){bigbox.style.background="#F19CC5";}
			if (i==1){bigbox.style.background="#D02247";}
			if (i==2){bigbox.style.background="#47FFF2";}
			if (i==3){bigbox.style.background="#D4F1EF";}
			if (i==4){bigbox.style.background="#1F2120";}
			if (i==5){bigbox.style.background="#D8D8D8";}
			if (i==6){bigbox.style.background="#FB3570";}
			if (i==7){bigbox.style.background="#FFBEC8";}

			for(let j=0;j<imgbox.length;j++){
				imgbox[j].style.zIndex=5;
				btn[j].className="btn";
			}
			imgbox[i].style.zIndex=10;
			btn[i].className="btn hot";
			num=i;
		}
	}


	// 楼层跳转
	let H=innerHeight;
	let CON=document.querySelectorAll(".CON");
	let floor=document.querySelector(".floor .con");
	let cons=floor.querySelectorAll(".box");
	let TOP=floor.querySelector(".top");
	let flg=true;
	let arr=[];
	CON.forEach(function(v){
		arr.push(v.offsetTop);
	})

	window.onscroll=function(){
		let st=document.body.scrollTop||document.documentElement.scrollTop;
		arr.forEach(function(element,i){
			if (st+H>=arr[0]){
				floor.style.display="block";
			}
			else{
				floor.style.display="none";
			}
			if (st+H>element+200){
				if(flg){
					cons.forEach(function(v){
						v.classList.remove("hot6");
					})
					cons[i].classList.add("hot6");
				}
				if(!flg && i!=Now){
					cons[i].classList.remove("hot6");
				}
			}
		})
	}

	let Now=0;
	cons.forEach(function(v,i){
		v.onclick=function(){
			animate(document.body,{scrollTop:arr[i]});
			animate(document.documentElement,{scrollTop:arr[i]});
			Now=i;
			flg=false;
			v.classList.add("hot6");
		}
	})
	TOP.onclick=function(){
			animate(document.body,{scrollTop:0});
			animate(document.documentElement,{scrollTop:0});
	}


	//头部导航
	let nav1=document.querySelectorAll(".nav .con .navs1");
	console.log(nav1);
	nav1.forEach(function(v,i){
		let cons2;
		if(i!=2){
			cons2=v.querySelector(".box")
			console.log(cons2)
		}
		else{
			cons2=v.querySelector(".box3")
			console.log(cons2)
		}
		v.onmouseenter=function(){
			v.style.overflow="";
			cons2.style.display="block";
		}
		v.onmouseleave=function(){
			v.style.overflow="hidden";
			cons2.style.display="none";
		}
	})
	let nav2=document.querySelectorAll(".nav .con .nav2");
	nav2.forEach(function(v){
		let cons2=v.querySelector(".box")
		v.onmouseenter=function(){
			v.style.overflow="";
			cons2.style.display="block";

		}
		v.onmouseleave=function(){
			v.style.overflow="hidden";
			cons2.style.display="none";
		}
	})


	//评论
	let pinglun=document.querySelectorAll(".bigbox .con .rights .pinglun .box");
	let q=setInterval(move5,3000);
	let now1=0;
	let next1=0;
	function move5(){
		next1++;
		if(next1==pinglun.length){
			next1=0;
		}
		pinglun[next1].style.top=115+"px";
		animate(pinglun[now1],{top:-115});
		animate(pinglun[next1],{top:0});
		now1=next1;
	}

	//排行榜轮播图
	let cons1=document.querySelectorAll(".first .three .con .cons");
	let left1=document.querySelector(".first .three .con .fanye");
	let right1=document.querySelector(".first .three .con .fanye1");
	let btns1=document.querySelectorAll(".first .three .btn");
	let flg1=true;
	// let r=setInterval(move6,2000);
	let now2=0;
	let next2=0;
	function move6(){
		next2++;
		if(next2==cons1.length){
			next2=0;
		}
		btns1.forEach(function(e){
			e.classList.remove("hot8");
		})
		btns1[next2].classList.add("hot8");
		cons1[next2].style.left=379+"px";
		animate(cons1[now2],{left:-379});
		animate(cons1[next2],{left:0},function(){
			flg1=true;
		});
		now2=next2;
	}
	function move7(){
		next2--;
		if(next2<0){
			next2=cons1.length-1;
		}
		btns1.forEach(function(e){
			e.classList.remove("hot8");
		})
		btns1[next2].classList.add("hot8");
		cons1[next2].style.left=-379+"px";
		animate(cons1[now2],{left:379});
		animate(cons1[next2],{left:0},function(){
			flg1=true;
		});
		now2=next2;
	}
	right1.onclick=function(){
		if(!flg1){
			return;
		}
		flg1=false;
		move6();
	}
	left1.onclick=function(){
		if(!flg1){
			return;
		}
		flg1=false;
		move7();
	}

	btns1.forEach(function(e,i){
		e.onmouseenter=function(){
			
			if(i>now2){
				next2=i-1;
				move6();
			}
			if(i<now2){
				next2=i+1;
				move7();
			}
			if(i==now2){
				return;
			}

		}
	})
}