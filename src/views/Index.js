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
  
  var keydownCtrl = 0;
  var keydownShift = 0;

  document.onkeydown=keycheck;
  document.onkeyup=uncheckCtrlShift;

  function keycheck()
  {
        switch(event.keyCode){ 
          case 123:event.keyCode='';return false; break; //F12
          case 17:event.keyCode='';keydownCtrl=1;return false; break; //컨트롤키
        }

        if(keydownCtrl) return false;
  }

  function uncheckCtrlShift()
  {
        if(event.keyCode==17)      keydownCtrl=0;
        if(event.keyCode==16)      keydownShift=0;
  }


    function click()
  {
      if ((event.button==2) || (event.button==2)) 
      {alert('[마우스 오른쪽 클릭] / [컨트롤] / [F12] 금지 입니다.');}
  }
  document.onmousedown=click;

 
  
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
          <Notifications />
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
