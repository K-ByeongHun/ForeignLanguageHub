/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Notifications from "views/IndexSections/Notifications.js";

import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";

import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";

import Basics from "views/IndexSections/Basics.js";
import Pagination from "views/IndexSections/Pagination.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";



export default function Index() {
  

  
 
  document.oncontextmenu = new Function ('return false'); //block right-click
  document.ondragstart = new Function ('return false'); //block drag and drop
  document.onselectstart = new Function ('return false'); //block text select
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
          <Download />
          
          <Notifications />
          <Examples />
          
          <JavaScript />
          <Navbars />
          <Tabs />
          <Pagination />
          <Typography />
        </div>
        <Footer />
      </div>
    </>
  );
}
