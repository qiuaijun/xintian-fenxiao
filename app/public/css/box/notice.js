function showNoticeBox() {
    var win = new W.Window({
        title: '重要通告',
        height: "auto",
        width:600,
        content: '#noticeContent',
        bbar: [{
            text: '关闭',
            type: 'link',
            handler: function() {
                this.close();
            }
        }]
    });
    win.show();
}
$(function(){showNoticeBox();})
