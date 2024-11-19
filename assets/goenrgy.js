// ÜBERGANG: sind wir auf einer PRODUKTSEITE? DANN LEITE WEITER!
$(document).ready(function () {
    if (window.location.href.indexOf("/products/") > -1) {

        window.location.replace("/");
    }
});

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// deactivate click
$(document).ready(function () {


    $(document).ready(function () {
        // Select the banner heading element
        var heading = $('#Slide-template--21818367017288__slideshow_qRzbgU-1 h2.banner__heading');

        // Get the full text content of the heading
        var fullText = heading.text().trim();

        // Split the text into parts
        var textParts = fullText.split(' ');

        // Create the new HTML content
        var newHtml = '<span>' + textParts[0] + ' ' + textParts[1] + '</span> <span id="headline" style="background-color: #f20f3e; color: white; white-space: nowrap; font-size: 6.7rem;">' + textParts.slice(2).join(' ') + '</span>';

        // Apply the new HTML content to the heading element
        heading.html(newHtml);
    });



    $('a[href$="/products/blaubeere-kokos"]').each(function () {
        $(this).attr('href', 'https://goenrgy.de/?sorte=kokos#homeProductOverview')
    })
    $('a[href$="/products/kaktus-kick"]').each(function () {
        $(this).attr('href', 'https://goenrgy.de/?sorte=kaktus#homeProductOverview')
    })
    $('a[href$="/products/arctic-ice"]').each(function () {
        $(this).attr('href', 'https://goenrgy.de/?sorte=arctic#homeProductOverview')
    })
    $('a[href$="/products/blaubeere-kokos"]').each(function () {
        $(this).attr('href', 'https://goenrgy.de/?sorte=kokos#homeProductOverview')
    })
    $('a[href$="/products/rasberry-cheesecake"]').each(function () {
        $(this).attr('href', 'https://goenrgy.de/?sorte=raspberry#homeProductOverview')
    })
    $('a[href$="/products/tropical-exotic"]').each(function () {
        $(this).attr('href', 'https://goenrgy.de/?sorte=exotic#homeProductOverview')
    })
    $('a[href$="/products/juneberry-jam"]').each(function () {
        $(this).attr('href', 'https://goenrgy.de/?sorte=juneberry#homeProductOverview')
    })
    $('a[href$="/products/white-peach"]').each(function () {
        $(this).attr('href', 'https://goenrgy.de/?sorte=peach#homeProductOverview')
    })
    $('a[href$="/products/sweet-lemon"]').each(function () {
        $(this).attr('href', 'https://goenrgy.de/?sorte=lemon#homeProductOverview')
    })
})




// Select all 'a' elements with an 'href' starting with '/products'
/* $('a[href^="/products"]').each(function() {
     // For each matched element, replace its 'href' attribute with '/'
     $(this).attr('href', '/');
 }); */



// faerbe collection item
$('#Slide-template--21516511445320__featured-collection-6').find('.card__inner').addClass('lightBlueBackground').addClass('secondBubbles')
$('#Slide-template--21516511445320__featured-collection-4').find('.card__inner').addClass('lightRedBackground').addClass('secondBubbles')
$('#Slide-template--21516511445320__featured-collection-5').find('.card__inner').addClass('lightYellowBackground').addClass('secondBubbles')

$('#Slide-template--21516511445320__featured-collection-1').find('.card__inner').addClass('lightGreenBackground').addClass('secondBubbles')
$('#Slide-template--21516511445320__featured-collection-2').find('.card__inner').addClass('secondBubbles lightArcticBackground')
$('#Slide-template--21516511445320__featured-collection-3').find('.card__inner').addClass('lightPurpleBackground').addClass('secondBubbles')

// faerbe collection item
$('#Slide-template--21818367017288__featured_collection_Rm7dne-6').find('.card__inner').addClass('lightBlueBackground').addClass('secondBubbles')
$('#Slide-template--21818367017288__featured_collection_Rm7dne-4').find('.card__inner').addClass('lightRedBackground').addClass('secondBubbles')
$('#Slide-template--21818367017288__featured_collection_Rm7dne-5').find('.card__inner').addClass('lightYellowBackground').addClass('secondBubbles')

