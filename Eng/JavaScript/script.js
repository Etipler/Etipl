const Login_menu = document.querySelector('.Login_menu');
const LoginPopup = document.querySelector('.Login');
const Login_link = document.querySelector('.register_link1');
const icon_Login = document.querySelector('.icon_close');
const Register_menu = document.querySelector('.Register_menu');
const Register_link = document.querySelector('.register_link');
const icon_Register = document.querySelector('.icon_close1');
const btnlogin = document.querySelector('.btn')
const email = document.querySelector('.emaillogin')
const email1 = document.querySelector('.email')

LoginPopup.addEventListener('click', ()=> {
Login_menu.classList.add('active-popup');
});
icon_Login.addEventListener('click', ()=> {
    Register_menu.classList.remove('active-popup');
    Login_menu.classList.remove('active-popup');
    });
Register_link.addEventListener('click', ()=> {
    Login_menu.classList.remove('active-popup');
    Register_menu.classList.add('active-popup');
    });
Login_link.addEventListener('click',()=> {
    Register_menu.classList.remove('active-popup');
    Login_menu.classList.add('active-popup');
});
icon_Register.addEventListener('click', ()=> {
    Register_menu.classList.remove('active-popup');
    Login_menu.classList.remove('active-popup');
});

                        //SCROLL CATALOG
const anchors = document.querySelectorAll('a[href*="#catalog"]')

