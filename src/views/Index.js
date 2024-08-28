import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view

// import Notifications from "views/IndexSections/Notifications.js";
import ESC from "views/IndexSections/EnglishSpeakingChallenge";
// import EBY from "views/IndexSections/bbooyoung";
import CJT from "views/IndexSections/ChinaJapanTravel";

import Navbars from "views/IndexSections/Navbars.js";
import WordGame from "views/IndexSections/WordGame";

import Typography from "views/IndexSections/Typography.js";
// import Modals from "views/IndexSections/Modals";
// import NucleoIcons from "views/IndexSections/NucleoIcons.js";

// import Basics from "views/IndexSections/Basics.js";
import Plan from "views/IndexSections/Plan";
// import Signup from "views/IndexSections/Signup.js";
// import Examples from "views/IndexSections/Examples.js";
// import Download from "views/IndexSections/Download.js";



export default function Index() {

  // document.oncontextmenu = new Function ('return false'); //block right-click
  // document.ondragstart = new Function ('return false'); //block drag and drop
  // document.onselectstart = new Function ('return false'); //block text select
  document.body.style.MozUserSelect = 'none'; //block text select on miscellaneous browsers


  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 123) {
      event.preventDefault();
    };
  }, true);
  
  function detectDevTool(allow) {
    if(isNaN(+allow)) allow = 100;
    var start = +new Date(); 
    debugger;
    var end = +new Date(); 
    if(isNaN(start) || isNaN(end) || end - start > allow) {
      // 개발자 도구가 open 된것을 감지했을때 실행할 코드 삽입
      document.location.href="https://www.tistory.com/"
    }
  }  

  if(window.attachEvent) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        detectDevTool();
      window.attachEvent('onresize', detectDevTool);
      window.attachEvent('onmousemove', detectDevTool);
      window.attachEvent('onfocus', detectDevTool);
      window.attachEvent('onblur', detectDevTool);
    } 
  } else {
    window.addEventListener('load', detectDevTool);
    window.addEventListener('resize', detectDevTool);
    window.addEventListener('mousemove', detectDevTool);
    window.addEventListener('focus', detectDevTool);
    window.addEventListener('blur', detectDevTool);
  }


  
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          {/* <Download /> */}
          
          {/* <Notifications />
          <Examples /> */}
          <CJT/>
          <ESC/>
          {/* <EBY/> */}
          {/* <Modals /> */}
          <Navbars />
          <WordGame />
          <Plan />
          <Typography />
        </div>
        <Footer />
      </div>
    </>
  );
}
