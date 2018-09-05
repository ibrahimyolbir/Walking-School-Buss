
jQuery(document).ready(function($){
    $('.signup').hide();
    $('.recover-password').hide();
    
    
    $('.btn-reset').click(function () {
        $('.login').hide();
        $('.recover-password').fadeIn(300);
    });
    
    $('.btn-member').click(function () {
        $('.login').hide();
        $('.signup').fadeIn(300);
    });
    
    
    $('.btn-login').click(function () {
        $('.signup').hide();
        $('.recover-password').hide();
        $('.login').fadeIn(300);
    
    });
    
    $('.notification').hide();
    
    $('.btn-password').click(function () {
    
        if($('#resetPassword').val()==0) {
            // $('#resetPassword').after('<span class="error">Email not valid.</span>')
            $('.error').text('Email not valid.')
        }
    
       else {
            $('.reset-mail').text($('#resetPassword').val());
            $('.recover-password form').hide();
            $('.notification').fadeIn(300);
        }
    });
    
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

