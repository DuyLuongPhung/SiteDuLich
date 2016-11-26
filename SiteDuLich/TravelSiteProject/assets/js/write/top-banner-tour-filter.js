 $(function () {
     $('#datetimepicker1').datetimepicker();
     var provices = [
             "Vũng Tàu"
            , "Đắk Lắk"
            , "Đà Lạt"
            , "Hà Nội"
            , "TP HCM"
            , "Sapa"
            , "Lào Cai"
            , "Huế"
            , "Đà Nẵng"
            , "Vịnh Hạ Long"
            , "Nha Trang"
            , "Hawaii"
            , "Singapore"
            , "Hà Lan"
            , "Nhật Bản"
            ];
     $("#provice-text-from").autocomplete({
         source: provices
     });

     $("#provice-text-to").autocomplete({
         source: provices
     });
 });