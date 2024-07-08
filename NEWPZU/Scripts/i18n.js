const translations = {
    en: {
        home: "Home",
        airline: "Airlines",
        news: "News",
        suggestion: "Suggestion",
        filght: "Flights",
        departure: "Departure",
        arrival: "Arrival",
        copyright: "All rights reserved to Sudan Airports Company Limited 2024",
        //Home Page
        testmaualTitle: "Welcome To PortSudan",
        testmaualIntro: "Welcome to the land of civilization, the eastern gateway to Sudan, the land of ports, seas and goodness. You arrived welcome and arrived at ease. Welcome to Port Sudan International Airport.",
        aboutTitle: "PortSudan International Airport",
        aboutIntro1: "Port Sudan International Airport is an international airport serving the city of Port Sudan in the Red Sea State of Sudan. It is considered the second largest airport in Sudan after Khartoum International Airport. It was officially opened in 1992. It is an airport equipped with all modern navigational and ground equipment. Sudan Airports Company Limited operates this airport",
        aboutIntro2: "Port Sudan International Airport is an international airport serving the city of Port Sudan in the Red Sea State of Sudan. It is considered the second largest airport in Sudan after Khartoum International Airport. It was officially opened in 1992. It is an airport equipped with all modern navigational and ground equipment. Sudan Airports Company Limited operates this airport",
        welcomeIntro: "Welcome ..  Welcome ..  Welcome ..  Welcome ..  Welcome ..  Welcome .. ",
        importantNews: "Important News",
        hospital: "Hospitals",
        tourism: "Tourism",
        contact: "Contact Us ...",
        //airline page
        airlineIntro: "We wish you safe and happy trips",
        //Hotal Page 
        hotel: "Hotels",
        more: "More",
        loacation: "Loacation",
        //News Page
        newsTitle: "News Titles",
        newsMainTitle: "Our News",
        //Suggestion Page
        suggestionTitle: "Complaints & Suggestions",
        suggestionIntro: "We are happy to accept your opinions and suggestions to improve the quality of the service provided",
        send: "Send",
        name: "Your Name",
        subject: "Subject",
        message: "Message",
        //Flights page
        dtAirline: "Company",
        dtTime: "Time",
        dtStatus: "Status",
        dtTo: "Airport",
        dtDate : "Date",
        mainTitleTakeoff: "TakeOff",
        mainTitleLanding: "Landing",
        sLengthMenu: "Display _MENU_ records per page",
        sZeroRecords: "Nothing found - Sorry",
        sInfo: "Showing _START_ to _END_ of _TOTAL_ records",
        sInfoEmpty: "Showing 0 to 0 of 0 records",
        sInfoFiltered: "(filtered from _MAX_ total records)",
        toMorrow: "Tomorrow",
        toDay: "Today",
        yesterDay: "Yesterday",
    },
    ar: {
        home: "الرئيسية",
        airline: "شركات الطيران",
        news: "الاخبار",
        suggestion: "شكاوي ومقترحات",
        filght: "جدول الرحلات",
        departure: "مغادرة",
        arrival: "وصول",
        copyright: "جميع الحقوق محفوظة لشركة مطارات السودان المحدودة 2024",
        //Home Page
        testmaualTitle: "اهلا بك في بورتسودان",
        testmaualIntro: "اهلابك الى ارض الحضارة بوابة السودان الشرقية ارض المواني والبحار والخير حللتم اهلا ونزلتم سهلا مرحبا بكم في مطار بورتسودان الدولي",
        aboutTitle: "مطار بورتسودان الدولي",
        aboutIntro1: "مطار بورتسودان الدولي هو مطار دولي يخدم مدينة بورتسودان في ولاية البحر الأحمر بالسودان. يعتبر ثاني أكبر مطار في السودان بعد مطار الخرطوم الدولي. تم افتتاحه رسمياً في عام 1992. وهو مطار مجهز بكافة التجهيزات الملاحية والأرضية الحديثة. تقوم شركة مطارات السودان المحدودة  بتشغيل هذا المطار",
        aboutIntro2: "مطار بورتسودان الدولي هو مطار دولي يخدم مدينة بورتسودان في ولاية البحر الأحمر بالسودان. يعتبر ثاني أكبر مطار في السودان بعد مطار الخرطوم الدولي. تم افتتاحه رسمياً في عام 1992. وهو مطار مجهز بكافة التجهيزات الملاحية والأرضية الحديثة. تقوم شركة مطارات السودان المحدودة  بتشغيل هذا المطار",
        welcomeIntro: "مرحبا بك في بورتسودان مرحبا بك في بورتسودان مرحبا بك في بورتسودان مرحبا بك في بورتسودان",
        importantNews: "احداث هامة",
        hospital: "مستشفيات",
        tourism: "سياحة",
        contact: "تواصل معنا ...",
        //airline page
        airlineIntro: "نتمنى لكم رحلات امنة وسعيدة",
        //Hotal Page 
        hotel: "فنادق",
        more: "المزيد",
        loacation: "الموقع",
        //News Page
        newsTitle: "العناوين",
        newsMainTitle: "اخر الاخبار",
        //Suggestion Page
        suggestionTitle: "شكاوي ومقترحات",
        suggestionIntro: "نسعد بقبول ارائكم ومقترحاتكم لتحسين جودة الخدمة المقدمة",
        send: "ارسال",
        name: "الاسم",
        subject: "الموضوع",
        message: "الرسالة",
        //Flights page
        dtAirline: "الشركة",
        dtTime: "الزمن",
        dtStatus: "الحالة",
        dtTo: "المطار",
        dtDate: "التاريخ",
        mainTitleTakeoff: "مغادرة",
        mainTitleLanding: "وصول",
        sLengthMenu: "عرض _MENU_ records من page",
        sZeroRecords: "لا توجد بيانات",
        sInfo: "عرض _START_ الي _END_ من _TOTAL_ سجل",
        sInfoEmpty: "عرض 0 الي 0 من 0 سجل",
        sInfoFiltered: "(filtered from _MAX_ total records)",
        toMorrow: "غدا",
        toDay: "اليوم",
        yesterDay: "الامس",
    }
}


$(document).ready(function () {
    const savedLanguage = localStorage.getItem("lang") || "ar";

    $("head").append('<link href="/Content/styleLTR.css" rel="stylesheet" />');
    setLanguage(savedLanguage);

    $('#selectLanguage').val(savedLanguage).on('change', function () {
        const selectedLanguage = $(this).val();
        setLanguage(selectedLanguage);
        localStorage.setItem("lang", selectedLanguage);
        $("#masterContent").hide();
       
        location.reload();
    });
    function setLanguage(language) {
        $("[data-i18n]").each(function () {
            const translationKey = $(this).data("i18n");
            if ($(this).is("input, textarea")) {
                // Change the placeholder for input and textarea elements
                $(this).attr('placeholder', translations[language][translationKey]);
            } else {
                // Change the text content for other elements
                $(this).text(translations[language][translationKey]);
            }
        });
        $('html').attr('dir', language === "ar" ? "rtl" : "ltr");
        
    }
});