$('#Slide-template--21818367017288__featured_collection_Rm7dne-1').find('.card__inner').addClass('lightGreenBackground').addClass('secondBubbles')
$('#Slide-template--21818367017288__featured_collection_Rm7dne-2').find('.card__inner').addClass('secondBubbles lightArcticBackground')
$('#Slide-template--21818367017288__featured_collection_Rm7dne-3').find('.card__inner').addClass('lightPurpleBackground').addClass('secondBubbles')



// badge einsetzen

$('#Slide-template--21516511445320__featured-collection-1').prepend('<div class="coolbanner big cactus">Neu! </div>');

$('#Slide-template--21516511445320__featured-collection-2').prepend('<div class="coolbanner big arctic">Neu! </div>');


/* LOGO ANIM */
function changeLogo() {
    setTimeout(function () {
        setTimeout(function () {
            $('img.header__heading-logo').css('transform', 'scale(1.6)');
            setTimeout(function () {
                $('img.header__heading-logo').css('transform', 'scale(0)');
                setTimeout(function () {
                    $('img.header__heading-logo').attr('src', 'https://cdn.shopify.com/s/files/1/0651/4271/8696/files/Goenrgy_SweetLemon.png?v=1729078176');
                    $('img.header__heading-logo').attr('srcset', 'https://cdn.shopify.com/s/files/1/0651/4271/8696/files/Goenrgy_SweetLemon.png?v=1729078176');
                    $('img.header__heading-logo').css('transform', 'scale(1)');
                    setTimeout(function () {
                        setTimeout(function () {
                            $('img.header__heading-logo').css('transform', 'scale(1.6)');
                            setTimeout(function () {
                                $('img.header__heading-logo').css('transform', 'scale(0)');
                                setTimeout(function () {
                                    $('img.header__heading-logo').attr('src', 'https://cdn.shopify.com/s/files/1/0651/4271/8696/files/Goenrgy_JuneberryJam.png?v=1729078176');
                                    $('img.header__heading-logo').attr('srcset', 'https://cdn.shopify.com/s/files/1/0651/4271/8696/files/Goenrgy_JuneberryJam.png?v=1729078176');
                                    $('img.header__heading-logo').css('transform', 'scale(1)');
                                    setTimeout(function () {
                                        setTimeout(function () {
                                            $('img.header__heading-logo').css('transform', 'scale(1.6)');
                                            setTimeout(function () {
                                                $('img.header__heading-logo').css('transform', 'scale(0)');
                                                setTimeout(function () {
                                                    $('img.header__heading-logo').attr('src', 'https://cdn.shopify.com/s/files/1/0651/4271/8696/files/Goenrgy_WhitePeach.png?v=1729078175');
                                                    $('img.header__heading-logo').attr('srcset', 'https://cdn.shopify.com/s/files/1/0651/4271/8696/files/Goenrgy_WhitePeach.png?v=1729078175');
                                                    $('img.header__heading-logo').css('transform', 'scale(1)');
                                                }, 200);
                                            }, 200);
                                        }, 200);
                                    }, 4000);
                                }, 200);
                            }, 200);
                        }, 200);
                    }, 4000);
                }, 200);
            }, 200);
        }, 200);

    }, 4000);
}
var intervalId = window.setInterval(function () {
    changeLogo()
}, 8000);
$(document).ready(function () {
    if (window.location.href.indexOf("sorte=arctic") > -1) {
        $('#productOverviewExotic').click();
    }
    if (window.location.href.indexOf("sorte=kaktus") > -1) {
        $('#productOverviewRaspberry').click();
    }
    if (window.location.href.indexOf("sorte=kokos") > -1) {
        $('#productOverviewKokos').click();
    }
    if (window.location.href.indexOf("sorte=raspberry") > -1) {
        $('#productOverviewRaspberry').click();
    }
    if (window.location.href.indexOf("sorte=exotic") > -1) {
        $('#productOverviewExotic').click();
    }
    if (window.location.href.indexOf("sorte=lemon") > -1) {
        $('#productOverviewSweetLemon').click();
    }
    if (window.location.href.indexOf("sorte=peach") > -1) {
        $('#productOverviewWhitePeach').click();
    }
    if (window.location.href.indexOf("sorte=juneberry") > -1) {
        $('#productOverviewJuneberry').click();
    }
});