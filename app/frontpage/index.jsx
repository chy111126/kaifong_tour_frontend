// ReactJS imports
import React from 'react';
import {render} from 'react-dom';

// jQuery
import $ from 'jquery';

// Custom components
import NavigationBar from 'component_path/navigation_bar/navigation_bar.jsx';
import HeroArea from 'component_path/frontpage/hero_area/hero_area.jsx';
import RecentToursArea from 'component_path/frontpage/recent_tours_area/recent_tours_area.jsx';
import ConceptArea from 'component_path/frontpage/concept_area/concept_area.jsx';
import KaifongArea from 'component_path/frontpage/kaifong_area/kaifong_area.jsx';

// ReactJS Dom Rendering
var nav_bar = render(<NavigationBar />, document.getElementById('navbar'));
var hero_area = render(<HeroArea />, document.getElementById('heroArea'));
var recent_tours_area = render(<RecentToursArea />, document.getElementById('recentToursArea'));
var concept_area = render(<ConceptArea />, document.getElementById('conceptArea'));
var kaifong_area = render(<KaifongArea />, document.getElementById('kaifongArea'));









// Page resizing to fit client window
/*
var scrollOffset = [0,0,0]
var $win = $(window);
var $doc = $(document);

var resizeAreas = function(){
    var width = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;

    var height = window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight;

    var navbarHeight = $("#navbar").outerHeight()
    $(".hero-area").css('height', height - navbarHeight);
    $(".concept-area").css('height', height - navbarHeight);
    $(".introduction-area").css('height', height - navbarHeight);
}

$doc.ready(function(){
    resizeAreas();
});

$win
.on('scroll', function(){
    // this is needed because scroll is triggered when zooming before the zoom event
    scrollOffset[2] = scrollOffset[1];
    scrollOffset[1] = scrollOffset[0];
    scrollOffset[0] = 100 / $win.height() * $win.scrollTop();
    console.log('scroll event', scrollOffset);
})
.on('resize', function(){
    // set back the history because of multiple zooming events
    scrollOffset[0] = scrollOffset[1];
    scrollOffset[1] = scrollOffset[2];
    scrollOffset[2] = 0;
    console.log('zoom event', scrollOffset);
    window.scrollTo(0, scrollOffset[0] / 100 * $win.height());
    resizeAreas();
})
*/