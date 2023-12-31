var exec = require('cordova/exec');

var CtyLocationNotification = {
    //普通通知  
    commonNotice: function(
        success,
        error,
        notificationId,
        title,
        subText,
        message,
        urlLargeIco,
        urlBigImage,
        strDate,
        strRepeat,
        strType
    ) {
        exec(success, error, 'CtyNoticePlugin', 'commonNotice', [notificationId,title, subText, message, urlLargeIco,urlBigImage,strDate,strRepeat,strType]);
    },
    //大文本通知
    largeTextNotice: function(
        success,
        error,
        notificationId,
        title,
        subText,
        message,
        urlLargeIco,
        urlBigImage,
        strDate,
        strRepeat,
        strType
    ) {
        exec(success, error, 'CtyNoticePlugin', 'largeTextNotice', [notificationId,title, subText, message, urlLargeIco,urlBigImage,strDate,strRepeat,strType]);
    },
    //重要内容通知
    importantNotice: function(
        success,
        error,
        notificationId,
        title,
        subText,
        message,
        urlLargeIco,
        urlBigImage,
        strDate,
        strRepeat,
        strType
    ) {
        exec(success, error, 'CtyNoticePlugin', 'importantNotice', [notificationId,title, subText, message, urlLargeIco,urlBigImage,strDate,strRepeat,strType]);
    },
    //大图通知
    bigImageNotice: function(
        success,
        error,
        notificationId,
        title,
        subText,
        message,
        urlLargeIco,
        urlBigImage,
        strDate,
        strRepeat,
        strType
    ) {
        exec(success, error, 'CtyNoticePlugin', 'bigImageNotice', [notificationId,title, subText, message, urlLargeIco,urlBigImage,strDate,strRepeat,strType]);
    },
    //定时通知
    timedNotice: function(
        success,
        error,
        notificationId,
        title,
        subText,
        message,
        urlLargeIco,
        urlBigImage,
        strDate,
        strRepeat,
        strType
    ) {
        exec(success, error, 'CtyNoticePlugin', 'timedNotice', [notificationId,title, subText, message, urlLargeIco,urlBigImage,strDate,strRepeat,strType]);
    },
   //定时通知
    timedCancelNotice: function(
        success,
        error,
        notificationId,
        title,
        subText,
        message,
        urlLargeIco,
        urlBigImage,
        strDate,
        strRepeat,
        strType
    ) {
        exec(success, error, 'CtyNoticePlugin', 'timedCancelNotice', [notificationId,title, subText, message, urlLargeIco,urlBigImage,strDate,strRepeat,strType]);
    }
}

module.exports = CtyLocationNotification