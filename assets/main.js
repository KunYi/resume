$("document").ready(function() {
    labels.forEach(function(label) {
        $('#' + label + '-click').click(function(){
            $('html, body').animate({
                scrollTop: $("#" + label).offset().top
            }, 1000);
            
            $('[data-spy="scroll"]').each(function () {
                var $spy = $(this).scrollspy('refresh')
            });
         });
        $('.to-' + label).click(function(){

            $('html, body').animate({
                scrollTop: $("#" + label).offset().top - $('.navbar').height() - 2
            }, 1000);
            
            $('[data-spy="scroll"]').each(function () {
                var $spy = $(this).scrollspy('refresh')
            });

         });
    });
    // Fixed sidebar sucks. Set width to parent. 
    var sideResize = function() {
        $('.sidebar').width($('.sidebar').parent().width());
    }

    sideResize();
    // Add a listener on window reize
    $(window).resize(function() { sideResize() });

    // This isn't scroller - but it makes markdown happier in reports
    // Iteration is implicit
    // Check out getbootstrap.com for all the other table cleasses we can use
    $('table').addClass('table table-striped table-bordered');
});
/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */


!function(){"use strict";function e(){o.classList.remove("open"),c.classList.remove("open"),s.classList.remove("open")}function n(){o.classList.toggle("open"),c.classList.toggle("open"),s.classList.toggle("open"),s.classList.add("opened")}var t=document.querySelector.bind(document),s=t(".navdrawer-container"),o=document.body,c=t(".app-bar"),a=t(".menu"),i=t("main");i.addEventListener("click",e),a.addEventListener("click",n),s.addEventListener("click",function(n){("A"===n.target.nodeName||"LI"===n.target.nodeName)&&e()})}();
