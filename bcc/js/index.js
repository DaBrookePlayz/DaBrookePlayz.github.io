
    var checked = JSON.parse(localStorage.getItem('msclass')), classms=0,
    checked0 = JSON.parse(localStorage.getItem('msclass0')), classms0=0,
    checked1 = JSON.parse(localStorage.getItem('msclass1')), classms1=0;
    
    function deleteItems() {
      localStorage.clear();
      location.reload();
    }
