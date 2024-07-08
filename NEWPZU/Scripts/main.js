/*
Start  Page
*/


// Show loader when document starts loading
$(document).ready(function () {
    //// تأكيد إظهار الـloader
    //$("#loader").show();
    //// تأكيد إخفاء المحتوى
    //$("#masterContent").hide();
});

$(window).on("load", function () {
    // إخفاء الـloader وإظهار المحتوى عند اكتمال تحميل الصفحة
    $("#loader").fadeOut("slow", function () {
        $("#masterContent").fadeIn("slow");
    });
});
/*
End  Page
*/
/*Start Function*/
/* Start Load  Data */
const lang = localStorage.getItem("lang") || "ar";
function getHotel() {
    // Make AJAX request to controller action
    $.ajax({
        url: '/Hotels/LoadData?lang=' + lang, // Replace with your controller route
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            data.forEach(function (row) {
                var starsHTML = ''; // Initialize an empty string to store stars HTML
                for (var i = 0; i < row.Star; i++) {
                    // Concatenate stars HTML
                    starsHTML += '<i class="fa-solid fa-star"></i>';
                }

                // Append hotel card HTML to #hotel-container
                $('#hotel-container').append(
                    `
                <div class ="col-md-4 col-sm-6">
                    <div class ="card bg-white h-100">
                        <img src="${row.Img}" class ="card-img-top" alt="${row.Name}">
                        <div class ="card-body">
                            <h3 class ="main-title fs-5 mb-4"> ${row.Name} </h3>
                            <p class ="card-text">
                                <div class ="mb-2">
                                    <i class ="fa-solid fa-phone"></i>
                                    <a href="tel:${row.Phone}">${row.Phone}</a>
                                </div>
                                <div class ="">
                                    <i class ="fa-solid fa-location-dot"></i>
                                    <a class ="ms-2" href="${row.Location}" data-i18n="loacation">الموقع</a>
                                </div>
                            </p>
                        </div>
                        <div class ="card-footer d-flex justify-content-between">
                            <div class ="star-icons">${starsHTML}</div> <!-- Append stars HTML here -->
                            <a href="" class ="" data-i18n="more">للمزيد</a>
                        </div>
                    </div>
                </div>
                `
                );
            });
        },
        error: function (xhr, status, error) {
            // Handle errors
            console.error(xhr.responseText);
        }
    });
}

function getAirline() {
    // Make AJAX request to controller action
    $.ajax({
        url: '/Airlines/LoadData', // Replace with your controller route
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            data.forEach(function (row) {
                $('#airline-container').append(
                    `
                            <div class ="col-md-4 col-sm-6">
                                <div class ="box bg-white">
                                    <a href="${row.Link}" target="_blank">
                                        <img src="${row.Logo}" class ="img-fluid" alt="${row.Name}">
                                    </a>
                                </div>
                            </div>
                            `
                );
            });
        },
        error: function (xhr, status, error) {
            // Handle errors
            console.error(xhr.responseText);
        }
    });
}
/* End Load  Data */
//Create Toast 
function createToast(message) {
    var toast = `<div class="toast-container position-fixed top-0 end-0 p-3">
                    <div id="liveToast" class ="toast bg-success p-2 text-white bg-opacity-75" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-body">
                            ${message}
                        </div>
                    </div>
                </div>`;
    $('body').append(toast);
}
function showToast(message) {
    createToast(message);
    const toastLiveExample = document.getElementById('liveToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

    toastBootstrap.show()
};
/*End Functions*/

/*Start Validation and Send Suggestion Form*/
$('#contact-form').bootstrapValidator({
    onSuccess: function (e) {
        sendData();
        e.preventDefault();

    },
    fields: {
        email: {
            validators: {
                regexp: {
                    regexp: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'enter valid email'
                }
            }
        },
        name: {
            validators: {
                notEmpty: {
                    message: 'يجب تعبئة هذا الحقل'
                },
                regexp: {
                    regexp: /^[\u0600-\u06FFa-zA-Z\s0-9]+$/,
                    message: 'يجب ان يحتوي علي حروف او ارقام فقط'
                }
            }
        },
        subject: {
            validators: {
                regexp: {
                    regexp: /^[\u0600-\u06FFa-zA-Z\s0-9]+$/,
                    message: 'يجب ان يحتوي علي حروف او ارقام فقط'
                }
            }
        },
        message: {
            validators: {
                notEmpty: {
                    message: 'يجب تعبئة هذا الحقل'
                },
                regexp: {
                    regexp: /^[\u0600-\u06FFa-zA-Z\s0-9]+$/,
                    message: 'يجب ان يحتوي علي حروف او ارقام فقط'
                }
            }
        }
    }

});
// Submit form via Ajax after validation
function sendData() {
    
    var formData = $("#contact-form").serialize(); // Serialize form data

    // Send Ajax request
    $.ajax({
        url: '/Suggestions/Create', // Replace with your submit URL
        type: 'POST',
        data: formData,
        success: function (response) {
            // Handle success response
            //console.log('Form submitted successfully:', response);
            showToast(response);
            $("#contact-form")[0].reset();
        },
        error: function (xhr, status, error) {
            // Handle error response
            console.error('Form submission failed:', error);
        }
    });
};
/*End Validation and Send Suggestion Form*/