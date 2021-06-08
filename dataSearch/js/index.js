layui.use("table", function () {
  var table = layui.table;

  //第一个实例
  table.render({
    elem: ".search_table",
    height: 312,
    url: "http://127.0.0.1:5000/test", //数据接口
    page: true, //开启分页
    toolbar: '#headBar',
    cols: [
      [
        {field: "id",title: "编号",width: 80,sort: true,fixed: "left",align: "center",},
        { field: "sex", title: "性别", width: 80, align: "center" },
        { field: "age", title: "年龄", width: 80, sort: true, align: "center" },
        { field: "ser_cre", title: "血肌酐", width: 110, align: "center" },
        { field: "eGFR", title: "eGFR", width: 177, align: "center" },
        { field: "kidney", title: "症型", align: "center" },
        { field: "tongue", title: "舌", align: "center" },
        { field: "pulse", title: "脉", align: "center" },
        {field: "detail",title: "详细",width: 80,toolbar: "#colBar",align: "center"},
      ],
    ],
  });

  table.on("tool(test)", function (obj) {
    $(".detail_page").css("display", "block")
    layer.open({
        type: 1,
        shade: false,
        title: false, //不显示标题
        content: $('.detail_page'), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
        cancel: function(){
            setTimeout(()=>{
                $(".detail_page").css("display", "none")
            }, 100)
        }
      });
  });
});

const TABLE_HEADER_INPUT = document.querySelector(".header-input")
document.querySelector(".header-button").addEventListener("click", (e) => {
  
})
