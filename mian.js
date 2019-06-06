var text=`
    亲爱的咪咪：
    18岁生日快乐!!
    在这个真正属于你的日子里
    愿时光能缓，愿故人不散
    愿你惦念的人能和你道晚安
    愿你独闯的日子里不觉得孤单
    愿你永远幸福，岁岁平安~~
    画个蛋糕给你吃^_^`
var code = `.balloon {
    align-self: flex-start;
    width: 300px;
    max-width: 100%;
}
.balloon > img {
    display: block;
    max-width: 100%;
}

.sponge {
    position: relative;
    margin: 0 auto;
    background: #ffd878;
    border-radius: 0 0 30px 30px;
}

.filling {
    position: absolute;
    width: 100%;
    height: 0px;
    top: 40%;
    left: 0;
    border-top: 30px solid #ea5774;
    border-bottom: 28px solid #fff;
}

.icing {
    position: relative;
    z-index: 10;
    background-color: #fff;
    width: 50%;
    margin-left: 25%;
    border-radius: 30px 30px 0 0;
}
.icing:after {
    position: absolute;
    display: block;
    content: '';
    top: 50%;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(#fff 70%, transparent 50%);
    background-repeat: repeat-x;
    background-size: 14.4% 100%;
}

.candle {
    margin: 0 auto;
    overflow: visible;
}

.candle > .flame {
    margin: 0 auto;
    background-image: radial-gradient(circle, #ea5774, #ffd45c);
    border-radius: 8px 8px 8px 8px / 20px 20px 8px 8px;
	animation:
		candle-wind 5s ease-in-out infinite,
		candle-size 10s ease-in-out infinite,
		candle-flickr 5s ease-in-out infinite;
	transform-origin: 50% 100%;
}

.candle > .wick {
    margin: 0 auto;
    background: #fff;
    border-radius: 2px 2px 0 0;
}

.candle > .wax {
    background: #64c8ff;
    border: 1px solid #0074b3;
    border-radius: 10px 10px 0 0;
}

`
var audio = document.querySelector('#audio')

var nameText =`By 206~~`
var birthText = `Happy Birthday!`
function writeText(text,fn){
    let n = 0
    setTimeout(function run(){
        n+=1
        content.innerHTML = text.substring(0,n)
        if(n<text.length){
            setTimeout(run,100)
        }else{
            fn && fn.call()
        }
    },100)
}   
function writeName(nameText,fn){
    let name = document.querySelector('#name')
    let n = 0
    setTimeout(function run(){
        n+=1
        name.innerHTML = nameText.substring(0,n)
        if(n<nameText.length){
            setTimeout(run,300)
        }else{
            fn && fn.call()
        }
    },300)
}   
function writeBirth(birthText,fn){
    let n = 0
    setTimeout(function run(){
        n+=1
        birthday.innerHTML = birthText.substring(0,n)
        if(n<birthText.length){
            setTimeout(run,150)
        }else{
            fn && fn.call()
        }
    },150)
}   
function writeCode(code,fn){
    let n = 0
    setTimeout(function run(){
        n+=1
        styleTag.innerHTML = code.substring(0,n)
        if(n<code.length){
            setTimeout(run,0)
        }else{
            fn && fn.call()
        }
    },0)
}   
writeText(text,()=>{
    writeCode(code,()=>{
        writeBirth(birthText,()=>{
            writeName(nameText)
        })
    })
})