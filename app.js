
  const classroom = document.getElementById("classroom")
  const test = document.getElementById("test")
  const bottomdiv = document.getElementById("bottomdiv")
  const item = document.getElementsByClassName("item")

  const item1 = document.getElementById("item1")
  const item2 = document.getElementById("item2")
  const item3 = document.getElementById("item3")
  const item4 = document.getElementById("item4")
  const item5 = document.getElementById("item5")
  const item6 = document.getElementById("item6")
  const item7 = document.getElementById("item7")
  const item8 = document.getElementById("item8")

  const icon1 = document.getElementById("icon1")
  const icon2 = document.getElementById("icon2")
  const icon3 = document.getElementById("icon3")
  const icon4 = document.getElementById("icon4")
  const icon5 = document.getElementById("icon5")
  const icon6 = document.getElementById("icon6")
  const icon7 = document.getElementById("icon7")
  const icon8 = document.getElementById("icon8")

  test.onclick = function(){
    bottomdiv.style = " background-color:#0bd";
    for(let i = 0; i<item.length; i++){
    item[i].style = "background-color:#3C8DAD"
    }
    item1.innerHTML ="證照課程";
    item2.innerHTML ="考試報名";
    item3.innerHTML ="主管專區";
    item4.innerHTML ="證照紀錄";
    item5.innerHTML ="考試學院";
    item6.innerHTML ="模擬測驗";
    item7.innerHTML ="相關資料";
    item8.style ="visibility:hidden";

    icon1.className="fas fa-sign-in-alt fa-4x"
    icon2.className="fas fa-calendar-check fa-4x"
    icon3.className="fas fa-compass fa-4x"
    icon4.className="fas fa-eye fa-4x"
    icon5.className="fas fa-user-graduate fa-4x"
    icon6.className="fas fa-laptop-code fa-4x"
    icon7.className="fas fa-book-reader fa-4x"
  }

  classroom.onclick = function(){
    // window.location.reload()
    bottomdiv.style = " background-color:#3C8DAD";
    for(let i = 0; i<item.length; i++){
    item[i].style = "background-color:#0bd"
    }
    item1.innerHTML ="課程報名";
    item2.innerHTML ="待修課程";
    item3.innerHTML ="主管專區";
    item4.innerHTML ="學習履歷";
    item5.innerHTML ="活動報名";
    item6.innerHTML ="學習履歷";
    item7.innerHTML ="表格文件";
    item8.style.removeProperty("visibility");

    icon1.className="fas fa-chalkboard-teacher fa-4x"
    icon2.className="fas fa-clipboard-list fa-4x"
    icon3.className="fas fa-tree fa-4x"
    icon4.className="fas fa-clipboard fa-4x"
    icon5.className="fas fa-users fa-4x"
    icon6.className="far fa-keyboard fa-4x"
    icon7.className="fas fa-key fa-4x"

  }
