!function(a){"use strict";a.fn.fusion_countdown=function(){var b=a(this),c=b.data("timer").split("-"),d=b.data("gmt-offset"),e=b.data("omit-weeks");b.countDown({gmtOffset:d,omitWeeks:e,targetDate:{year:c[0],month:c[1],day:c[2],hour:c[3],min:c[4],sec:c[5]}}),b.css("visibility","visible")}}(jQuery),jQuery(document).ready(function(a){jQuery(".fusion-countdown-counter-wrapper").each(function(){$countdownID=jQuery(this).attr("id"),jQuery("#"+$countdownID).fusion_countdown()})});