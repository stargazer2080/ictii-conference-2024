import { useEffect, useState } from "react";
import "./navbar.css";

export default function Navbar (){
  const data = [
    {title: "Home", link: "#home"},
    {title: "Industry 5.0", link: "#about"},
    {title: "Important Dates", link: "#dates"},
    {title: "Submission", link: ""},
    {title: "Register", link: ""},
  ];

  const [navExpanded, setNavExpanded] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY >= 100){setNavExpanded(true)}
      else{setNavExpanded(false)}
    })
    return ()=>{
      window.removeEventListener("scroll", ()=>{})
    }
  },[window.scrollY, navExpanded])

  return <div className={navExpanded?"navbar-expanded flex-a-cen":"navbar flex-a-cen"}>
    {
      data.map((item, index)=><div key={index} className="item text-center">
        <a href={item.link}>{item.title}</a>  
      </div>)
    }
  </div>
}