//sidebar
var Sidebar = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
}

Sidebar.prototype.dropdown = function(e) {
    var $el = e.data.el;
        $this = $(this),
        $next = $this.next();

    // $next.slideToggle();
    $("#sidebar li").removeClass('open');
    $this.parent().toggleClass('open');
    var c_array = [];
    //激活添加cookie ，取消删除
    if(parseInt($this.parent().attr('rel')) < 2)
    {
        if($this.parent().hasClass('open'))
        {
            c_array.push($this.parent().attr('rel'));
            c_array.push('open');
            cookieTool.setCookie('c_array', c_array, 10);
        }
        else
        {
            cookieTool.delCookie('c_array');
        }
    }
    // if (!e.data.multiple) {
    //     $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    // };
}   

var sidebar = new Sidebar($('#sidebar'), false);