for (let anchor of anchors){
    anchor.addEventListener("click",function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
}
const Photo_button = document.querySelector('.photo_gallery');
const Photo_button1 = document.querySelector('.photo-gallery1');
const Photo_button2 = document.querySelector('.photo_gallery2');
const Photo_button3 = document.querySelector('.photo_gallery3');
const Photo_button4 = document.querySelector('.photo-gallery4');
const Photo_button5 = document.querySelector('.photo_gallery5');
const Photo_button6 = document.querySelector('.photo_gallery6');
const Photo_button7 = document.querySelector('.photo-gallery7');
const Photo_button8 = document.querySelector('.photo_gallery8');
// const Photo_click = document.querySelector('.model');
// const Photo_click1 = document.querySelector('.model1');
// const Photo_click2 = document.querySelector('.model2');
// const Photo_click3 = document.querySelector('.model3');
// const Photo_click4 = document.querySelector('.model4');
// const Photo_click5 = document.querySelector('.model5');
// const Photo_click6 = document.querySelector('.model6');
// const Photo_click7 = document.querySelector('.model7');
// const Photo_click8 = document.querySelector('.model8');
const Close_button = document.querySelector('.close');
const Close_button1 = document.querySelector('.close1');
const Close_button2 = document.querySelector('.close2');
const Close_button3 = document.querySelector('.close3');
const Close_button4 = document.querySelector('.close4');
const Close_button5 = document.querySelector('.close5');
const Close_button6 = document.querySelector('.close6');
const Close_button7 = document.querySelector('.close7');
const Close_button8 = document.querySelector('.close8');


// Photo_button.addEventListener('click', ()=> {
//     Photo_click.classList.add('model-photo');
// });
// Close_button.addEventListener('click', ()=> {
//     Photo_click.classList.remove('model-photo');
// });


// Photo_button1.addEventListener('click', ()=> {
//     Photo_click1.classList.add('model-photo1');
// });
// Close_button1.addEventListener('click', ()=> {
//     Photo_click1.classList.remove('model-photo1');
// });


// Photo_button2.addEventListener('click', ()=> {
//     Photo_click2.classList.add('model-photo2');
// });
// Close_button2.addEventListener('click', ()=> {
//     Photo_click2.classList.remove('model-photo2');
// });

// Photo_button3.addEventListener('click', ()=> {
//     Photo_click3.classList.add('model-photo3');
// });
// Close_button3.addEventListener('click', ()=> {
//     Photo_click3.classList.remove('model-photo3');
// });


// Photo_button4.addEventListener('click', ()=> {
//     Photo_click4.classList.add('model-photo4');
// });
// Close_button4.addEventListener('click', ()=> {
//     Photo_click4.classList.remove('model-photo4');
// });


// Photo_button5.addEventListener('click', ()=> {
//     Photo_click5.classList.add('model-photo5');
// });
// Close_button5.addEventListener('click', ()=> {
//     Photo_click5.classList.remove('model-photo5');
// });

// Photo_button6.addEventListener('click', ()=> {
//     Photo_click6.classList.add('model-photo6');
// });
// Close_button6.addEventListener('click', ()=> {
//     Photo_click6.classList.remove('model-photo6');
// });


// Photo_button7.addEventListener('click', ()=> {
//     Photo_click7.classList.add('model-photo7');
// });
// Close_button7.addEventListener('click', ()=> {
//     Photo_click7.classList.remove('model-photo7');
// });


// Photo_button8.addEventListener('click', ()=> {
//     Photo_click8.classList.add('model-photo8');
// });
// Close_button8.addEventListener('click', ()=> {
//     Photo_click8.classList.remove('model-photo8');
// });

const changeHandler = e =>{
    const value = e.value
    e.value = value.replace(/\D/g, '');
}

const span_order = document.querySelector('.span_order');
const button_footer = document.querySelector('.button_footer');
const checkbox_footer = document.querySelector('.checkbox_footer')

checkbox_footer.addEventListener('click', ()=>{
button_footer.addEventListener('click', ()=> {
    span_order.classList.add('span_order1');
});
});

                                        //TIME
window.onload = function(){
    window.setInterval(function(){
        var date = new Date();

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if (hours < 10) hours = "0" + hours;
        if(minutes < 10) minutes = "0" + minutes;
        if(seconds < 10) seconds = "0" + seconds;

        var clock = hours + ":" + minutes + ":" + seconds;
        document.getElementById("clock").innerHTML = clock;
    }
    );
}
const time = document.querySelector('#clock')
LoginPopup.addEventListener('click', ()=> {
    time.classList.add('remove_time');
    });
    icon_Login.addEventListener('click', ()=> {
        time.classList.remove('remove_time');
        });
        icon_Register.addEventListener('click', ()=> {
            time.classList.remove('remove_time');
        });
                                                    //RANDOM


        const btn_random = document.querySelector('.btn_random');
        btn_random.addEventListener('click', () =>{
            var val = 100;
            var number = (Math.floor(Math.random() * val));
            document.getElementById("random").innerHTML = number;
        });

                                                    //SHOW        
        function onEntry(entry){
                 entry.forEach(change =>{
                     if(change.isIntersecting){
                         change.target.classList.add('show-popup')
              }else{
                         change.target.classList.remove('show-popup')
             }
            })
             entry.forEach(change =>{
                if(change.isIntersecting){
                    change.target.classList.add('show-popup1')
         }else{
                    change.target.classList.remove('show-popup1')
        }
    })
        entry.forEach(change =>{
            if(change.isIntersecting){
                change.target.classList.add('show-popup2')
     }else{
                change.target.classList.remove('show-popup2')
     }
    })
    entry.forEach(change =>{
        if(change.isIntersecting){
            change.target.classList.add('show-popup3')
 }else{
            change.target.classList.remove('show-popup3')
 }
})
entry.forEach(change =>{
    if(change.isIntersecting){
        change.target.classList.add('show_popupreviews')
}else{
        change.target.classList.remove('show_popupreviews')
}
})
entry.forEach(change =>{
    if(change.isIntersecting){
        change.target.classList.add('text-popup')
}else{
        change.target.classList.remove('text-popup')
}

})
entry.forEach(change =>{
    if(change.isIntersecting){
        change.target.classList.add('gallery-popup1')
}else{
        change.target.classList.remove('gallery-popup1')
}

})
entry.forEach(change =>{
    if(change.isIntersecting){
        change.target.classList.add('gallery-popup2')
}else{
        change.target.classList.remove('gallery-popup2')
}

})
entry.forEach(change =>{
    if(change.isIntersecting){
        change.target.classList.add('gallery-popup3')
}else{
        change.target.classList.remove('gallery-popup3')
}

})
entry.forEach(change =>{
    if(change.isIntersecting){
        change.target.classList.add('sixth-popup')
}else{
        change.target.classList.remove('sixth-popup')
}

})
entry.forEach(change =>{
    if(change.isIntersecting){
        change.target.classList.add('footer-popup')
}else{
        change.target.classList.remove('footer-popup')
}

})
        }
         let options = {
                threashold:[0.5]};
            let observer= new IntersectionObserver(onEntry, options);
            let elements = document.querySelectorAll('.h1-catalog');
            let elements1 = document.querySelectorAll('.three_cards-first');
            let elements2 = document.querySelectorAll('.three_cards-second');
            let elements3 = document.querySelectorAll('.three_cards-third');
            // let reviews = document.querySelectorAll('.block_fifth, .block_fifth1')
            let text = document.querySelectorAll('.text_fifth')
            let galleryfirst = document.querySelectorAll('.gallery_first')
            let gallerysecond = document.querySelectorAll('.gallery_second')
            let gallerythird = document.querySelectorAll('.gallery_third')
            let sixthtext = document.querySelectorAll('.text_sixth')
            let footer = document.querySelectorAll('.block_footer')

            for(let elm of elements){
            observer.observe(elm);
            }
            for(let elm1 of elements1){
                observer.observe(elm1);
            }
            for(let elm2 of elements2){
                observer.observe(elm2);
            }
            for(let elm3 of elements3){
                observer.observe(elm3)
            }
            // for(let rev of reviews){
            //     observer.observe(rev)
            // }
            for(let tex of text){
                observer.observe(tex)
            }
            for(let gallf of galleryfirst){
                observer.observe(gallf)
            }
            for(let galls of gallerysecond){
                observer.observe(galls)
            }
            for(let gallt of gallerythird){
                observer.observe(gallt)
            }
            for(let six of sixthtext){
                observer.observe(six)
            }
            for(let foo of footer){
                observer.observe(foo)
            }


    const switchbtn = document.querySelector('.switch_left');
    const switch_right = document.querySelector('.block_fifth');
    const switch_left = document.querySelector('.block_fifth1');
    const switchbtnright = document.querySelector('.switch_right')
    switchbtn.addEventListener('click', ()=> {
        switch_left.classList.add('slide_popup');
        switch_right.classList.add('slide_popup');
        switch_left.classList.remove('slide_popup_right');
        switch_right.classList.remove('slide_popup_right');
        return;
        });
    switchbtnright.addEventListener('click', ()=>{
        switch_left.classList.add('slide_popup_right');
        switch_right.classList.add('slide_popup_right');
        switch_left.classList.remove('slide_popup');
        switch_right.classList.remove('slide_popup');
        return;
    });
