// zoom.js 添加 data-action
function imgAddDataAction()
{
    const imglist = document.getElementsByTagName("img")
    for(i of imglist)
    {
        i.setAttribute("data-action", "zoom");
    }
}

imgAddDataAction()
