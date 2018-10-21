      function showModal(title,url,w,h,id){
          if (title == null || title == '') {
              title=false;
          };
          if (url == null || url == '') {
              url="../404.html";
          };
          if (w == null || w == '') {
              w=($(window).width()*0.9);
          };
          if (h == null || h == '') {
              h=($(window).height() - 50);
          };
          layer.open({
              type: 2,
              area: [w+'px', h +'px'],
              // fix: false, //不固定
              // maxmin: true,
              shadeClose: true,
              shade:0.4,
              title: title,
              content: url+"?id="+id,
          });
          //console.log("W:"+w+"，H:"+h);
      }

       function delChecked (argument) {
          layer.confirm('确认要删除选中项吗？',function(index){
              //捉到所有被选中的，发异步进行删除
              layer.msg('删除成功', {icon: 1});
              $(".layui-form-checked").not('.header').parents('tr').remove();
          });
        }