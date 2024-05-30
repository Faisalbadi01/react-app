import logo from './logo.svg';
import './App.css';
import './style.css'
function App() {
  return (


    <div>
   
    <nav class="flex">
        <a href="javascript:void(0)" class="logo"><img src="https://i.postimg.cc/s23zP3Mn/logo.png" alt="" /></a>
        <ul class="links flex">
            <li><a href="javascript:void(0)" class="active">HOME</a></li>
            <li><a href="javascript:void(0)">SERVICES</a></li>
            <li><a href="javascript:void(0)">PORTFOLIO</a></li>
            <li><a href="javascript:void(0)">CONTACT</a></li>
            <li><a href="javascript:void(0)">ABOUT</a></li>
        </ul>
    </nav>
    

    <header class="flex relative padding_2">
        <article class="relative padding_4">
            <h5 class="sub_title tag">Welcome To Bboysdreamsfell</h5>
            <h1 class="title big">Code Done Right</h1>
            <p>We provide software & graphic expertise. So you can add skills rapidly with out the need of permanent staff.</p>
            <aside class="buttons fixed_flex">
                <a href="javascript:void(0)" class="btn btn_1">Learn more</a>
                <a href="javascript:void(0)" class="btn btn_2">Contact us</a>
            </aside>
        </article>
        <aside class="social_icons flex">
            <a href="javascript:void(0)"><i class="fa fa-facebook"></i></a>
            <a href="javascript:void(0)"><i class="fa fa-instagram"></i></a>
            <a href="javascript:void(0)"><i class="fa fa-linkedin"></i></a>
        </aside>
    </header>
    

    <aside class="credit"><a href="https://www.figma.com/proto/Xu2qD5cVZ5j8JosNqKgT9C/Untitled?node-id=0-3&t=qXV6fMucHxAjELb6-1&scaling=scale-down-width&page-id=0%3A1" target="_blank"><iconify-icon icon="logos:figma"></iconify-icon> Proto in Figma</a>
    </aside>
    </div>
  );
}

export default App;
