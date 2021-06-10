const popbtn = document.querySelector("#btn");
const pInput = document.querySelector("#post-txt");
const postbtn = document.querySelector("#post");
const popup_wrapper = document.querySelector(".pop-div");
const close = document.querySelector(".close");
const closedivp = document.querySelector(".pop-clos");
const allPost = document.querySelector(".post-show");
const adddetails = document.querySelector(".add");
const emoji = document.querySelector(".emoji");


const imogi = () => {
    pInput.innerHTML += "😄";

}
var name = prompt("Type your name",'Kamrul Hasan Shahin');
if(name == "null" || name == "") {
    name = "Kamrul Hasan Shahin"
}
// console.log(prompt.value);
popbtn.addEventListener("click", function() {
    
    popup_wrapper.classList.add("show");
    adddetails.innerHTML = `<p class="name">${name}</p>`
})
close.addEventListener("click", function() {
    popup_wrapper.classList.remove("show");
    pInput.value = "";
    postbtn.classList.remove("p-post");
})

pInput.addEventListener("keyup", function(e){
    e.preventDefault();
    if(!pInput.value ){
        postbtn.classList.remove("p-post");
    }else{

        postbtn.classList.add("p-post");
    }
    
})

closedivp.addEventListener("click", function(){
    popup_wrapper.classList.remove("show");
    pInput.value = "";
    postbtn.classList.remove("p-post");
})



postbtn.addEventListener("click", function(){
    popup_wrapper.classList.remove("show");
    postbtn.classList.remove("p-post");
    var  val = pInput.value;
    allPost.innerHTML += `
    <div class="post-box">
    <div class = "post-c" >
    <div class="pro-wrapper">
    <div class="post-img">
    <img src = "https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/92785481_1577428602407947_2129122890442866688_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=fI66YNgfrncAX8awlPo&_nc_ht=scontent.fdac5-1.fna&tp=27&oh=928a32af3d384f61afdbca5a669d04c8&oe=60E84C67"
    alt = "profile" />
    </div>
    <div class ="pro-details" >
    <p class="name">${name}</p>
    <p class="time">Just Now.🌐</p>
    </div>
    </div>
        <div class="dot3">...</div>
    </div>
    <hr>
    <div class="txt-post">${val}
    </div>
    <div class="like-comment-d">
    <div class="like">
    <span class="icon-like"> 🥰 </span>
    <span class="like-count">12</span>
    </div>
    <div class="comment">
    <span class="comm-count">156</span>
    <span class="comment">comments</span>
    </div>
    </div>
    <div class="like-share">
    <span class="like-clk"> 🥰 Like </span>
    <span> 🍰 Comment </span>
    <span> 📶 Share </span>
    </div>
    <div class="all-comments">
    <div class="comm-d">
    <span class="com-1">View 3 more comments</span>
    <span class="com-2">All Comments 🤍</span>
    </div>
    <div class="comments-box">
    <div class="img-comm">
    <img src = "https://tbsnews.net/sites/default/files/styles/big_3/public/images/2020/09/19/salman_shah.gif?itok=ei7FGJgx" / >
    </div>
    <div class="id-comment">
    <span class="id-name">Salman Shah</span>
    <span class="id-comm">Oww! Nice😉</span>
    <div class="comment-rep">
    <span>Like.</span>
    <span>Reply.</span>
    <span>Share.</span>
    <span>Just Now</span>
    </div>
    </div>
    </div>
    <div class="input-comm">
    <div class="img-comm-pro">
    <img src = "https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/92785481_1577428602407947_2129122890442866688_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=fI66YNgfrncAX8awlPo&_nc_ht=scontent.fdac5-1.fna&tp=27&oh=928a32af3d384f61afdbca5a669d04c8&oe=60E84C67" />
    </div>
    <input class="comm-input" placeholder="Write an answer..."/>
    </div>
    </div>
    </div>
    `
    pInput.value = "";
})

